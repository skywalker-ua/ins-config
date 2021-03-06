import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Surface from './components/Surface/Surface';
import StartInput from './components/StartInput/StartInput';
import ColorPicker from './components/ColorPicker/ColorPicker';
import SvgElement from './components/SvgElement/SvgElement';
import OrderList from './components/OrderList/OrderList';
import TotalSum from './components/TotalSum/TotalSum';
import ElementSelection from './components/ElementSelection/ElementSelection';
import ColorId from './components/ColorId/ColorId';
import OrderTable from './components/OrderTable/OrderTable';
import OrderActions from './components/OrderActions/OrderActions';
import { connect } from 'react-redux';
import CallManager from './components/CallManager/CallManager';
import OrderResults from './components/OrderResults/OrderResults';

class App extends React.Component {

  render() {
  return (
    <div className="App">
      <Layout>
        <div className="selection-bars">
          <Surface 
            width="300px" 
            height="250px" 
            title="Виберіть вихідні дані" 
            info='Вкажіть вхідні дані'
          >
            <StartInput />
          </Surface>

          <Surface 
          width="300px" 
          height="400px" 
          title="Виберіть колір" 
          info="На палітрі зображені доступні кольори декоративних
          штукатурок"
        >
            <ColorPicker />
          </Surface>
        </div>

        
          <Surface 
            width="300px" 
            height="400px" 
            title="Вигляд системи утеплення" 
            info='Усі зображення є наближеними'
            // loader={props.clr}
          >
            <ColorId colorId={this.props.idn} />
            <ElementSelection />
            <SvgElement selected={this.props.el} color={this.props.clr} />
          </Surface>

          <Surface
            width="350px"
            height="400px"
            title="Результати розрахунку">
              <OrderResults square={this.props.sq} />
              <OrderActions square={this.props.sq} />
          </Surface>
      </Layout>
    </div>
  );
  }
}

const mapStateToProps = state => {
  return {
    clr: state.color,
    idn: state.id,
    el: state.element,
    sq: state.square,
    lg: state.language
  }
}

export default connect(mapStateToProps)(App);
