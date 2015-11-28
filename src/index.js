import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render(){
    return(
      <div>
        <h1>React App</h1>
        <Article />
      </div>
    )
  }
}

class Article extends Component {
  render(){
    return(
      <div>
        <h2>Article Title</h2>
        <div>
          Author
        </div>
        <section>
          Article Text
        </section>
      </div>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById("container"));