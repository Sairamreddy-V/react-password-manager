import {Component} from 'react'

import './index.css'

const List = props => {
  const {details, onItemDelete} = props
  const {mail, id, name, password} = details

  const onDelete = () => {
    onItemDelete(id)
  }

  return (
    <li className="list-main-container">
      <p>{name[0].toUpperCase()}</p>
      <div className="list-text-container">
        <p>{mail}</p>
        <p>{name}</p>
        <img
          alt="stars"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
        />
      </div>
      <button type="button" onClick={onDelete}>
        <img
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
        />
      </button>
    </li>
  )
}

const ListPage = props => {
  const {count, details, onSearchChange, onItemDelete} = props

  const onSearch = event => {
    onSearchChange(event)
  }

  const onCheckBox = () => {
    console.log(`selected`)
  }

  console.log(count)
  return (
    <div className="list-page-container">
      <div className="heading-search-container">
        <p className="Passwords-count-heading">
          Your Passwords<span className="span">{count}</span>
        </p>
        <div className="search-container">
          <img
            alt="search"
            className="search-logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
          />
          <input type="search" className="search-input" onChange={onSearch} />
        </div>
      </div>
      <hr className="hr-line" />
      <div className="showPassword-container">
        <input id="checkbox" type="checkbox" onSelect={onCheckBox} />
        <label htmlFor="checkbox" className="showPassword">
          Show Passwords
        </label>
      </div>
      {count === 0 ? (
        <div className="no-password-container">
          <img
            alt="no passwords"
            className="noPassWordImg"
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          />
          <p className="noPassWordPara">No Passwords</p>
        </div>
      ) : (
        <ul>
          {details.map(eachOne => (
            <List
              details={eachOne}
              key={eachOne.id}
              onItemDelete={onItemDelete}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListPage
