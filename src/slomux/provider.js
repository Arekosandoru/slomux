import React from 'react';
import { StoreContext } from './context';

class Provider extends React.Component {
  // Ошибка 2: используется window, а не react context, +
  // соответсвенно нет childContextTypes и contextTypes
  // без этого работать будет, но это неправильно

  // componentWillMount() {
  //   window.store = this.props.store;
  // }

  constructor(props) {
    super(props);

    this.state = {
      store: props.store,
    }
  }

  render() {
    const { children } = this.props;
    const { store } = this.state;

    return (
      <StoreContext.Provider value={store}>
        {children}
      </StoreContext.Provider>
    );
  }
}

export default Provider;