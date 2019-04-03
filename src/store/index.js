import reducer from '../reducer'

const createStore = (reducer, initialState) => {
  let currentState = initialState;
  const listeners = [];

  const getState = () => currentState;

  const dispatch = (action) => {
    currentState = reducer(currentState, action);
    listeners.forEach(listener => listener())
  };

  const subscribe = (listener) => listeners.push(listener);

  const unsubscribe = (listener) => listeners.splice(listeners.indexOf(listener), 1);

  return { getState, dispatch, subscribe, unsubscribe }
};

const store = createStore(reducer, []);

export default store;