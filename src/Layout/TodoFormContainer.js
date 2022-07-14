import TodoForm from '../components/TodoForm';
import classes from './TodoFormContainer.module.css';
import TodoLists from './TodoLists';

const TodoFormContainer = () => {
  return (
    <div className={classes.container}>
      <TodoForm />
      <TodoLists />
    </div>
  );
};

export default TodoFormContainer;
