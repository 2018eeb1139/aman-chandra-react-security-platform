// User data
export const currentUser = {
  id: "user-123",
  email: "aman@fenrir-security.com",
  firstName: "Admin",
  lastName: "User",
  role: "Security Lead",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=boy",
};

// Organization stats
export const orgStats = {
  critical: {
    count: 86,
    change: 2,
    trend: "up",
    icon: "AlertCircle",
  },
  high: {
    count: 16,
    change: 0.9,
    trend: "up",
    icon: "AlertTriangle",
  },
  medium: {
    count: 26,
    change: -0.9,
    trend: "down",
    icon: "AlertOctagon",
  },
  low: {
    count: 16,
    change: 1,
    trend: "up",
    icon: "Info",
  },
};

// Scan list data
export const scans = [
  {
    id: "scan-1",
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    id: "scan-2",
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    id: "scan-3",
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    id: "scan-4",
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    id: "scan-5",
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    id: "scan-6",
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    id: "scan-7",
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    id: "scan-8",
    name: "Web App Servers",
    type: "Greybox",
    status: "Scheduled",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 0, low: 0 },
    lastScan: "4d ago",
  },
  {
    id: "scan-9",
    name: "Web App Servers",
    type: "Greybox",
    status: "Scheduled",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 0, low: 0 },
    lastScan: "4d ago",
  },
  {
    id: "scan-10",
    name: "IoT Devices",
    type: "Blackbox",
    status: "Failed",
    progress: 10,
    vulnerabilities: { critical: 2, high: 4, medium: 1, low: 1 },
    lastScan: "3d ago",
  },
  {
    id: "scan-11",
    name: "Temp Data",
    type: "Blackbox",
    status: "Failed",
    progress: 10,
    vulnerabilities: { critical: 2, high: 4, medium: 1, low: 1 },
    lastScan: "3d ago",
  },
];

// Active scan detail
export const activeScan = {
  id: "scan-active-1",
  name: "Project X",
  type: "Grey Box",
  targets: "google.com",
  startedAt: "Nov 22, 09:00AM",
  credentials: "2 Active",
  files: "Control.pdf",
  checklists: "40/350",
  progress: 0,
  status: "In Progress",
  steps: [
    { label: "Spidering", icon: "Search" },
    { label: "Mapping", icon: "DatabaseSearch" },
    { label: "Testing", icon: "FlaskConical" },
    { label: "Validating", icon: "BookText" },
    { label: "Reporting", icon: "NotebookText" },
  ],
  currentStep: 0,
};

// Console logs
export const consoleLogs = [
  {
    id: "log-1",
    timestamp: "[09:00:00]",
    message: `I'll begin a systematic penetration test on helpdesk.democorp.com. Let me start with reconnaissance and enumeration.`,
    highlights: [{ text: "helpdesk.democorp.com", type: "url" }],
  },
  {
    id: "log-2",
    timestamp: "[09:01:00]",
    message: `Good! target is online. Now let me perform port scanning to identify running services.`,
    highlights: [],
  },
  {
    id: "log-3",
    timestamp: "[09:02:00]",
    message: `Excellent reconnaissance results: helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server) Let me probe the web server on target first to understand its structure.`,
    highlights: [
      { text: "helpdesk.democorp.com", type: "url" },
      { text: "Apache httpd 2.4.65", type: "keyword" },
    ],
  },
  {
    id: "log-4",
    timestamp: "[09:03:00]",
    message: `Great! I found a login page for a Help Desk Platform. I can see a useful comment: "TODO: Delete the testing account (test:test)". Let me test this credential. The login redirects to /password/test. Let me follow that path and explore it.`,
    highlights: [
      { text: "TODO: Delete the testing account (test:test)", type: "keyword" },
      { text: "/password/test", type: "url" },
    ],
  },
  {
    id: "log-5",
    timestamp: "[09:04:00]",
    message: `The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to '#' which means the current page. Let me try a different approach.`,
    highlights: [
      { text: "/password/test", type: "url" },
      { text: "#", type: "keyword" },
    ],
  },
  {
    id: "log-6",
    timestamp: "[09:05:00]",
    message: `It redirects back to /password/test. Let me check if there's an /api endpoint or look for other testing endpoints.`,
    highlights: [{ text: "/password/test", type: "url" }],
  },
  {
    id: "log-7",
    timestamp: "[09:06:00]",
    message: `Great! I can access the dashboard using the "X-UserId: 10032" header. The dashboard shows "Welcome, John Doe". This suggests an **IDOR vulnerability** - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application...`,
    highlights: [
      { text: "X-UserId: 10032", type: "keyword" },
      { text: "**IDOR vulnerability**", type: "error" },
    ],
  },
];

// Verification loops
export const verificationLoops = [
  {
    id: "vloop-1",
    timestamp: "[09:10:00]",
    message: "Verifying IDOR vulnerability on user profile endpoint...",
    status: "success",
  },
  {
    id: "vloop-2",
    timestamp: "[09:10:30]",
    message: "Cross-site request forgery token validation passed.",
    status: "success",
  },
  {
    id: "vloop-3",
    timestamp: "[09:11:00]",
    message: "Testing SQL injection on search parameter...",
    status: "warning",
  },
  {
    id: "vloop-4",
    timestamp: "[09:11:45]",
    message: "Authentication bypass attempt detected and blocked.",
    status: "error",
  },
];

// Findings
export const findings = [
  {
    id: "finding-1",
    severity: "Critical",
    timestamp: "18:45:23",
    title: "SQL Injection in Authentication Endpoint",
    endpoint: "/api/users/profile",
    description:
      "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.",
  },
  {
    id: "finding-2",
    severity: "High",
    timestamp: "18:45:23",
    title: "Unauthorized Access to User Metadata",
    endpoint: "/api/auth/login",
    description:
      "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.",
  },
  {
    id: "finding-3",
    severity: "Medium",
    timestamp: "18:45:23",
    title: "Broken Authentication Rate Limiting",
    endpoint: "/api/search",
    description:
      "No effective rate limiting detected on login attempts. Automated brute-force attempts possible.",
  },
  {
    id: "finding-4",
    severity: "High",
    timestamp: "18:45:23",
    title: "Exposed API Credentials",
    endpoint: "/api/admin",
    description:
      "API keys found in client-side JavaScript code. Keys should be rotated immediately.",
  },
];

// Status bar data
export const statusBar = {
  subAgents: 0,
  parallelExecutions: 2,
  operations: 1,
  vulnerabilities: {
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
  },
};

// Navigation items
export const navigationItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: "LayoutGrid",
  },
  { id: "projects", label: "Projects", path: "/projects", icon: "FolderOpen" },
  { id: "scans", label: "Scans", path: "/scans/new", icon: "ScanSearch" },
  { id: "schedule", label: "Schedule", path: "/schedule", icon: "Calendar" },
  {
    id: "notifications",
    label: "Notifications",
    path: "/notifications",
    icon: "Bell",
  },
  { id: "settings", label: "Settings", path: "/settings", icon: "Settings" },
  { id: "support", label: "Support", path: "/support", icon: "HelpCircle" },
];
