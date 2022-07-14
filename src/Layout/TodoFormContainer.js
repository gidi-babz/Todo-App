import { useState } from 'react';

import TodoForm from '../components/TodoForm';
import classes from './TodoFormContainer.module.css';
import TodoLists from './TodoLists';

const TodoFormContainer = () => {
  const [todoItem, setTodoItem] = useState([]);

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
  return (
    <div className={classes.container}>
      <TodoForm onAddTodo={addTodoHandler} />
      <TodoLists newTodo={todoItem} />
    </div>
  );
};

export default TodoFormContainer;
