import React, { useReducer } from 'react';
import axios from 'axios';
import uuid from 'uuid';
import LinkContext from './linkContext';
import linkReducer from './linkReducer';
import {
  ADD_LINK,
  DELETE_LINK,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LINK,
  FILTER_LINKS,
  CLEAR_FILTER,
} from '../types';

const LinkState = props => {
  const initialState = {
    links: [],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(linkReducer, initialState);

  // Add Link
  const addLink = link => {
    link.id = uuid.v4();
    dispatch({ type: ADD_LINK, payload: link });
  };

  // Delete Link
  const deleteLink = id => {
    dispatch({ type: DELETE_LINK, payload: id });
  };

  // Set current Link
  const setCurrent = link => {
    dispatch({ type: SET_CURRENT, payload: link });
  };

  // Clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update link
  const updateLink = link => {
    dispatch({ type: UPDATE_LINK, payload: link });
  };

  // Filter link
  const filterLinks = text => {
    dispatch({ type: FILTER_LINKS, payload: text });
  };

  // Clear link
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <LinkContext.Provider
      value={{
        links: state.links,
        current: state.current,
        filtered: state.filtered,
        addLink,
        deleteLink,
        setCurrent,
        clearCurrent,
        updateLink,
        filterLinks,
        clearFilter,
      }}
    >
      {props.children}
    </LinkContext.Provider>
  );
};

export default LinkState;
