import {store} from '../store'
import React from 'react'
import {Login} from '../components/Login'

export const LoginContainer = React.createClass({
  componentWillMount: function() {
    console.log('login container')
  },
  render: function() {
    return (
      <Login />
    )
  }
})