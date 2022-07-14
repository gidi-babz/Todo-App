import classes from './TodoLists.module.css';

const TodoLists = props => {
  const { newTodo } = props;

  return (
    <ul className={classes.lists}>
      {newTodo.map(todo => (
        <li key={todo.id}>
          <p>{todo.newTodoItem}</p>
          <button>&times;</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoLists;
