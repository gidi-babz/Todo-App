import { useState } from 'react';

import TodoForm from '../components/TodoForm';
import classes from './TodoFormContainer.module.css';
import TodoLists from './TodoLists';

const TodoFormContainer = () => {
  const [todoItem, setTodoItem] = useState([]);

  let isTodoEmpty = true;

  const addTodoHandler = todo => {
    setTodoItem(prevState => {
      return [
        {
          newTodoItem: todo,
          id: Math.floor(Math.random() * 100000 + 1),
        },
        ...prevState,
      ];
    });
  };

  if (todoItem.length > 0) {
    isTodoEmpty = false;
  }

  return (
    <div className={classes.container}>
      <TodoForm onAddTodo={addTodoHandler} />
      {!isTodoEmpty && <TodoLists newTodo={todoItem} />}
      {isTodoEmpty && <p className={classes.default}>Add a task to do...</p>}
    </div>
  );
};

export default TodoFormContainer;
