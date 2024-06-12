import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {
    userName: '',
    password: '',
    errMsg: '',
    showErrMsg: false,
  }

  onChangeUsername = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMessage => {
    this.setState({showErrMsg: true, errMsg: errorMessage})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {username: userName, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUserNameField = () => {
    const {userName} = this.state

    return (
      <>
        <label htmlFor='username'>USERNAME</label>
        <input
          type='text'
          id='username'
          value={userName}
          onChange={this.onChangeUsername}
          placeholder='Username'
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label htmlFor='password'>PASSWORD</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={this.onChangePassword}
          placeholder='Password'
        />
      </>
    )
  }

  render() {
    const {errMsg, showErrMsg} = this.state
    const token = Cookies.get('jwt_token')

    if (token !== undefined) {
      return <Redirect to='/' />
    }

    return (
      <div className='login-bg-container'>
        <div className='login-form-bg-container'>
          <form className='form-container' onSubmit={this.onSubmitForm}>
            <div>{this.renderUserNameField()}</div>
            <div>{this.renderPasswordField()}</div>
            <button type='submit'>Login</button>
            {showErrMsg && <p>*{errMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default Login
