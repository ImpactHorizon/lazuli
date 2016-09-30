var React = require('react');
var User = require('./User')
var Wardrobe = require('./Wardrobe')


var App = React.createClass({

  componentWillMount() {      
      this.createLock()
      this.setState({idToken: this.getIdToken()})
      console.log('first')
  },

  showLock() {
    this.lock.show();
  },

  createLock() {
    this.lock = new Auth0Lock('u2ifx9rFECaB3R6akkqjNSiY66fjXK1m', 'impacthorizon.eu.auth0.com');
    this.lock.on("authenticated", (authResult) => {
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          // Handle error
          return;
        }        
        localStorage.setItem("idToken", authResult.idToken);
        localStorage.setItem("profile", JSON.stringify(profile));
        this.lock.hide();
        this.setState({idToken: authResult.idToken})        
      });
    });
  },

  getIdToken: function() {
    // First, check if there is already a JWT in local storage
    const idToken = localStorage.getItem('idToken');
    return idToken;
  },

  render() {
    if (this.state.idToken) {
      console.log("has id token render APP")
      return (
        <div>
          <User lock={this.lock} idToken={this.state.idToken} />
          <Wardrobe />
        </div>
        )
    } else {      
      console.log("no id token render APP")
      this.showLock()
      return (<div></div>)
    }
  }
});

module.exports = App;