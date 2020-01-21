import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Surface from './components/Surface/Surface';

function App() {
  return (
    <div className="App">
      <Layout>
        <Surface width="350px" height="300px" title="Виберіть вихідні дані" info='Add following info' />
      </Layout>
    </div>
  );
}

export default App;
