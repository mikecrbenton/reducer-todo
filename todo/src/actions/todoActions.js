export const TOGGLE_TODO = "TOGGLE_TODO" 
export const CLEAR_COMPLETED ="CLEAR_COMPLETED"
export const ADD_TODO = "ADD_TODO"

// INSTEAD OF HAVING TO WRITE OUT THE DISPATCH EACH TIME IN THE COMPONENT
// ACTION-CREATOR - RETURNS A FUNCTION
export default {

   toggleTodo: (todoId) => {
      return( { type: TOGGLE_TODO, payload: todoId } )
   },
   clearCompleted: (event) => {
      return( {type: CLEAR_COMPLETED, payload: event } )
   },
   addTodo: (todoText) => {
      return( { type: ADD_TODO, payload: todoText })
   }
}