require('!style!css!sass!../app/sass/photon.scss')

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {Main} from './components/Main'
import {LoginContainer} from './containers/LoginContainer'
import {FilesContainer} from './containers/FilesContainer'
import {SeedContainer} from './containers/SeedContainer'
import {AccountContainer} from './containers/AccountContainer'
import {store} from './store'
import {api} from './services'
import Loading from 'react-loading'

  
// set routes
const routes = <Route component={Main}>
  <Route path='/' component={LoginContainer} />
  <Route path='/files' component={FilesContainer} />
  <Route path='/seeding' component={SeedContainer} />
  <Route path='/account' component={AccountContainer} />
</Route>

// render react after store init hack
ReactDOM.render(
	<div>
	  <div className="innerLoad">
	  	<h3 className="h3load">
      <img src={'NGinnever_Just_Will_It_LogoTagline.svg'} style={{height: 235, marginTop: 10, marginLeft: 5, marginRight: 0}} /></h3>
	  	<div className="lbar">
  	  <Loading type='bars' color='#fff' />
  	  </div>
  	</div>
  </div>,
  document.getElementById('loading')
)

function testLoader() {
	api.init().then(() => {
	  console.log('finished init store')
		ReactDOM.render(
		  <Provider store={store}>
		    <Router history={hashHistory}>{routes}</Router>
		  </Provider>,
		  document.getElementById('app')
		)
	})
}

setTimeout(testLoader, 7000)
