import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Article from './components/Article'

const article = {
  title: 'Some title',
  text: 'Article body text'
}

class App extends Component {
  render(){
    return(
      <div>
        <h1>React App</h1>
        <Article article={article}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("container"));