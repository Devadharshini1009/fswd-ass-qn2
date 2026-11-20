# Placement Skill Monitoring Management System – Q2

This project implements the Q2 assignment requirements:
- Axios communication between React and Express.
- Axios GET, POST, PUT and DELETE requests for student skill records.
- Display student skill records in the React interface.

The backend uses temporary in-memory storage. MongoDB/Mongoose are intentionally not included because they belong to Q3.

## Requirements
- Node.js 18 or later

## Run the backend
Open a terminal in `backend`:

```bash
npm install
npm run dev
```
Backend URL: `http://localhost:5000`

## Run the frontend
Open another terminal in `frontend`:

```bash
npm install
npm run dev
```
Open the Vite URL shown in the terminal (normally `http://localhost:5173`).

## API endpoints
- `GET /api/students` – get all student skill records
- `POST /api/students` – create a student skill record
- `PUT /api/students/:id` – update a student skill record
- `DELETE /api/students/:id` – delete a student skill record

All frontend API requests are made through Axios in `frontend/src/api/studentApi.js`.
