# Backing Up Original sats.sv

## Using GitHub Actions (Preferred Method)

1. Go to the Epic-Growth/Satoshi-Learning-Path repository on GitHub
2. Navigate to Actions → Workflows
3. Select the "Backup Original sats.sv Site" workflow
4. Click "Run workflow"
5. Enter a backup name (e.g., "pre-nextjs-migration")
6. Click "Run workflow" to start the backup process

## Manual Backup (Alternative Method)

If GitHub Actions is unavailable, run the following commands:

```bash
# Authenticate with Google Cloud
gcloud auth login

# Set appropriate project
gcloud config set project [your-project-id]

# Create timestamped backup folder
TIMESTAMP=$(date +"%Y%m%d-%H%M%S")
BACKUP_FOLDER="pre-nextjs-migration-${TIMESTAMP}"

# Ensure backup bucket exists
gsutil mb -p $(gcloud config get-value project) gs://sats-sv-backups || true

# Copy all files from production to backup
gsutil -m cp -r gs://sats-sv-static/* gs://sats-sv-backups/${BACKUP_FOLDER}/

# Create and upload backup metadata
echo "Backup created on $(date)" > backup-info.txt
echo "Original site: sats.sv" >> backup-info.txt
echo "Backup reason: Pre-Next.js Migration" >> backup-info.txt
gsutil cp backup-info.txt gs://sats-sv-backups/${BACKUP_FOLDER}/backup-info.txt

echo "Backup complete at gs://sats-sv-backups/${BACKUP_FOLDER}/"
```

## Verifying the Backup

Confirm the backup was successful by:

1. Checking the Google Cloud Console: https://console.cloud.google.com/storage/browser/sats-sv-backups
2. Downloading a few key files to verify content integrity
3. Recording the backup folder name for potential rollback
