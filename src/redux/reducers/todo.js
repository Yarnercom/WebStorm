

const DELETE = 'DELETE';
const ADD = 'ADD';

const initialState = {
  arr: [
      {
          id: 1,
          title: "Пойти гулять"
      }
  ]
};

export default (state = initialState, action) =>{
    switch (action.type) {
        case ADD : {
            return {
                ...state,
                arr: [...state.arr, {
                    id: state.arr.length + 1,
                    title: action.title
                }]
            }
        }
        case DELETE : {
            return {
                ...state,
                arr: state.arr.filter((item) => item.id !== action.id)
            }
        }
        default : return state
    }
}

export const addTask = (text) =>{
  return (dispatch) => {
      return dispatch({type: ADD, title: text})
  }
};

export const deleteTask = (id) =>{
  return (dispatch) => {
      return dispatch({type: DELETE, id})
  }
};