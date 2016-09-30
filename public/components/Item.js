var React = require('react');

var Item = React.createClass({
  getInitialState() {
    return {
      image: "https://pbs.twimg.com/profile_images/507251035929190400/BDUL3Uzt_400x400.png",
      tag: ""
    }
  },

  render() {
    console.log('render image')
    return (      
        <div>
          <img src={this.state.image} />
        </div>
      )
  }
})

module.exports = Item