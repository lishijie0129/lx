import React from 'react';
import './App.css';
import {BrowserRouter,Redirect,Route,Switch} from 'react-router-dom'
import store from './store/store'
import {Provider} from 'react-redux'
import Index from './views/index/index'
function App() {
  return  <div className="App">
        <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route path="/index" component={Index}></Route>
                <Redirect from="/" to="/index"></Redirect>
              </Switch>
            </BrowserRouter>
        </Provider>
    </div>
}

export default App;
