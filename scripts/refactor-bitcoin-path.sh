#!/bin/bash

# This script refactors the Bitcoin learning path to use consistent bitcoin- prefixes
# similar to the Lightning path's naming convention

# Set the base directory
BASE_DIR="/home/jean-paul/Source/ClaudeCode/SatoshiStationNext"
BACKUP_DIR="$BASE_DIR/bitcoin-refactor-backup-$(date +%Y%m%d%H%M%S)"
SRC_DIR="$BASE_DIR/src"
APP_DIR="$SRC_DIR/app/learn/bitcoin"

# Create backup directory
mkdir -p "$BACKUP_DIR"
echo "Created backup directory: $BACKUP_DIR"

# Backup the entire bitcoin directory and config
cp -r "$APP_DIR" "$BACKUP_DIR/bitcoin"
cp "$SRC_DIR/config/learning-modules.ts" "$BACKUP_DIR/learning-modules.ts"
echo "✅ Created backup of bitcoin directory and learning modules config"

# Function to create new prefixed directory and copy content
create_prefixed_dir() {
  local old_name=$1
  local new_name="bitcoin-$old_name"
  local old_path="$APP_DIR/$old_name"
  local new_path="$APP_DIR/$new_name"
  
  echo "Creating prefixed directory: $new_name"
  if [ -d "$old_path" ]; then
    mkdir -p "$new_path"
    cp -r "$old_path"/* "$new_path"/
    echo "✅ Copied content from $old_path to $new_path"
  else
    echo "❌ Directory not found: $old_path"
  fi
}

# Create new prefixed directories
echo "Creating new prefixed directories..."
create_prefixed_dir "fundamentals"
create_prefixed_dir "economics"
create_prefixed_dir "technical"

# Update references in code files
echo "Updating import references in code files..."

# Find files that might reference the old paths
FILES_TO_CHECK=$(grep -r --include="*.tsx" --include="*.ts" "/bitcoin/fundamentals\|/bitcoin/economics\|/bitcoin/technical" "$SRC_DIR" | cut -d: -f1 | sort | uniq)

for file in $FILES_TO_CHECK; do
  echo "Checking file: $file"
  # Make a backup of the file
  cp "$file" "$BACKUP_DIR/$(basename "$file")"
  
  # Update references
  sed -i 's|/bitcoin/fundamentals|/bitcoin/bitcoin-fundamentals|g' "$file"
  sed -i 's|/bitcoin/economics|/bitcoin/bitcoin-economics|g' "$file"
  sed -i 's|/bitcoin/technical|/bitcoin/bitcoin-technical|g' "$file"
  
  # Update any module ID references (this is a bit more tricky and may need manual review)
  sed -i 's|id: '"'"'fundamentals'"'"'|id: '"'"'bitcoin-fundamentals'"'"'|g' "$file"
  sed -i 's|id: '"'"'economics'"'"'|id: '"'"'bitcoin-economics'"'"'|g' "$file"
  sed -i 's|id: '"'"'technical'"'"'|id: '"'"'bitcoin-technical'"'"'|g' "$file"
  
  echo "✅ Updated references in $file"
done

# Update learning-modules.ts specifically
echo "Updating learning-modules.ts..."
CONFIG_FILE="$SRC_DIR/config/learning-modules.ts"

# Replace module IDs
sed -i 's|id: '"'"'fundamentals'"'"'|id: '"'"'bitcoin-fundamentals'"'"'|g' "$CONFIG_FILE"
sed -i 's|id: '"'"'economics'"'"'|id: '"'"'bitcoin-economics'"'"'|g' "$CONFIG_FILE"
sed -i 's|id: '"'"'technical'"'"'|id: '"'"'bitcoin-technical'"'"'|g' "$CONFIG_FILE"

echo "✅ Updated module IDs in learning-modules.ts"

echo "===== Bitcoin Learning Path Refactoring Complete ====="
echo "New prefixed directories have been created."
echo "Original directories are still intact."
echo "A backup has been created at: $BACKUP_DIR"
echo "Once you've verified everything works correctly, you can run the cleanup script to remove the old directories."
echo ""
echo "Next steps:"
echo "1. Test the application with the new directory structure"
echo "2. Run the cleanup script to remove old directories"
echo "3. Update the README.md to reflect the new structure"
