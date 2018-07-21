import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from '../Layout/Layout.display'
import Name from '../Pages/Name.display'
import Rsvp from '../Pages/Rsvp.display'

class App extends React.Component {
  render () {
    return (
      <Router>
        <Layout>
          <Route exact path='/' component={Name} />
          <Route exact path='/rsvp' component={Rsvp} />
          { /* <Route exact path='/response' component={Response} />
              <Route exact path='/registries' component={Registries} />
              <Route exact path='/about-us' component={About} /> */ }
        </Layout>
      </Router>
    )
  }
}

export default App
