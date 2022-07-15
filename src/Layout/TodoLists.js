import classes from './TodoLists.module.css';

const TodoLists = props => {
  const { newTodo } = props;

  const removeTodoItemHandler = () => {
    console.log('Clicked');
  };
  return (
    <ul className={classes.lists}>
      {newTodo.map(todo => (
        <li key={todo.id}>
          <p>{todo.newTodoItem}</p>
          <button onClick={removeTodoItemHandler}>&times;</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoLists;
