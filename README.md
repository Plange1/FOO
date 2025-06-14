# Oyster Dashboard

A modern, responsive HR and team management dashboard built with React, Tailwind CSS, and Heroicons. This project recreates a Figma design into a fully functional web application.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with Tailwind CSS
- **Component Architecture**: Modular React components for easy maintenance
- **Interactive Elements**: Hover effects, buttons, and navigation
- **HR Management Sections**:
  - Hiring Progress tracking
  - Invoice management
  - Expense tracking
  - Time-off requests
  - Time tracking
  - Discovery recommendations

## 🛠️ Technologies Used

- **React 18** - Frontend library
- **Tailwind CSS** - Utility-first CSS framework
- **Heroicons** - Beautiful hand-crafted SVG icons
- **Modern JavaScript (ES6+)** - Latest JavaScript features

## 📦 Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd oyster-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Dashboard.jsx          # Main dashboard layout
│   ├── Header.jsx            # Top navigation header
│   ├── Sidebar.jsx           # Left navigation sidebar
│   ├── MainContent.jsx       # Main content area
│   ├── HiringProgress.jsx    # Hiring tasks section
│   ├── DiscoverSection.jsx   # Recommendation cards
│   ├── InvoicesSection.jsx   # Invoice management
│   ├── ExpensesSection.jsx   # Expense tracking
│   ├── TimeOffSection.jsx    # Time-off requests
│   └── TimeTrackingSection.jsx # Time tracking
├── App.jsx                   # Root component
├── App.css                   # App styles
├── index.js                  # Entry point
└── index.css                 # Global styles with Tailwind
```

## 🎨 Design Features

- **Color Scheme**: Professional blue and gray palette
- **Typography**: System fonts for optimal readability
- **Icons**: Heroicons for consistent iconography
- **Layout**: Flexbox and CSS Grid for responsive layouts
- **Spacing**: Consistent spacing using Tailwind's spacing scale

## 📱 Responsive Design

The dashboard is fully responsive and adapts to different screen sizes:
- **Desktop**: Full sidebar navigation with two-column layout
- **Tablet**: Responsive grid that stacks appropriately
- **Mobile**: Optimized for mobile viewing (sidebar can be enhanced with mobile menu)

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 🚀 Deployment

The app can be deployed to various platforms:

### Netlify
```bash
npm run build
# Deploy the build folder to Netlify
```

### Vercel
```bash
npm run build
# Deploy using Vercel CLI or GitHub integration
```

## 🎯 Key Components

### Header
- Logo and branding
- Global search functionality
- Notification indicators
- User profile access

### Sidebar Navigation
- Home, Team, Hire, Pay sections
- Total rewards and compensation
- Compliance and company settings
- Resources and help center

### Dashboard Sections
- **Hiring Progress**: Task management for recruitment
- **Discover**: Personalized recommendations
- **Invoices**: Financial document management
- **Expenses**: Expense tracking and approval
- **Time Off**: Leave request management
- **Time Tracking**: Work hours and overtime monitoring

## 🔮 Future Enhancements

- Add routing with React Router
- Implement state management (Redux/Context API)
- Add data fetching from APIs
- Include authentication system
- Add more interactive features
- Implement dark mode
- Add mobile-specific navigation

## 📄 License

This project is created for demonstration purposes based on a Figma design conversion.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ using React and Tailwind CSS 