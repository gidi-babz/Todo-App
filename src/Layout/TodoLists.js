import classes from './TodoLists.module.css';

const TodoLists = props => {
  const { newTodo } = props;

  console.log(newTodo);

  return (
    <ul className={classes.lists}>
      {newTodo.map(todo => (
        <li key={todo.id}>
          <p>{todo.newTodoItem}</p>
        </li>
      ))}
    </ul>
  );
};

export default TodoLists;
