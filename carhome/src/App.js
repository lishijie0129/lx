import React from 'react';
import './App.css';
import Router from './router/router'
import {Provider} from 'react-redux'
import store from '@/store/store'
function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Router />
      </Provider>
        
    </div>
  );
}

export default App;