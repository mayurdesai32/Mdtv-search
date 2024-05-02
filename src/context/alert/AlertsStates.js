import { useReducer } from 'react';
import { SET_ALERT, REMOVE_ALERT } from '../types';
import AlertsContexts from './AlertsContexts';
import AlertsReducers from './AlertsReducers';
const AlertsStates = (props) => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertsReducers, initialState);

  const setAlert = (message, type) => {
    dispatch({
      type: SET_ALERT,
      payload: {
        message,
        type,
      },
    });
    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT,
      });
    }, 5000);
  };
  return (
    <AlertsContexts.Provider value={{ alert: state, setAlert }}>
      {props.children}
    </AlertsContexts.Provider>
  );
};

export default AlertsStates;
