# Update Colors and Typography
# PowerShell script to apply the updated styles to the Next.js project

# Create backup of current files
Write-Host "Creating backups of existing files..." -ForegroundColor Yellow
Copy-Item -Path "src\app\globals.css" -Destination "src\app\globals.css.bak" -Force
Copy-Item -Path "tailwind.config.js" -Destination "tailwind.config.js.bak" -Force
Copy-Item -Path "src\components\animations\BlockchainBackground.tsx" -Destination "src\components\animations\BlockchainBackground.tsx.bak" -Force
Copy-Item -Path "src\components\ui\button.tsx" -Destination "src\components\ui\button.tsx.bak" -Force

# Apply updated files
Write-Host "Applying updated color scheme and typography..." -ForegroundColor Green
Copy-Item -Path "src\app\globals.css.color-fix" -Destination "src\app\globals.css" -Force
Copy-Item -Path "tailwind.config.color-fix.js" -Destination "tailwind.config.js" -Force
Copy-Item -Path "src\components\animations\BlockchainBackground.improved.tsx" -Destination "src\components\animations\BlockchainBackground.tsx" -Force
Copy-Item -Path "src\components\ui\button.improved.tsx" -Destination "src\components\ui\button.tsx" -Force

# Create hex-pattern.svg in public/images folder
Write-Host "Creating background pattern images..." -ForegroundColor Green

# Ensure images directory exists
if (!(Test-Path -Path "public\images")) {
    New-Item -ItemType Directory -Path "public\images" -Force
}

# Create hex-pattern.svg
$hexPatternSvg = @"
<svg width="60" height="104" viewBox="0 0 60 104" xmlns="http://www.w3.org/2000/svg">
  <path d="M30 0L60 17.3205V51.9615L30 69.282L0 51.9615V17.3205L30 0Z" fill="none" stroke="#e44c41" stroke-width="1.5" stroke-opacity="0.15"/>
</svg>
"@
$hexPatternSvg | Out-File -FilePath "public\images\hex-pattern.svg" -Encoding utf8 -Force

# Create hash-pattern.svg
$hashPatternSvg = @"
<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 20h40M20 0v40" stroke="#e44c41" stroke-width="0.5" stroke-opacity="0.1"/>
</svg>
"@
$hashPatternSvg | Out-File -FilePath "public\images\hash-pattern.svg" -Encoding utf8 -Force

# Remove Satoshi font if it exists in package.json
Write-Host "Updating package.json to remove Satoshi font if present..." -ForegroundColor Yellow
$packageJsonPath = "package.json"
$packageJson = Get-Content -Path $packageJsonPath -Raw | ConvertFrom-Json

# Check if the dependencies has a property with 'satoshi' in the name
$hasSatoshiFont = $packageJson.dependencies.PSObject.Properties | Where-Object { $_.Name -like "*satoshi*" }

if ($hasSatoshiFont) {
    Write-Host "Removing Satoshi font from dependencies..." -ForegroundColor Yellow
    $packageJson.dependencies.PSObject.Properties.Remove("satoshi")
    $packageJson | ConvertTo-Json -Depth 10 | Set-Content -Path $packageJsonPath
}

Write-Host "Style update complete!" -ForegroundColor Green
Write-Host "Please run 'npm install' to ensure all dependencies are correctly installed." -ForegroundColor Green
Write-Host "Then run 'npm run dev' to see the updated styling." -ForegroundColor Green
