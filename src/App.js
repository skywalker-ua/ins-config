import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Surface from './components/Surface/Surface';
import StartInput from './components/StartInput/StartInput';

function App() {
  return (
    <div className="App">
      <Layout>
        <Surface 
          width="350px" 
          height="400px" 
          title="Виберіть вихідні дані" 
          info='Вкажіть вхідні дані'
        >
          <StartInput />
        </Surface>

        <Surface 
          width="950px" 
          height="400px" 
          title="Виберіть вихідні дані" 
          info='Add following info'
          loader={true}
        >
          <div>Content</div>
        </Surface>

        <Surface 
          width="350px" 
          height="400px" 
          title="Виберіть вихідні дані" 
          info='Вкажіть вхідні дані'
          loader
        >
          <div>Content</div>
        </Surface>
        
      </Layout>
    </div>
  );
}

export default App;
