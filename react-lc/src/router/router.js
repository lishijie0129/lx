import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom'
import routes from './routes'
import RouterView from './routerView'
export default class router extends Component {
  render() {
    return <BrowserRouter>
        <RouterView routes={routes}/>
    </BrowserRouter>
        
    
  }
}
