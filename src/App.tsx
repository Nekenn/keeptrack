import React from 'react';
import './App.css';
import ProjectsPage  from './projects/ProjectsPage';
import Hello from './Hello';
function App() {
  return (
    <div>
      <Hello name="Hello" enthusiasmLevel={2}/>
      <ProjectsPage />
    </div>
  );
}

export default App;
