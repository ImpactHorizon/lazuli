var React = require('react')
var Item = require('./Item')

var Wardrobe = React.createClass({
  statics : {
    visibleItems : 5
  },

  render() {
    const items = []
    console.log(this.constructor.visibleItems)
    for (var i = 0; i < this.constructor.visibleItems; i++) { 
      console.log('add')     
      items.push(<Item />)
    }
    console.log(items)
    return (
      <div>
        <h2> SZAFA GRA</h2>
        {items}
      </div>
      )
  }
})

module.exports = Wardrobe