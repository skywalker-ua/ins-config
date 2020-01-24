import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import blue from '@material-ui/core/colors/blue';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducer';

const store = createStore(rootReducer);

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
        },
        secondary: {
            main: blue[700],
        },
    },
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
    </ThemeProvider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
