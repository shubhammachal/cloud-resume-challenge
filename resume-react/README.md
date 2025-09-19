# Resume React App

This is a React version of the original HTML/CSS/JS resume website. The application has been converted from a static HTML site to a modern React application using Vite.

## Features

- **Responsive Design**: Bootstrap-based responsive layout that works on all devices
- **Smooth Scrolling**: Navigation with smooth scrolling between sections
- **Visitor Counter**: Integration with AWS API Gateway for visitor count tracking
- **Component-Based Architecture**: Modular React components for each section
- **Modern Styling**: Converted CSS with Google Fonts and Font Awesome icons

## Sections

- **About**: Personal information and social media links
- **Experience**: Professional work experience with detailed descriptions
- **Education**: Academic background and achievements
- **Projects**: Portfolio of technical projects with GitHub links
- **Skills**: Technical skills organized by category with icons
- **Interests**: Personal interests and hobbies
- **Awards**: Certifications and achievements

## Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Bootstrap 5**: CSS framework for responsive design
- **Font Awesome**: Icon library
- **Google Fonts**: Typography (Saira Extra Condensed, Open Sans)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local development URL (usually `http://localhost:5173`)

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── About.jsx          # About section component
│   ├── Awards.jsx         # Awards and certifications
│   ├── Education.jsx      # Education history
│   ├── Experience.jsx     # Work experience
│   ├── Footer.jsx         # Footer with visitor counter
│   ├── Interests.jsx      # Personal interests
│   ├── Projects.jsx       # Project portfolio
│   ├── SideNav.jsx        # Navigation sidebar
│   └── Skills.jsx         # Technical skills
├── App.jsx                # Main application component
├── App.css                # Main stylesheet
├── main.jsx               # Application entry point
└── index.css              # Global styles
```

## API Integration

The application integrates with AWS services for visitor counting:

- **GET API**: Fetches current visitor count
- **POST API**: Increments visitor count

API endpoints:
- `https://fbrof3gjqk.execute-api.us-east-1.amazonaws.com/Prod/get`
- `https://fbrof3gjqk.execute-api.us-east-1.amazonaws.com/Prod/put`

## Deployment

The application can be deployed to various platforms:

1. **Vercel**: Connect your GitHub repository to Vercel for automatic deployments
2. **Netlify**: Deploy directly from the `dist` folder
3. **AWS S3 + CloudFront**: For static hosting with CDN
4. **GitHub Pages**: For free hosting with GitHub

## Original vs React Version

### Improvements in React Version:
- **Component Reusability**: Modular components that can be easily maintained
- **State Management**: React hooks for managing visitor count state
- **Modern Development**: Hot reloading, modern build tools, and better development experience
- **Performance**: Optimized bundle size and faster loading
- **Maintainability**: Easier to update and extend functionality

### Preserved Features:
- All original styling and layout
- Visitor counter functionality
- Responsive design
- All content and links
- Social media integration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).