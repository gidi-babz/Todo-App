import React, { useState, useRef } from 'react';

import classes from './TodoForm.module.css';

const TodoForm = () => {
  const [todoInput, setTodoInput] = useState([]);
  const enteredTodo = useRef();

  const submitHandler = e => {
    e.preventDefault();

    const enteredTodoValue = enteredTodo.current.value;

    setTodoInput(prevState => prevState.push({ enteredTodoValue }));

    console.log(todoInput);
    // return todoInput;
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
