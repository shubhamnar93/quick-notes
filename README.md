# Quick Notes

A simple Laravel CRUD application for creating, viewing,
editing and deleting notes.

## Tech Stack
- Laravel
- PHP
- SQLite
- React

## Features
- Create notes
- View notes
- Edit notes
- Delete notes

## Setup
Clone the repository and install dependencies
``` bash
git clone git@github.com:shubhamnar93/quick-notes.git
cd quick-notes

# Backend setup
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate

# Frontend setup
npm install
npm run build

# Start the dev server
composer run dev
```
Once running, open http://localhost:8000 in your browser.

## Project Structure
```
quick-notes/
├── app/               # Laravel backend (models, controllers)
├── resources/js/       # React frontend
├── routes/            # API & web routes
└── database/          # Migrations
```

