import {Component} from 'react'

import './index.css'

class FormPage extends Component {
  state = {mail: '', name: '', password: ''}

  onMailChange = event => {
    this.setState({mail: event.target.value})
  }

  onNameChange = event => {
    this.setState({name: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  OnAddClick = (event) => {
    event.preventDefault()
    const {getTheState} = this.props
    getTheState(this.state)
    this.setState({mail: '', name: '', password: ''})
  }

  render() {
    const {mail, name, password} = this.state
    return (
      <div className="card-container">
        <div className="form-card-container">
          <form>
            <h1 className="form-heading">Add New password</h1>
            <div className="input-container">
              <img
                className="logo"
                alt="website"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              />
              <hr className="hr-line" />
              <input
                className="input"
                value={mail}
                type="text"
                placeholder="Enter Website"
                onChange={this.onMailChange}
              />
            </div>
            <div className="input-container">
              <img
                className="logo"
                alt="username"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              />
              <hr className="hr-line" />
              <input
                className="input"
                type="text"
                value={name}
                placeholder="Enter Username"
                onChange={this.onNameChange}
              />
            </div>
            <div className="input-container">
              <img
                className="logo"
                alt="password"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
              />
              <hr className="hr-line" />
              <input
                className="input"
                type="password"
                value={password}
                placeholder="Enter Password"
                onChange={this.onPasswordChange}
              />
            </div>
            <button
              type="submit"
              className="add-button"
              onClick={this.OnAddClick}
            >
              Add
            </button>
          </form>
        </div>
        <img
          className="image"
          alt="password manager"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
        />
      </div>
    )
  }
}

export default FormPage
