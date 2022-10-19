import React from 'react';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import './styles.css';

interface Props {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const TotoList: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {
  return (
    <div className='container'>
      <div className='todos'>
        <span className='todos__heading'>Active Task</span>
        {todos.map((todo) => (
          <SingleTodo key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
      <div className='todos remove'>
        <span className='todos__heading'>Completed Task</span>
        {completedTodos.map((todo) => (
          <SingleTodo key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}

          />
        ))}
      </div>

    </div>
  );
}

export default TotoList;