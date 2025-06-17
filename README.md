# -CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS

"company": CODTECH IT SOLUTIONS

"NAME":DIVYANSH GAHLAUT

"INTERN ID" :CT04DG831

"DOMAIN" : Full Stack Web Development

"DURATION": 4 WEEKS

"MENTOR" : NEELA SANTOSH

* Project Description

This project is a Chrome Extension that tracks how much time a user spends on different websites and classifies it as either productive or unproductive. The data is then sent to a backend server where it's stored and analyzed. A dashboard is provided to visually display the productivity statistics using a pie chart.

* Tools & Technologies Used:

1.Frontend:
HTML, CSS, JavaScript – for the UI and content scripts

Chart.js – to create a dynamic pie chart in the dashboard

Live Server (VS Code Extension) – for serving the dashboard locally

2. Chrome Extension:
manifest.json – defines permissions, background scripts, and content scripts

content.js – captures time spent on each site

background.js – manages background tasks and tab events

popup.html – optional popup for extension interaction

3. Backend:
Node.js with Express.js – handles API requests (/track, /stats)

JSON File or In-Memory Store – used for storing website usage data

* How It Works:

1. User Browses Websites
The content script (content.js) detects how long a user spends on a page.

On leaving the page, it sends a POST request to the backend with:

json
Copy
Edit
{
  "website": "example.com",
  "timeSpent": 45
}
2. Data is Stored & Classified
The backend (server.js) receives this data at the /track endpoint.

It classifies websites into:

 Productive (e.g., chat.openai.com, wikipedia.org)

 Unproductive (e.g., youtube.com, instagram.com)

The backend updates time spent on each category.

 3. Dashboard Visualizes Data
The dashboard (accessed at 127.0.0.1:5500/.../dashboard/index.html) fetches stats from http://localhost:3000/stats.

It then renders a pie chart using Chart.js to show productive vs unproductive time visually.

 Key URLs During Development:
Backend API: http://localhost:3000

Dashboard UI: http://127.0.0.1:5500/CHROME EXTENSION/dashboard/index.html

* OUTPUT

