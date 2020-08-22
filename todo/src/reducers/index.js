// Need to add a reducer for 
// TOGGLE_COMPLETED
// ADD_NEWTASK

// 1st object STATE, 2nd object ACTION OBJECT
// Reducer returns a new state object based on the action

// Action : Object with 1) Type:   2) Payload : ( optional )
//Actions are "dispatched" by dispatch functions

// Export : initialstate, taskReducer

// INITIAL STATE
export const initialState = [
   {
     task: 'Work Ahead on Classwork',
     id: 1,
     completed: false
   },
   {
     task: 'Set Up Laptop For Class',
     id: 2,
     completed: false
   },
   {
      task: 'Fill Tires w/ Air',
      id: 3,
      completed: false
    },
    {
      task: 'Do Dishes',
      id: 4,
      completed: false
    },
    {
      task: 'Search Closet',
      id: 5,
      completed: false
    },
    {
      task: 'Put Away Clothes',
      id: 6,
      completed: false
    },
 ];

 // ALL THE STATE CHANGES HAPPEN HERE

/* 
   --useReducer() takes your initial state and your custom function
     and passes them to state.  dispatch becomes like your setter
     but instead of calling it several times and each time defining
     new functionality, it is like an overloaded function that takes 
     different arguments, and acts accordingly.

     dispatch is aware of the state, and acts as a setter, so when
     you are returning ( like below ), either a new array with a new
     object, a newState, or a filtered array - this gets set to state
     because dispatch is the "setter"  like in useState

   dispatch(){
      taskReducer()
   }
*/
export const taskReducer = (state, action) => {

   //console.log("STATE IN TASKREDUCER: ", state);
   //console.log("ACTION IN TASKREDUCER:", action);

   switch(action.type) {

      /* A new object is created with the payload
         set by state in TodoForm.js  */
      case 'ADD_TODO' :
         const newTask = {
            task: action.payload,
            id: Date.now(),
            completed: false
         }
         // Previous state is returned with
         // the new object added
         return [...state, newTask]

      /* State is mapped through the matched id is
         toggled -  */
      case 'TOGGLE_TODO' :
         const newState = state.map( (task)=>{ 
            if(action.payload === task.id){
               return { ...task, completed: !task.completed};
            }else{
               return task;
            }
         })
         return newState;
         
      
      case 'CLEAR_TODO' :
         return state.filter( item => !item.completed);

      default:
         console.log("error");
         return state;
   }
}