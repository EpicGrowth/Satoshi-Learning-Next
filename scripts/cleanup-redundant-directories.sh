#!/bin/bash

# This script cleans up redundant directories in the SatoshiStationNext learning paths
# It will create backups of the directories before removing them for safety

# Set the base directory
BASE_DIR="/home/jean-paul/Source/ClaudeCode/SatoshiStationNext"
BACKUP_DIR="$BASE_DIR/directory-backups-$(date +%Y%m%d%H%M%S)"

# Create backup directory
mkdir -p "$BACKUP_DIR"
echo "Created backup directory: $BACKUP_DIR"

# Function to backup and remove a directory
backup_and_remove() {
  local dir=$1
  local backup_path="$BACKUP_DIR/$(basename "$dir")"
  
  echo "Backing up: $dir to $backup_path"
  cp -r "$dir" "$backup_path"
  
  if [ $? -eq 0 ]; then
    echo "✅ Backup successful. Removing original directory."
    rm -rf "$dir"
    if [ $? -eq 0 ]; then
      echo "✅ Removed: $dir"
    else
      echo "❌ Failed to remove: $dir"
    fi
  else
    echo "❌ Backup failed for: $dir. Skipping removal."
  fi
}

echo "Starting cleanup of redundant directories..."
echo "============================================"

# List of redundant directories in Lightning learning path
LIGHTNING_REDUNDANT_DIRS=(
  "$BASE_DIR/src/app/learn/lightning/fundamentals"
  "$BASE_DIR/src/app/learn/lightning/channel-management"
  "$BASE_DIR/src/app/learn/lightning/node-operations"
  "$BASE_DIR/src/app/learn/lightning/routing-operations"
  "$BASE_DIR/src/app/learn/lightning/security"
)

# List of redundant directories in Bitcoin learning path
BITCOIN_REDUNDANT_DIRS=(
  "$BASE_DIR/src/app/learn/bitcoin/economics/bitcoin-economics"
  "$BASE_DIR/src/app/learn/bitcoin/fundamentals"
  "$BASE_DIR/src/app/learn/bitcoin/economics"
  "$BASE_DIR/src/app/learn/bitcoin/technical"
)

# Backup and remove Lightning redundant directories
echo "Cleaning up Lightning learning path redundancies..."
for dir in "${LIGHTNING_REDUNDANT_DIRS[@]}"; do
  if [ -d "$dir" ]; then
    backup_and_remove "$dir"
  else
    echo "Directory not found: $dir"
  fi
done

# Backup and remove Bitcoin redundant directories
echo "Cleaning up Bitcoin learning path redundancies..."
for dir in "${BITCOIN_REDUNDANT_DIRS[@]}"; do
  if [ -d "$dir" ]; then
    backup_and_remove "$dir"
  else
    echo "Directory not found: $dir"
  fi
done

echo "============================================"
echo "Cleanup completed. Backups are stored in: $BACKUP_DIR"
echo "Please verify that everything works properly with the development server."
echo "If there are any issues, you can restore the directories from the backup."
