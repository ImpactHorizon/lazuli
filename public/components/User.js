var React = require('react');

var User = React.createClass({

  getInitialState() {    
    return {
      profile: null
    }
  },

  componentDidMount() {
    // The token is passed down from the App component 
    // and used to retrieve the profile
    console.log('mount once')
    this.props.lock.getProfile(this.props.idToken, function (err, profile) {
      if (err) {
        console.log("Error loading the Profile", err)
        return;
      }
      this.setState({profile: profile})
    }.bind(this))
  },

  render() {
    console.log('render once')
    if (this.state.profile) {

      return (
        <div>        
          <h2>Welcome {this.state.profile.nickname}</h2>
          <img src={this.state.profile.picture} />
        </div>
      );
    } else {
      console.log("null profile")
      return (
        <div className="loading">Loading profile</div>
      );
    }
  }
})

module.exports = User