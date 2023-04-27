import React from 'react';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import ProjectList from './projects/ProjectList';
import Hello from './Hello';
import FruitList from './tester/Fruit';
import ExplainBindingComponent from './tester/ExplainBindingComponent';

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
      <Hello name="You" enthusiasmLevel={2} />
      <ExplainBindingComponent />
      <ProjectsPage />
    </div>
  );
}

export default App;
