import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TodoContext from './store/todo-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoContext.Provider>
      <App />
    </TodoContext.Provider>
  </React.StrictMode>
);
