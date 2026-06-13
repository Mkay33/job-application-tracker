# Job Application Tracker

A simple web application that helps users track their job applications in one place.

## Features

- Add job applications
- Track company name
- Track job position
- Update application status
- Store data using browser Local Storage
- No backend required
- Responsive and lightweight

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Local Storage

## Project Structure

```text
job-application-tracker/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How It Works

Users can:

1. Enter a company name.
2. Enter the job title.
3. Select the application status.
4. Save the application.

All data is stored in the browser using Local Storage, allowing information to persist even after refreshing the page.

## Running Locally

### Option 1

Open the application directly:

```bash
index.html
```

### Option 2

Use Python HTTP Server:

```bash
python3 -m http.server 8080
```

Visit:

```text
http://localhost:8080
```

## Git Commands

Initialize repository:

```bash
git init
```

Add files:

```bash
git add .
```

Commit changes:

```bash
git commit -m "Initial commit"
```

Connect remote repository:

```bash
git remote add origin https://github.com/<your-username>/job-application-tracker.git
```

Push code:

```bash
git branch -M main
git push -u origin main

This application can be deployed using GitHub Pages.

1. Navigate to repository Settings.
2. Select Pages.
3. Choose Deploy from Branch.
4. Select the main branch.
5. Save changes.

Your application will be available at:

```text
https://<your-username>.github.io/job-application-tracker/
```

## Future Improvements

- Edit existing applications
- Delete applications
- Search and filter jobs
- Export applications to CSV
- Dark mode support
- User authentication
- Backend API integration
- Docker containerization
- CI/CD pipeline using GitHub Actions

## Learning Objectives

This project demonstrates:

- Frontend development fundamentals
- DOM manipulation
- Browser Local Storage
- Git version control
- GitHub repository management
- Static application deployment

## Author

Mkpoikana Udoekong

Platform Engineer | DevOps Engineer