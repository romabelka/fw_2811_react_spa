import React, {Component} from 'react'
import Article from './Article'

const articlesData = [
  {
    title: 'title',
    text: 'some text'
  },
  {
    title: 'title2',
    text: 'some text 2'
  }
]

class App extends Component {
  render(){
    const articles = articlesData.map((article) => {
      return <li key={article.title}><Article article = {article}/></li>
    })

    return(
      <div>
        <h1>React App</h1>
        {articles}
      </div>
    )
  }
}

export default App