import initialState from "./initialState";
import { ADDED, DELETED, TOGGLED, COLORSELECTED, CLEARCOMPLETED, ALLCOMPLETED } from "./actionTypes";


const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, obj) => Math.max(maxId, obj.id), -1)
  return maxId + 1;
}

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDED:
      return [
        ...state, {
          id: nextTodoId(state),
          title: payload,
          completed: false,
          color: "green"
        }
      ];
    case DELETED:
      return state.filter((obj) => obj.id !== payload)

    case TOGGLED:
      return state.map((obj) => {

        if (obj.id === payload) {
          return {
            ...obj, completed: !obj.completed
          }
        }
        else return obj;
      });

    case COLORSELECTED:
      const { color, todoId } = payload
      return state.map((obj) => {

        if (obj.id === todoId) {
          return {
            ...obj, color
          }
        }
        else return obj;
      });

    case CLEARCOMPLETED:
      return state.filter((obj) => !obj.completed)

    case ALLCOMPLETED:
      return state.map((obj) => (
        { ...obj, completed: true }
      ));

    default:
      return state;
  }
}

export default todoReducer