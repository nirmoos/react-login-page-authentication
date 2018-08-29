import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './Utils/FontAwsome';

import rootReducer from './Reducers';
import saga from './Sagas';

import LoginForm from './Containers/LoginForm';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

 ReactDOM.render(
     <Provider store={store}>
         <LoginForm />
     </Provider>,
     document.getElementById('root')
 );
