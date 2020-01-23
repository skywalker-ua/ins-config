import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Surface from './components/Surface/Surface';
import StartInput from './components/StartInput/StartInput';
import ColorPicker from './components/ColorPicker/ColorPicker';
import SvgElement from './components/SvgElement/SvgElement';
import OrderList from './components/OrderList/OrderList';
import TotalSum from './components/TotalSum/TotalSum';
import { connect } from 'react-redux';

function App(props) {

  const [values, setValues] = React.useState({

  });

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
          <ColorPicker />
        </Surface>

        <Surface 
          width="450px" 
          height="400px" 
          title="Виберіть вихідні дані" 
          info='Add following info'
          // loader={true}
        >
          <SvgElement color={props.clr} />
        </Surface>

        <Surface 
          width="450px" 
          height="650px" 
          title="Необхідний список матеріалів" 
          info="На палітрі зображені доступні кольори декоративних
          штукатурок"
        >
          <OrderList />
          <TotalSum sum="3000" />
        </Surface>
        
      </Layout>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    clr: state.color
  }
}

export default connect(mapStateToProps)(App);
