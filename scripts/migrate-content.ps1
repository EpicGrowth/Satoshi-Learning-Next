#!/usr/bin/env pwsh

$sourceDir = "C:\Users\Alienware17\Source\Epic-Growth\Satoshi-Learning-Path"
$targetDir = "C:\Users\Alienware17\Source\Epic-Growth\satoshi-learning-next"

# Bitcoin modules to migrate
$bitcoinModules = @(
    @{
        Source = "src/components/learn/bitcoin/modules/fundamentals"
        Target = "src/app/learn/bitcoin/fundamentals/content"
        Files = @(
            "what-is-bitcoin.tsx",
            "blockchain-basics.tsx",
            "private-keys-wallets.tsx",
            "making-transactions.tsx",
            "bitcoin-network.tsx"
        )
    },
    @{
        Source = "src/components/learn/bitcoin/modules/economics"
        Target = "src/app/learn/bitcoin/economics/content"
        Files = @(
            "monetary-policy.tsx",
            "market-dynamics.tsx",
            "game-theory.tsx",
            "economic-impact.tsx"
        )
    },
    @{
        Source = "src/components/learn/bitcoin/modules/technical"
        Target = "src/app/learn/bitcoin/technical/content"
        Files = @(
            "mining-consensus.tsx",
            "network-architecture.tsx",
            "script-language.tsx",
            "protocol-updates.tsx"
        )
    }
)

# Lightning modules to migrate
$lightningModules = @(
    @{
        Source = "src/components/learn/lightning/modules/fundamentals"
        Target = "src/app/learn/lightning/fundamentals/content"
        Files = @(
            "what-is-lightning.tsx",
            "how-lightning-works.tsx",
            "payment-channels.tsx",
            "network-topology.tsx",
            "onion-routing.tsx"
        )
    },
    @{
        Source = "src/components/learn/lightning/modules/advanced-concepts"
        Target = "src/app/learn/lightning/advanced/content"
        Files = @(
            "htlc-deep-dive.tsx",
            "multipath-payments.tsx",
            "submarine-swaps.tsx",
            "watchtowers.tsx",
            "routing.tsx",
            "security-practices.tsx"
        )
    },
    @{
        Source = "src/components/learn/lightning/modules/channel-management"
        Target = "src/app/learn/lightning/channels/content"
        Files = @(
            "channel-capacity.tsx",
            "opening-channels.tsx",
            "channel-balancing.tsx",
            "closing-channels.tsx"
        )
    },
    @{
        Source = "src/components/learn/lightning/modules/node-operations"
        Target = "src/app/learn/lightning/node/content"
        Files = @(
            "node-setup.tsx",
            "basic-configuration.tsx",
            "channel-management.tsx",
            "monitoring.tsx",
            "maintenance-tasks.tsx",
            "backups.tsx",
            "security-setup.tsx"
        )
    }
)

# Shared components to migrate
$sharedComponents = @(
    @{
        Source = "src/components/learn/shared/components"
        Target = "src/components/learn/shared"
        Files = @(
            "module-content.tsx",
            "module-layout.tsx",
            "module-metadata.tsx",
            "learning-sidebar.tsx"
        )
    },
    @{
        Source = "src/components/learn"
        Target = "src/components/learn/shared"
        Files = @(
            "ConceptCard.tsx",
            "InteractiveDemo.tsx",
            "KeyDemo.tsx"
        )
    }
)

# Function to create directory if it doesn't exist
function EnsureDirectory {
    param($path)
    if (-not (Test-Path $path)) {
        New-Item -ItemType Directory -Path $path -Force
    }
}

# Function to migrate a module
function MigrateModule {
    param($module)
    
    $sourcePath = Join-Path $sourceDir $module.Source
    $targetPath = Join-Path $targetDir $module.Target
    
    # Create target directory
    EnsureDirectory $targetPath
    
    foreach ($file in $module.Files) {
        $sourceFile = Join-Path $sourcePath $file
        $targetFile = Join-Path $targetPath $file
        
        if (Test-Path $sourceFile) {
            Write-Host "Migrating $file..."
            Copy-Item $sourceFile $targetFile -Force
        } else {
            Write-Host "Warning: Source file $file not found"
        }
    }
}

# Migrate Bitcoin modules
Write-Host "Migrating Bitcoin modules..."
foreach ($module in $bitcoinModules) {
    MigrateModule $module
}

# Migrate Lightning modules
Write-Host "Migrating Lightning modules..."
foreach ($module in $lightningModules) {
    MigrateModule $module
}

# Migrate shared components
Write-Host "Migrating shared components..."
foreach ($component in $sharedComponents) {
    MigrateModule $component
}

Write-Host "Content migration completed!"
