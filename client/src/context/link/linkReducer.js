import {
  ADD_LINK,
  DELETE_LINK,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LINK,
  FILTER_LINKS,
  CLEAR_FILTER,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_LINK:
      return {
        ...state,
        links: [...state.links, action.payload],
      };
    case UPDATE_LINK:
      return {
        ...state,
        links: state.links.map(link =>
          link.id === action.payload.id ? action.payload : link
        ),
      };
    case DELETE_LINK:
      return {
        ...state,
        links: state.links.filter(link => link.id !== action.payload),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    default:
      return state;
  }
};
