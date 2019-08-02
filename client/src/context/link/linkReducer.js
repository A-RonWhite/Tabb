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
    default:
      return state;
  }
};
