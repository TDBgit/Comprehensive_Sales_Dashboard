# Cargo Tracking App (VueJS + TypeScript)

## Overview
This project is a **Cargo Tracking Application** built using **VueJS**, **Google Maps API**, and **TypeScript**. The app allows users to **track cargo shipments in real-time** by visualizing their locations on an interactive map.

## Features
- **Real-Time Tracking:** Displays cargo and destination locations dynamically on a Google Map.
- **Google Maps Integration:** Uses the Google Maps API for visualization.
- **Randomized Cargo Data:** Generates test tracking data using Faker.js.
- **TypeScript Support:** Strongly typed classes for better maintainability.
- **Modular Architecture:** Separate classes for `Cargo`, `Destination`, and `TrackingMap`.

## Technologies Used
- **VueJS** - Frontend framework.
- **Google Maps API** - Map rendering and location tracking.
- **TypeScript** - Static typing for improved development.
- **Faker.js** - Generates mock data for cargo and destinations.
- **Webpack** - Bundles JavaScript and TypeScript files.

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js** (>= 14.x)
- **npm** or **yarn**
- **Google Maps API Key**

### Steps to Run
1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/cargo-tracking-app.git
   cd cargo-tracking-app
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up the Google Maps API Key:**
   - Open `index.html`
   - Replace `YOUR_API_KEY_HERE` in the Google Maps script URL.

4. **Compile and run the project:**
   ```sh
   npm run build
   npm run serve
   ```
5. **Open in browser:**
   Navigate to `http://localhost:8080` to use the app.

## Project Structure
```
cargo-tracking-app/
│── src/
│   ├── Destination.ts    # Class representing a cargo destination
│   ├── Cargo.ts          # Class representing cargo with tracking ID
│   ├── TrackingMap.ts    # Google Maps integration logic
│── dist/                 # Compiled output files
│── index.html            # Main entry file with Google Maps integration
│── tsconfig.json         # TypeScript configuration
│── package.json          # Dependencies and scripts
```

## Code Breakdown

### **1. Cargo & Destination Classes**
These classes use **Faker.js** to generate randomized locations and IDs.
```typescript
import faker from '@faker-js/faker';

export class Cargo {
    trackingId: string;
    location: { lat: number; lon: number };

    constructor() {
        this.trackingId = faker.datatype.uuid();
        this.location = {
            lat: +faker.address.latitude(),
            lon: +faker.address.longitude(),
        };
    }
}
```

### **2. Tracking Map Class**
Handles **Google Maps rendering** and **attaching cargo/destination markers**.
```typescript
import { Destination } from "./Destination";
import { Cargo } from "./Cargo";

export class TrackingMap {
    private googleMap: google.maps.Map;

    constructor(elementId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(elementId), {
            zoom: 1.6,
            center: { lat: 0, lng: 20 },
        });
    }

    attachMarker(entity: Destination | Cargo): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: { lat: entity.location.lat, lng: entity.location.lon },
        });
    }
}
```

### **3. Main Entry File**
Initializes the map and attaches cargo/destination markers.
```typescript
import { Destination } from "./Destination";
import { Cargo } from "./Cargo";
import { TrackingMap } from "./TrackingMap";

const trackingMap = new TrackingMap('g-map');
trackingMap.attachMarker(new Destination());
trackingMap.attachMarker(new Cargo());
```

## Future Enhancements
- Implement **real-time tracking** with WebSockets.
- Add **user authentication** for secure access.
- Enhance **UI with Vue components** for better interaction.
- Integrate **database storage** for cargo records.

## Author
This project was built as a **VueJS + TypeScript** demonstration for cargo tracking.

---

### 🚀 **Track your cargo effortlessly with this VueJS app!**
