# CSS Fix Trigger

This file is created to trigger a new deployment with the updated Next.js configuration that should fix the CSS loading issues:

1. Removed assetPrefix which can cause CSS loading issues
2. Added unoptimized: true to the images configuration
3. Added crossOrigin: 'anonymous' to help with resource loading
4. Added poweredByHeader: false as a security best practice

These changes should help resolve the styling issues on staging.sats.sv.
