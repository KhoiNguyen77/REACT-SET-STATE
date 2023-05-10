import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'
import Content from './Content'

export default class extends Component {
  render() {
    return (
      <div>
        <div>
          <HeaderComponent></HeaderComponent>
        </div>
        <div className='w-50 m-auto fs-1 text-center vh-70'>
          <Content></Content>
        </div>
      </div>
    )
  }
}


