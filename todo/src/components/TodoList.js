import React from "react";
import Todo from "./Todo";
import styled from 'styled-components';
import actions from '../actions/todoActions'

//**FUNCTIONAL COMPONENT**
const ToDoList = ({ list, toggleTask, dispatch, clearCompleted }) => {

   console.log(list)
  return (
    <ListContainer> 
      <TodoList>
         { list.map( todo => {
         return <Todo 
                     todo={todo} 
                     key={todo.id} 
                     //toggleTask={toggleTask} 
                     dispatch={dispatch}
                  />;
         })}
      </TodoList>
      <button 
         //onClick={clearCompleted}>
         onClick={ () => dispatch( actions.clearCompleted()) }>
         Clear Completed
      </button>
    </ListContainer>
  );
};

export default ToDoList;

const TodoList = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
`;

const ListContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;

   button{
      background-color: #009B77;
      border: 1px solid #009B77;
      margin-left: .5em;
      color: whitesmoke;
      padding: .5em 2em;
      font-size: 1rem;
      margin: 1em auto;
      width: 45%;
      box-shadow: 0px 0px 20px #121212;
   }
`;