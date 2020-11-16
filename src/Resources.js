import React, { Component } from 'react'

import { Container } from 'react-bootstrap'
import ResourceCard from './ResorceCard'

class Resources extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null, isLoaded: false, articles: [] }
  }

  componentDidMount() {
    fetch(
      'http://newsapi.org/v2/everything?q=fasting&apiKey=17fee712db9e4b3c94de2ebd451eedb8'
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ isLoaded: true, articles: result.articles })
        },
        (error) => {
          this.setState({ isLoaded: true, error })
        }
      )
  }
  render() {
    const { error, isLoaded, articles } = this.state
    if (error) {
      return <div>Error:{error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <Container className='mt-4'>
          {articles.map((article) => (
            <ResourceCard article={article} />
          ))}
        </Container>
      )
    }
  }
}

export default Resources
