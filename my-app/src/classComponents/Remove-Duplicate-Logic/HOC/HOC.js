
import React from "react"


var HOC = (OriginalComponents) => {
  class Newcomponent extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
      }
    }
    updateCount = () => {
      this.setState({
        count: this.state.count+1
      })
    }
    render() {
      return (
        <div>
          <OriginalComponents count={this.state.count} updateCount={this.updateCount} />
        </div>
      )
    }
  }
  return Newcomponent
  
}

export default HOC