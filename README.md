# AI Emergency Routing Solutions (AIERS)

**AIERS** is a digital platform designed to optimize emergency response operations across Syria. The project connects emergency drivers, hospital staff, and dispatchers through a unified, real-time system to ensure faster, safer, and more efficient emergency services.

## 🚨 Project Overview

- **Mission:** Enable every emergency responder in Syria to reach those in need as quickly and safely as possible, regardless of road conditions or information barriers.  
- **Core Features:**
  - Real-time, interactive map for emergency drivers with hazard overlays.
  - Dispatcher-admin interface for task assignment and resource visualization.
  - Role-based dashboards: Emergency Driver, Hospital Staff, Dispatcher.
  - Secure communication channels and message center for dispatchers.
  - Multi-language support and accessibility features.
  - Offline and low-bandwidth operation support.

## 🖥️ Technologies Used

- **Frontend:** React.js, Material-UI (MUI)
- **State Management:** React Hooks
- **Styling & Theme:** MUI custom theme with dark mode and blur effects
- **Backend Ready:** All data structures designed to be flexible for future backend integration (real-time routing, vehicle tracking, messages)

## 🎯 Role-Based Dashboard

- **Emergency Driver:** Access real-time map, view assigned routes, and report hazards.
- **Hospital Staff:** Monitor emergency activities and manage hospital resources.
- **Dispatcher:** Assign tasks, track vehicles, and send messages to drivers and staff.

## 🌟 Design Highlights

- Modern, sleek, and dark-themed UI with blur effects for depth.
- Responsive layout: collapsible drawer on small screens, permanent sidebar on large screens.
- Role selection with interactive and transparent menu.
- Smooth transitions and consistent typography with Poppins font.

## 🔧 Future Enhancements

- Integration with Google Maps or OpenStreetMap for live navigation.
- Backend API for real-time data exchange and notifications.
- Audio and text messaging for offline or low-connectivity scenarios.
- AI-powered route optimization and traffic prediction.

## 📁 Project Structure

src/
├── components/
│ ├── Dispatcher.js
│ ├── EmergencyDriver.js
│ ├── HospitalStaff.js
│ └── MapComponent.js
├── App.js
└── index.js


## 🏗️ Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies: 
```bash
npm install
```

3. Run the project: 
```bash
npm start
```
4. Open http://localhost:3000 to view it in the browser.