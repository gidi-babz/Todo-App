import React, { useRef } from 'react';

import classes from './TodoForm.module.css';

const TodoForm = props => {
  const enteredTodo = useRef();

  const submitHandler = e => {
    e.preventDefault();

    let enteredTodoValue = enteredTodo.current.value;

    props.onAddTodo(enteredTodoValue);

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
