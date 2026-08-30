# Branch workflow

`main` is protected by convention, not by GitHub branch-protection rules: **never commit or push directly to `main`.** Every change lands through a branch + PR, even for a solo-dev repo, because `.github/workflows/pages.yaml` deploys to production on every push to `main` — a branch is what keeps a half-finished change off the live site.

## Steps

1. **Get an issue.** Check for one covering this work; if none exists, create it (`gh issue create`, see `docs/agents/issue-tracker.md`). Skip this only for trivial one-line fixes with no discussion value.
2. **Branch off latest `main`**:
   ```
   git checkout main && git pull && git checkout -b timson/<kebab-slug>
   ```
   `<kebab-slug>` is a short description of the change (e.g. `timson/add-dark-mode-toggle`), matching the existing `timson/test-branch` precedent.
3. **Commit on the branch.** Never `git commit` while `git branch --show-current` prints `main`.
4. **Open a PR**, referencing the issue so it auto-closes on merge:
   ```
   gh pr create --title "..." --body "Closes #<n>"
   ```
5. **Merge, then clean up**:
   ```
   gh pr merge <n> --squash --delete-branch
   git checkout main && git pull && git branch -d timson/<kebab-slug>
   ```

Done when `git branch --show-current` is back to `main` and `git status` shows no leftover local branch for the merged work.
