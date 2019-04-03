import React from 'react';
import { StoreContext } from './context';

export default (mapStateToProps, mapDispatchToProps) => (Component) => {
  class Connect extends React.Component {
    static contextType = StoreContext;

    componentDidMount() {
      this.subscribe = this.context.subscribe(this.handleChange);
    }

    componentWillUnmount() {
      if (this.subscribe) this.context.unsubscribe(this.handleChange);
    }

    handleChange = () => {
      this.setState({});
    };

    render() {
      // Ошибка 1: не передаем собственные свойства +

      if (typeof mapStateToProps !== 'function') mapStateToProps = () => {};
      if (typeof mapDispatchToProps !== 'function') mapDispatchToProps = () => {};

      return (
        <StoreContext.Consumer>
          {(store) => (
            <Component
              {...mapStateToProps(store.getState(), this.props)}
              {...mapDispatchToProps(store.dispatch, this.props)}
              {...this.props}
            />
          )}
        </StoreContext.Consumer>
      )
    }
  }

  return Connect;
}