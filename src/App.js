import Container from './UI/Container';

import classes from './App.module.css';
import TodoFormContainer from './Layout/TodoFormContainer';

function App() {
  return (
    <Container>
      <h1 className={classes.head}>Todos</h1>
      <main>
        <TodoFormContainer />
      </main>
    </Container>
  );
}

export default App;
