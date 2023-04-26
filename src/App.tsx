import React from 'react';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import Hello from './Hello';
import FruitList from './tester/Fruit';

function App() {
  const data = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'orange' },
    { id: 3, name: 'blueberry' },
    { id: 4, name: 'banana' },
    { id: 5, name: 'kiwi' },
  ];
  return (
    <div>
      <FruitList fruits={data} />
      <Hello name="Hello" enthusiasmLevel={2} />
      <ProjectsPage />
    </div>
  );
}

export default App;
