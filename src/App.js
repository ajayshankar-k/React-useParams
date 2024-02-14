// Step-2
// App.js

// Import necessary modules from React and React Router
import './App.css';
import AllData from './pages/AllData';
import ShowData from './pages/ShowData';
import { Routes, Route } from 'react-router-dom';

// Main App component
function App() {
  return (
    <div className="App">
      <Routes>
        {/* Define routes */}
        <Route exact path='/' element={<AllData />}/>
        {/* Define '/:id' in route to pass id to URL */}
        <Route exact path='/showdata/:id' element={<ShowData />}/>
      </Routes>
    </div>
  );
}

export default App;

// Code by Ajay Shankar
