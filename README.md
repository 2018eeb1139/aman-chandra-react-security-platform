# Security Ops

A B2B SaaS responsive web application for security platform built with React, Vite, Tailwind CSS, and shadcn/ui components.

## Features

### Core Functionality

- **Dashboard Overview**
  - Real-time security statistics and metrics
  - Interactive vulnerability severity charts

- **Advanced Search & Filtering**
  - Real-time search across scan names, types, and status
  - Multi-criteria filtering by scan type and status
  - Combined search and filter capabilities
  - Active filter indicators with clear options

- **Scan Details & Analysis**
  - Live scan console with activity logs
  - Verification loops tracking
  - Real-time vulnerability findings

## Tech Stack

- **Frontend**: React 18 with JavaScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router DOM
- **Notification**: React Hot Toast
- **Icons**: Lucide React

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/            # shadcn/ui components
│   ├── Layout.jsx      # Main layout wrapper
│   ├── Header.jsx      # Navigation header
│   └── Sidebar.jsx     # Navigation sidebar
├── pages/              # Page components
│   ├── Login.jsx         # Authentication page
│   ├── Dashboard.jsx      # Main dashboard
│   ├── ScanDetail.jsx     # Scan details view
│   ├── Projects.jsx       # Projects management
│   ├── Schedule.jsx       # Scan scheduling
│   ├── Settings.jsx       # User settings
│   ├── Notifications.jsx  # Notification center
│   └── Support.jsx        # Help & support
├── data/               # Mock data and constants
│   └── mockData.js      # Sample data for development
├── lib/                # Utility functions
│   └── utils.js         # Helper functions
└── App.jsx              # Main app component with routing
```

### UI/UX Features

- **Responsive Sidebar**: Collapsible navigation with user profile
- **Dark Mode**: Theme toggle with system detection

## Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/2018eeb1139/aman-chandra-react-security-platform
   cd aman-chandra-react-security-platform
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```
