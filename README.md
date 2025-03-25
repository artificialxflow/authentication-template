# Authentication Template

A full-stack authentication template featuring a Next.js frontend and Node.js backend with JWT authentication.

## Features

- 🔐 JWT Authentication
- ⚡ Next.js 13+ Frontend
- 🚀 Node.js/Express Backend
- 🎨 Tailwind CSS Styling
- 📱 Responsive Design
- 🛡️ Protected Routes
- 🔄 Auto-logout on token expiry
- ✨ Modern UI Components

## Project Structure

```
authentication-template/
├── frontend/               # Next.js frontend application
│   ├── app/               # App router directory
│   │   ├── components/    # Reusable components
│   │   ├── login/        # Login page
│   │   ├── register/     # Registration page
│   │   ├── dashboard/    # Protected dashboard page
│   │   └── about/        # Protected about page
│   └── ...
└── backend/               # Node.js/Express backend
    ├── routes/           # API routes
    ├── controllers/      # Route controllers
    ├── middleware/       # Custom middleware
    └── models/          # Data models
```

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn
- MongoDB (local or Atlas)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/artificialxflow/authentication-template.git
cd authentication-template
```

2. Setup Backend:
```bash
cd backend
npm install
# Create .env file with your MongoDB URI and JWT secret
npm run dev
```

3. Setup Frontend:
```bash
cd frontend
npm install
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

### Backend (.env)
```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Features Overview

- **Authentication Flow**
  - User registration with username, email, and password
  - User login with email and password
  - JWT-based authentication
  - Protected routes requiring authentication
  - Auto-logout on token expiration

- **Frontend Features**
  - Modern UI with Tailwind CSS
  - Responsive design
  - Form validation
  - Error handling
  - Loading states
  - Protected routes
  - Navigation guard

- **Backend Features**
  - Express.js REST API
  - MongoDB database
  - JWT authentication
  - Password hashing
  - Input validation
  - Error handling middleware

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.