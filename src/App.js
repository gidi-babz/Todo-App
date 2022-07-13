import { Fragment } from 'react';
import Container from './UI/Container';

import classes from './App.module.css';

function App() {
  return (
    <Fragment>
      <Container>
        <h1 className={classes.head}>Todos</h1>
      </Container>
    </Fragment>
  );
}

export default App;
