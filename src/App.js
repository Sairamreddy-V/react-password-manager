import {Component} from 'react'

import {v4 as uuidV4} from 'uuid'

import './App.css'

import FormPage from './FormPage'

import ListPage from './ListPage'

class App extends Component {
  state = {list: [], initialList: [], count: 0}

  GetFormDetails = formState => {
    const detailsWithId = {id: uuidV4(), ...formState}
    console.log(detailsWithId)
    this.setState(prevState => {
      const {list} = prevState
      return {
        list: [...prevState.list, detailsWithId],
        initialList: [...prevState.initialList, detailsWithId],
        count: prevState.list.length + 1,
      }
    })
  }

  onSearchChange = event => {
    const {initialList} = this.state
    console.log(event)
    const result = initialList.filter(eachOne => {
      return eachOne.mail
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    })
    this.setState({list: result, count: result.length})
  }


  onDeleteButton=(id)=>{
    const{list}=this.state
    const result=list.filter(eachOne=>(eachOne.id!==id))
    this.setState({list:result,count:result.length})
  }



  render() {
    console.log(this.state)
    const {list, count} = this.state
    return (
      <div className="page-container">
        <img
          alt="app logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
        />
        <FormPage getTheState={this.GetFormDetails} />
        <ListPage
          details={list}
          count={count}
          onSearchChange={this.onSearchChange}
          onItemDelete={this.onDeleteButton}
        />
      </div>
    )
  }
}

export default App
