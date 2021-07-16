import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ActionCreator } from 'redux';

interface IMapActions {
  [key: string]: ActionCreator<any>;
}

export default function useDispatchAction(actions: IMapActions) {
  const dispatch = useDispatch();

  const [dispatchAction, setDispatchAction] = useState({});

  useEffect(() => {
    Object.keys(actions).forEach((key) => {
      setDispatchAction((preActions) => {
        preActions[key] = (...args) => dispatch(actions[key](...args));
        return preActions;
      });
    });
  }, []);

  return dispatchAction;
}