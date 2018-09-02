import { connect } from 'react-redux'
import {toggleInput, toggleTodo} from '../actions'
import { changeColor } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter)
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps =  ({
    onTodoClick: toggleTodo,
    onCancelClick: toggleInput,
    ColorWhite: changeColor,
    ColorPink: changeColor,
    ColorGreen: changeColor,
    ColorYellow: changeColor

});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList
