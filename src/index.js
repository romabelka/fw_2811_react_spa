import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Article extends Component {
  render(){
    return(
      <div>
        <h1>Welcome 2 React</h1>
      </div>
    )
  }
}

ReactDOM.render(<Article/>, document.getElementById("container"));