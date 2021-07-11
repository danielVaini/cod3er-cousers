import React, { Component } from 'react'
import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default class Todo extends Component {

  constructor(props){
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd() {
   
  }

  render(){
    return(
      <div>
        <PageHeader name='Tasks' small='Sign up'/>
        <TodoForm handleAdd={this.handleAdd}/>
        <TodoList />
      </div>
    )
  }
}