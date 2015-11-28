import React, {Component} from 'react'

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

export default Article