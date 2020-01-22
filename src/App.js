import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Surface from './components/Surface/Surface';
import StartInput from './components/StartInput/StartInput';
import ColorPicker from './components/ColorPicker/ColorPicker';
import SvgElement from './components/SvgElement/SvgElement';

function App() {

  const [values, setValue ] = React.useState({
    color: null,
  });

  const handleColorChoice = ( color ) => {
    setValue({ ...values, color: color });
    console.log(values.color);
  }

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
          width="350px" 
          height="400px" 
          title="Виберіть колір" 
          info="На палітрі зображені доступні кольори декоративних
          штукатурок"
        >
          <ColorPicker colorInfo={handleColorChoice}  />
        </Surface>

        <Surface 
          width="950px" 
          height="400px" 
          title="Виберіть вихідні дані" 
          info='Add following info'
          // loader={true}
        >
          <SvgElement color="blue" />
        </Surface>
        
      </Layout>
    </div>
  );
}

export default App;
