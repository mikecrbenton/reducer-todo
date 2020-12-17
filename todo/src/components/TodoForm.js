import React, { useState } from "react";
import styled from 'styled-components';
import './Todo.css';
import actions from '../actions/todoActions'


function ListForm( props ) {

  const [todoText, setTodoText] = useState("")
 
  const changeHandler = e => {
    setTodoText(e.target.value);
    };

  const submitHandler = e => {
    e.preventDefault();
   //  props.dispatch(
   //     { 
   //        type:"ADD_TODO", 
   //        payload: todoText
   //     });
   props.dispatch( actions.addTodo(todoText) )
    //clear form
    setTodoText("");
  };
   
    return (
      <TodoForm onSubmit={submitHandler}>
        <input
          type="text"
          name="todoText"
          onChange={changeHandler} // setState
          value={todoText} //controlled input - view State
        />
        <button type="submit">Add</button>
      </TodoForm>
    );
}

export default ListForm;

const TodoForm = styled.form`
margin-bottom: 1em;
display: flex;
justify-content: center;

   input{
      background-color: #2d2d37;
      border: none;
      border-bottom: 2px solid #009B77;
      color: whitesmoke;
      font-family: lato; 
      font-size: 1rem;
      font-weight: 900;
      padding: .5em .3em;
   }
   button{
      background-color: #009B77;
      border: 1px solid #009B77;
      margin-left: .5em;
      color: whitesmoke;
      padding: .5em 2em;
      font-size: 1rem;
      box-shadow: 0px 0px 20px #121212;
   }
`;