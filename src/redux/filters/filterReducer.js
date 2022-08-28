import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";
import initialState from "./initialState";


const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case STATUSCHANGED:
      return {
        ...state, status: payload
      }


    case COLORCHANGED:
      const { color, changeType } = payload

      switch (changeType) {
        case 'added':
          return {
            ...state,
            colors: [
              ...state.colors,
              color
            ]
          }
        case 'removed':
          return {
            ...state,
            colors: state.colors.filter(existingColor => existingColor !== color)
          }


        default:
          return state;

      }

    default:
      return state;
  }
}
export default filterReducer;