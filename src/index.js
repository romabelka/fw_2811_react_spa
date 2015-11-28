import React, {Component} from 'react'
import ReactDOM from 'react-dom'

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

class Article extends Component {
  render(){
    const {article} = this.props
    return(
      <div>
        <h2>{article.title}</h2>
        <section>
          {article.text}
        </section>
      </div>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById("container"));