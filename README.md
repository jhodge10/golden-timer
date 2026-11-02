# Golden Countdown (Flask)

A one-page timer from 1 second up to 300 hours. The user can start it once per page load, and at zero the numbers flash red and gold.

## Run it in VS Code

1. Open the `gold_timer` folder in VS Code.
2. Open **Terminal → New Terminal**.
3. (Recommended) Create and activate a virtual environment:

   Windows PowerShell:
   ```powershell
   python -m venv .venv
   .\.venv\Scripts\Activate.ps1
   ```
   macOS / Linux:
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate
   ```
4. Install Flask: `pip install -r requirements.txt`
5. Start: `python app.py` (Windows can use `py app.py`)
6. Open `http://127.0.0.1:5000` in your browser.

## Customize

- Background picture: the supplied Zelda image is included as `static/images/zelda-background.png`. To replace it, put another image in the folder and update the `url(...)` in `static/css/style.css`. The page background overlay is intentionally light, and the green/brown timer panel is semi-transparent so the background stays visible.
- Theme colors: green `#01A049`, brown `#432f0f`, and gold `#DDA417`. Edit the CSS variables at the top of `static/css/style.css` to change them.
- Title: edit `templates/index.html`.

## How it works

Python/Flask serves the webpage; HTML and CSS control appearance; JavaScript runs the live countdown in the browser. The input is measured in hours, accepts decimals, and has a maximum of 300. Once started, the Start button is disabled. Reloading the page resets the timer. Closing the page ends the timer; it is not stored on the server.

## Publish to GitHub

1. Create a new **empty** repository on GitHub (for example, `golden-timer`). Don't add a README or `.gitignore` on GitHub when creating it, because this project includes both.
2. In VS Code, open a terminal in this folder and run:

   ```powershell
   git init
   git add .
   git commit -m "Initial Golden Timer website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/golden-timer.git
   git push -u origin main
   ```

Replace `YOUR-USERNAME` with your GitHub username. GitHub may ask you to authenticate. Later updates can be pushed with `git add .`, `git commit -m "Update website"`, and `git push`.

**Note:** GitHub stores the code, but GitHub Pages does not run Flask/Python servers. To publish the live Flask site, use a Python-capable hosting platform such as Render.
