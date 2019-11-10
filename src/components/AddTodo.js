import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { input: '' }
  }

  updateInput = input => {
    this.setState({ input })
  }

  handleAddTodo = () => {
    // Dispatch 'this.state.input'
    this.props.addTodo(this.state.input)
    // Clear input's state
    this.setState({ input: '' })
  }

  render() {
    return (
      <div>
        <input
          // Change state upon change (typing in this case)
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    )
  }
}

// Use 'addTodo' as dispatching function
export default connect(
  null,
  { addTodo }
)(AddTodo)
