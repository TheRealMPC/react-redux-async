import React, { Component } from 'react'
import { login, logout, fetchSwapiAPI, doAuthentication } from '../actions'
import { connect } from 'react-redux'

class App extends Component{
  constructor(props){
    super(props)
    console.log('constructed', props)
    this.props.dispatch(doAuthentication())
  }

  componentDidMount(){
    console.log(this.props)
    this.props.dispatch(fetchSwapiAPI())
  }

  consoleMe(){
    console.log(this.props)
  }

  render(){
    return(
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <div style={{height:150, width:400}}>
          <form
          >
            <input type="name"/>
            <input type="password"/>
            <button>
              <submit

              >Login</submit>
            </button>
          </form>
        </div>

        <button
          onClick={this.props.dispatch(login)}
        >LOGIN</button>
      
        <button
          onClick={this.props.dispatch(logout)}
        >LOGOUT</button>


      </div>
    )
  }
}

export default connect( state => ( { swapi: state.swapi } ) )(App)
