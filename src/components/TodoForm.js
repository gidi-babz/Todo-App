import React, { useRef } from 'react';

import classes from './TodoForm.module.css';

const TodoForm = props => {
  const enteredTodo = useRef();

  const { onAddTodo } = props;

  const submitHandler = e => {
    e.preventDefault();

    const enteredTodoValue = enteredTodo.current.value;

    onAddTodo(enteredTodoValue[0].toUpperCase() + enteredTodoValue.slice(1));

    enteredTodo.current.value = '';
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.formControl}>
        <input type="text" placeholder="Add Todo..." ref={enteredTodo} />
        <button>+</button>
      </div>
    </form>
  );
};

export default TodoForm;
