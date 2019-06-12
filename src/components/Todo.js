import React from 'react';

class Todo extends React.Component {
    render() {
        return(
            <div onClick = { ()=> this.props.removeTodo(this.props.id)}>
                <div>{this.props.id}</div>
                <div>{this.props.text}</div>
            </div>
        )
    }
}

export default Todo;
