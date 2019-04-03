import React, {Component} from 'react';
import './App.css';
import Todo from './components/todo';
import store from './store';
import Provider from './slomux/provider';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Todo title="Список задач"/>
      </Provider>
    );
  }
}

export default App;
