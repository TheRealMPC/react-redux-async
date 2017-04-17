import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import store from './store'
import App from './Components/App'

document.addEventListener('DOMContentLoaded', ()=>{
  const reactNode = document.getElementById('react-node')
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route component={App} path="/">
        </Route>
      </Router>
    </Provider>
  , reactNode
  )
})
