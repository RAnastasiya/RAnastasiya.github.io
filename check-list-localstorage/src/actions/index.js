// let nextTodoId = 0;
var uniqid = require('uniqid');
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  color: "white",
  id: uniqid(),
  text
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});

export const toggleInput = (id) => ({
    type: 'TOGGLE_INPUT',
    id
});

export const changeColor = (color) => ({
    type: 'CHANGE_COLOR',
    color
});

export const changeText = (id, text) => ({
    type: 'CHANGE_TEXT',
    id: id,
    text: text

});