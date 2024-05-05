# Getting Started with Create React App

# Development of a React Frontend Application Using NASA APIs

## Introduction
This project focuses on developing a modern and interactive React frontend application that integrates with NASA’s public APIs. It aims to creatively utilize data for providing insightful astronomy information while showcasing skills in frontend development, API integration, and deployment.

## Host Deployment Link
Access the live website using the following link:  
[NASA API Application](https://AathifInfo.github.io/nasa-api)

## Technologies and Tools Used
- *Frontend*: React.js with functional components
- *Language*: JavaScript (ES6+)
- *CSS Framework*: Bootstrap for a sophisticated and responsive design
- *API Requests*: Axios for making API calls
- *Testing Frameworks*: Jest and React Testing Library
- *Hosting*: Deployed on a free platform (e.g., GitHub Pages)

## Installation and Setup
1. *Clone the Repository*:
   ```bash
   git clone [your-repository-link]
2. **Navigate to the Project Directory:**:
   ```bash
   cd [project-directory]
3. *Install Dependencies:*:
   ```bash
   npm install
4. **Run the Development Server:**:
   ```bash
   npm start

## Project Structure
The project is organized as follows:

frontend/
```bash
├── .env # Environment variables
├── .gitignore # Files and directories to ignore in version control
├── package.json # Project metadata and dependencies
├── package-lock.json # Lock file for consistent dependency installation
├── public/ # Static assets, including index.html
├── README.md # The current README file
├── src/ # Main source code
│ ├── App.css # Stylesheet for the main application component
│ ├── App.js # Root application component
│ ├── App.test.js # Tests for the App component
│ ├── component/ # Reusable components
│ ├── images/ # Image assets used in the app
│ ├── index.css # Global styles for the application
│ ├── index.js # Application entry point
│ ├── logo.svg # SVG logo used in the app
│ ├── reportWebVitals.js # Measures web vitals for performance
│ ├── Screens/ # Different screens or pages of the application
│ └── setupTests.js # Test configuration file
```

### Description of Key Files and Directories:
- **public/index.html**: The main HTML file loaded into the browser.
- **src/App.js**: Contains the main application structure and layout.
- **src/component/**: A collection of reusable components used across different screens.
- **src/Screens/**: Houses the different screens/pages of the application.


## Usage
- *Explore NASA Data*: Access daily or historical astronomy-related information from NASA's public APIs.
- *Responsive UI*: Enjoy a consistent user experience across devices.

## API Integration
- *Astronomy Picture of the Day (APOD)*: Fetches the latest daily astronomical images and detailed explanations. Users can explore previous APODs as well.
- *Earth Observatory Natural Event Tracker (EONET)*: Displays natural events detected on Earth.
- *Mars Rover Photos*: Provides captivating images captured by the Mars rovers, offering an in-depth view of the Martian landscape.
- *NASA Image and Video Library*: Accesses NASA's extensive archive of high-resolution images and videos covering various missions, celestial bodies, and technological advancements.

## Testing
- *Unit Tests*: Jest is used for component-level unit testing, ensuring isolated pieces of code function as intended.
- *Integration Tests*: React Testing Library helps verify that critical features and components interact correctly.

## Contribution
Contributions are welcome! Follow these steps:

1. *Fork the Repositor:*
   ```bash
2. **Create a New Branch:**:
   ```bash
   git checkout -b feature/your-feature-name
3. *Commit Your Changes:*:
   ```bash
   git commit -m 'Add new feature'
4. **Push to the Branch:**:
   ```bash
   git push origin feature/your-feature-name
5. *Open a Pull Request:*:
   ```bash

## Future Enhancements
- *AI-Based Recommendations*: Utilize machine learning algorithms to provide personalized recommendations based on user preferences.
- *Mobile Companion App*: Extend this platform with a mobile app to deliver astronomy data to enthusiasts on the go.
- *Additional APIs*: Incorporate more NASA APIs to widen the scope of

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload automatically if you make changes.  
You may also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production in the `build` folder.  
It correctly bundles React in production mode and optimizes the build for better performance.

The build is minified, and the filenames include hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
**Note: This is a one-way operation. Once you `eject`, you can't go back!**

If you're not satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) directly into your project so you have full control over them. All commands except `eject` will still work, but they will point to the copied scripts.

**You don't have to use `eject`**. The curated feature set is suitable for small and medium deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if it couldn't be customized.

