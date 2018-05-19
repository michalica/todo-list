import React, { Component } from 'react';
import TodoListContainer from './containers/TodoListContainer';
import { Provider } from 'react-redux';
import DevTools from './containers/DevTools';


import './App.css';

class App extends Component {
  render() {
    const {store} = this.props;
    return (
        <Provider store={store}>
            <div className="App">
              <TodoListContainer />
              <DevTools />
          </div>
        </Provider>

    );
  }
}

export default App;
