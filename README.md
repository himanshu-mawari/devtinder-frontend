# DevTinder — Frontend

A React client for DevTinder, a developer-matching platform with real-time chat and connection requests.

## Features

* Secure authentication and protected routes
* Developer discovery feed with seamless automatic pagination
* Real-time connection request updates and unread-message indicators
* Live one-to-one chat with infinite-scroll message history using cursor-based pagination
* Optimistic UI updates with automatic rollback on failure
* Responsive layouts across mobile and desktop

## Tech Stack

* React
* Redux Toolkit / RTK Query
* Socket.IO Client
* React Router
* Tailwind CSS
* Vite

## Architecture

```text
React UI → RTK Query → Backend API → Database
```

Real-time communication operates independently of the request/response cycle:

```text
React ↔ Socket.IO Client ↔ Socket.IO Server
```

Feature and chat data is organized through feature-scoped `injectEndpoints` under `services/`, sharing a single `baseApi`. Socket events update RTK Query cache directly with `updateQueryData`, avoiding unnecessary refetches.

## Real-Time Communication

* Authenticated sockets join a personal room (`user:<id>`) for real-time connection request events and unread-message updates.
* The active conversation uses a screen-scoped room for live message delivery.
* RTK Query `infiniteQuery` handles page-based feed pagination and cursor-based chat history pagination.

## Getting Started

### Prerequisites

* Node.js
* npm

### Installation

```bash
git clone https://github.com/himanshu-mawari/devtinder-frontend.git
cd devtinder-frontend
npm install
```

### Environment Variables

Create a `.env` file:

```env
VITE_API_BASE_URL=http://localhost:2007
```

### Running Locally

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Related Repository

Backend: [DevTinder — Backend](https://github.com/himanshu-mawari/Devtinder)

## Deployment

Live demo: https://devtinder-himanshu.vercel.app
>**Note:** The first load may take 30–60s after a period of inactivity.