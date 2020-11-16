import React, { Component } from 'react'

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
      return <h1>Articles</h1>
    }
  }
}

export default Resources
