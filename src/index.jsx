import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';
import reducer from './reducer';
import {setState} from './action_creators';
import remoteActionMiddleware from './remote_action_middleware';
import {RecordingContainer} from './components/Recording';


const socket = io('http://practice-tracking-server.herokuapp.com');
socket.on('state', state =>
  store.dispatch(setState(state))
);

// This is another example of curried functions used for our configuration.
const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={RecordingContainer} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
