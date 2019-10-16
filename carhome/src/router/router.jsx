import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import RouterView from './router.view'
import RouterConfig from './router.config'
export default function router() {
  return <BrowserRouter>
        <RouterView routes={RouterConfig}/>
  </BrowserRouter>
}
