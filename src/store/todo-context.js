import React from 'react';

const TodoContext = React.createContext({
  todos: [],
  isEmpty: true,
  addTodo: () => {},
  removeTodo: () => {},
});

export const TodoContextProvider = props => {
  return (
    <TodoContext.Provider value={null}>{props.children}</TodoContext.Provider>
  );
};

export default TodoContext;
