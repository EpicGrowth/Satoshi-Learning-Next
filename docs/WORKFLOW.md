# Satoshi Station Development Workflow

## Repository Strategy

Satoshi Station uses a dual-repository strategy:

1. **Development & Staging** (staging.sats.sv)
   - Repository: [Satoshi-Learning-Next](https://github.com/EpicGrowth/Satoshi-Learning-Next)
   - All development work happens here
   - Automatic deployment to staging environment

2. **Production** (sats.sv)
   - Repository: [Satoshi-Learning-Path](https://github.com/Epic-Growth/Satoshi-Learning-Path)
   - Deployments via PR approval only
   - Changes promoted from staging

## Workflow Overview

### 1. Development Process

1. **Start by syncing repositories**:
   ```bash
   cd /home/jean-paul/Source/ClaudeCode/sats-production
   ./scripts/promote-to-production.sh sync
   ```

2. **Create feature branch in staging repository**:
   ```bash
   cd /home/jean-paul/Source/ClaudeCode/sats-next
   git checkout -b feature/your-feature-name
   ```

3. **Implement and test your changes**

4. **Create PR to staging main branch**:
   - Push your feature branch to GitHub
   - Create a PR to merge into the staging `main` branch
   - Automated deployment will deploy to staging.sats.sv

5. **Test thoroughly in staging environment**

### 2. Promotion to Production

1. **Sync repositories and create release branch**:
   ```bash
   cd /home/jean-paul/Source/ClaudeCode/sats-production
   ./scripts/promote-to-production.sh v1.x.x
   ```

2. **Create and review PR**:
   - Follow the link provided by the script
   - Add detailed description of changes
   - Request reviews

3. **After approval, merge to production**:
   - Merging will trigger deployment to production (sats.sv)

4. **Verify production deployment**:
   - Check that all changes are correctly deployed
   - Verify that robots.txt is correctly preserved

## Important Notes

### Robots.txt Handling

- **Staging**: Should disallow all crawlers (`Disallow: /`)
- **Production**: Should allow crawlers (`Allow: /`)
- The promotion script automatically preserves the production robots.txt

### Branch Naming Conventions

- Feature branches: `feature/descriptive-name`
- Bug fixes: `fix/descriptive-name`
- Hotfixes: `hotfix/descriptive-name`
- Release branches: `release/vX.Y.Z`

### Commit Message Format

Follow conventional commits format:
- `feat: Add new feature`
- `fix: Fix specific issue`
- `docs: Update documentation`
- `style: Format code (no functional changes)`
- `refactor: Code changes that neither fix nor add features`
- `test: Add or update tests`
- `chore: Changes to build process or tools`

## Troubleshooting

### Common Issues

1. **Merge conflicts during promotion**:
   - Resolve conflicts in the release branch
   - Commit the resolved conflicts
   - Push the updated release branch

2. **Robots.txt not preserved**:
   - Check that the promotion script ran completely
   - Manually restore the production robots.txt if needed

3. **Deployment failures**:
   - Check GitHub Actions logs for errors
   - Verify that all dependencies are correctly installed

For any other issues, consult the technical documentation or contact the development team.
