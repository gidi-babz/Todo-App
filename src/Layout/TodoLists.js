import classes from './TodoLists.module.css';

const TodoLists = props => {
  const { newTodo, onDelete } = props;

  const removeTodoItemHandler = id => {
    const removeItem = newTodo.filter(todo => todo.id !== id);
    onDelete(removeItem);
  };

  return (
    <ul className={classes.lists}>
      {newTodo.map(todo => (
        <li key={todo.id}>
          <p>{todo.newTodoItem}</p>
          <button onClick={() => removeTodoItemHandler(todo.id)}>
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoLists;
