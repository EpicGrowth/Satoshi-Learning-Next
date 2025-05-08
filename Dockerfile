# Use Node.js 20 as the base image
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects anonymous telemetry data - disable it
ENV NEXT_TELEMETRY_DISABLED 1

# Build the application
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Add a non-root user to run the app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built app and ensure all static assets are included
COPY --from=builder /app/public ./public

# Set correct permissions for prerender cache
RUN mkdir -p .next
RUN chown nextjs:nodejs .next

# Copy the standalone server build
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# Important: Create the complete .next directory structure first
RUN mkdir -p ./.next/static
RUN chown -R nextjs:nodejs ./.next

# Copy all static files including CSS
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

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