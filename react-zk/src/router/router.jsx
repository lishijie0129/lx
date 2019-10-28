import React from 'react'
import RouterView from './routerView'
import Routes from './routes'
import {BrowserRouter} from 'react-router-dom'
export default function router() {
  return (
    <BrowserRouter>
      <RouterView routes={Routes}/>
    </BrowserRouter>
  )
}
