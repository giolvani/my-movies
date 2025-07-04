# My Movies

A modern web application that showcases popular and top-rated movies using The Movie Database (TMDB) API. Built with React, TypeScript, and Vite. This is not a mobile app, it's a web app with mobile dimensions though.

## 1. How to Clone the Project

```bash
# Clone the repository
git clone https://github.com/giolvani/my-movies.git

# Navigate to the project directory
cd my-movies
```

## 2. How to Run the Project

### Prerequisites
- Node.js (v18 or newer recommended)
- npm

### Environment Setup
1. Copy the sample environment file:
```bash
cp .env.sample .env.local
```

2. Update `.env.local` with your TMDB API token (`VITE_TMDB_TOKEN`):
```
VITE_TMDB_TOKEN=your_tmdb_api_token_here
```

### Installation and Running
```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at http://localhost:5173/

### Building for Production
```bash
npm run build
```

## 3. Project Screenshots

<div align="center">
  <div style="display: flex; flex-direction: row;">
    <div style="margin-right: 10px;">
      <img src="https://raw.githubusercontent.com/giolvani/my-movies/main/public/screenshot-home.png" width="300" alt="Popular Movies Page">
      <p><em>Popular Movies Page</em></p>
    </div>
    <div>
      <img src="https://raw.githubusercontent.com/giolvani/my-movies/main/public/screenshot-details.png" width="300" alt="Movie Details View">
      <p><em>Movie Details View</em></p>
    </div>
  </div>
</div>

## 4. Design Patterns and Best Practices

- **TypeScript Integration**: Strong typing throughout the application
- **API Response Types**: Comprehensive interface definitions for all API responses
- **API Abstraction**: Clean separation of API logic from UI components
- **Mapping API responses to components**: Clear mapping of API responses to component props
- **Component Structure**: Functional components with React Hooks
- **State Management**: Local state with React Hooks (useState, useEffect)
- **Module Path Aliases**: Using `@/` for cleaner imports from project root

## 5. Live Demo

[View Live Demo](https://my-movies-tan.vercel.app/) 

## 6. Next Steps

- Add pagination for movie lists
- Add menu to change movie lists (popular, top rated, etc.)
- Add favorites functionality with local storage
- Improve loading states
- Show movie trailers in a modal instead of a new page
- Implement responsive design improvements
- Load pages lazily to improve performance
- Increase code coverage with unit and integration tests
- Error handling and boundary error display

## 7. Libraries and Frameworks

### Core Technologies
- React 19
- TypeScript
- Vite 6

### Development Tools
- ESLint 9 with TypeScript integration
- React Hooks linting plugins
- TypeScript ESLint

### APIs
- TMDB (The Movie Database) API


