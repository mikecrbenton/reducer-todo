import React, { useState, useReducer } from 'react';
import ReactDOM from "react-dom";
import './components/Todo.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import styled from 'styled-components';

import { initialState, taskReducer } from './reducers/index' 


function App() {
                           // USEREDUCER 
  const [ list, dispatch] = useReducer(taskReducer, initialState );
  

//   const toggleTask = ( todoId ) => {
//       dispatch({
//          type: "TOGGLE_TODO",
//          payload: todoId
//       })
//   };

   // const clearCompleted = e => {
   //    e.preventDefault();
   //    dispatch( {type: "CLEAR_TODO"});
   // };

    return (
      <MainContainer>

         <div className="header">
           <h1>To Do List</h1>
           <TodoForm dispatch={dispatch} />
         </div>

         <TodoList
           list={list} //passing state as props
           //toggleTask={toggleTask} // drilling down functions
           //clearCompleted={clearCompleted}
           dispatch={dispatch}
         />

      </MainContainer>
    );
}

export default App;

const MainContainer = styled.div`
   border: 3px solid #009B77;
   width: 50%;
   padding: .5em;
   box-shadow: 0px 0px 20px #060606;

   h1{
      text-align: center;
      color: #009B77;
      font-weight: 900;
      font-size: 2.5rem;
   }
`;
