var React = require('react');

var LoginUser = React.createClass({
  getInitialState() {
    return { username: '' };
  },

  showLock() {
    // Show the Auth0Lock widget
    this.props.lock.show();
  },

  handleLogin(event) {
    event.preventDefault();
    
    // When the form is submitted, call the onSearch callback that is passed to the component

    ret = this.props.onLogin(this.state.username, this.state.password)

    if (ret === true) {
      //this.getDOMNode().querySelector('input').blur();
    }

    // Unfocus the text input field
    
  },

  handleChange(event) {
    this.setState({username: event.target.username})
    this.setState({password: event.target.password})
  },

  render() {
    return (
      <div>
        <a onClick={this.showLock}>Sign In</a>
      </div>);
  }
});

module.exports = LoginUser;