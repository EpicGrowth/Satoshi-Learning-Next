# Use Node.js 20 as the base image
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Create production environment file with fixed settings
RUN echo "NODE_ENV=production" > .env.production
RUN echo "NEXT_PUBLIC_BASE_URL=https://staging.sats.sv" >> .env.production
RUN echo "NEXT_TELEMETRY_DISABLED=1" >> .env.production

# Build the application with a fixed build ID for stable asset paths
ENV NEXT_BUILD_ID=sats-staging-build
RUN npm run build

# Production image, copy all the files and run next
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV NEXT_BUILD_ID sats-staging-build

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files for production
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.env.production ./

# Copy the ENTIRE .next directory to ensure all assets are included
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next

# Copy the standalone server output
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# Explicitly set permissions for all critical directories
RUN chmod -R 755 ./public
RUN chmod -R 755 ./.next/static
RUN chmod -R 755 ./.next/server
RUN chmod -R 755 ./.next/standalone

# Ensure cache directories exist with proper permissions
RUN mkdir -p ./.next/cache && chown -R nextjs:nodejs ./.next

# Create a simple health check file for debugging
RUN echo "Satoshi Station Next.js app - $(date)" > ./public/health.txt
# Explicitly copy other static assets that might be needed
COPY --from=builder --chown=nextjs:nodejs /app/.next/server ./.next/server
COPY --from=builder --chown=nextjs:nodejs /app/.next/required-server-files.json ./.next/
RUN find ./.next -type d -exec chmod 755 {} \;
RUN find ./.next -type f -exec chmod 644 {} \;

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Start the application
CMD ["node", "server.js"]