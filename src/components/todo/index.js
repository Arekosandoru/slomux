import React from 'react'
import addTodo from '../../actions/addTodo';
import connect from "../../slomux/connect";

class ToDoComponent extends React.Component {
  state = {
    todoText: ''
  };

  //Ошибка 5: здесь будет не тот контекст вызова +
  updateText = (e) => {
    const { value } = e.target;

    //Ошибка 6: присвоение вместо setState +
    // this.state.todoText = value
    this.setState({ todoText: value });
  };

  addTodo = (e) => {
    e.preventDefault();
    const { todoText } = this.state;
    const { addTodo } = this.props;

    if (!todoText.length || !todoText.trim()) {
      return;
    }

    addTodo(todoText);

    // См. Ошибку 6 +
    // this.state.todoText = ''
    this.setState({ todoText: '' });
  };

  render() {
    return (
      <div>
        <label htmlFor="input_task_name">{this.props.title || 'Без названия'}</label>
        <div>
          <form name="add_todo_form">
            <input
              id="input_task_name"
              name="task_name"
              value={this.state.todoText}
              placeholder="Название задачи"
              onChange={this.updateText}
            />
            <button type="submit" onClick={this.addTodo}>Добавить</button>
          </form>
          <ul>
            {this.props.todos.map((todo, idx) => <li key={todo + idx}>{todo}</li>)}
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  todos: state,
}), dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
}))(ToDoComponent)