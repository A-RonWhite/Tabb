import React, { useReducer } from 'react';
import axios from 'axios';
import LinkContext from './linkContext';
import linkReducer from './linkReducer';
import {
  GET_LINKS,
  CLEAR_LINKS,
  ADD_LINK,
  DELETE_LINK,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LINK,
  FILTER_LINKS,
  CLEAR_FILTER,
  LINK_ERROR,
} from '../types';

const LinkState = props => {
  const initialState = {
    links: null,
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(linkReducer, initialState);

  // Get Links

  const getLinks = async () => {
    try {
      const res = await axios.get('api/links');

      dispatch({ type: GET_LINKS, payload: res.data });
    } catch (err) {
      dispatch({ type: LINK_ERROR, payload: err.response.msg });
    }
  };

  // Add Link
  const addLink = async link => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('api/links', link, config);

      dispatch({ type: ADD_LINK, payload: res.data });
    } catch (err) {
      dispatch({ type: LINK_ERROR, payload: err.response.msg });
    }
  };

  // Delete Link
  const deleteLink = async id => {
    try {
      await axios.delete(`api/links/${id}`);

      dispatch({ type: DELETE_LINK, payload: id });
    } catch (err) {
      dispatch({ type: LINK_ERROR, payload: err.response.msg });
    }
  };

  // Clear links
  const clearLinks = () => {
    dispatch({ type: CLEAR_LINKS });
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
        error: state.error,
        addLink,
        deleteLink,
        setCurrent,
        clearCurrent,
        updateLink,
        filterLinks,
        clearFilter,
        getLinks,
        clearLinks,
      }}
    >
      {props.children}
    </LinkContext.Provider>
  );
};

export default LinkState;
