# testes
Testing CODEX

## Setting up a remote

To push these commits to GitHub, you can add a remote repository and push:

```bash
# Add your GitHub repository as a remote
git remote add origin https://github.com/<your-username>/<repo>.git

# Push the current branch to GitHub
git push -u origin work
```

Replace `<your-username>` and `<repo>` with your actual GitHub username and repository name.

## Running the timer locally

Because the scripts in `index.html` use ES modules, most browsers block them when opened directly from the filesystem. Use a simple HTTP server instead:

```bash
# From the project directory
python3 -m http.server
```

Then visit [http://localhost:8000](http://localhost:8000) in your browser and the timer will work correctly.
