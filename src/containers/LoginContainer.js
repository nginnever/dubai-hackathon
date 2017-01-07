import {store} from '../store'
import React from 'react'
import {Login} from '../components/Login'

export const LoginContainer = React.createClass({
  componentWillMount: function() {
    console.log('login container')
  },
  createUser: function() {
    alert('New User!')
  },
  render: function() {
    return (
      <Login createUser={this.createUser} />
    )
  }
})