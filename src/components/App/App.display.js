import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Name from '../Pages/Name.display'
import Rsvp from '../Pages/Rsvp.display'
import OurStory from '../Pages/OurStory.display'

class App extends React.Component {
  render () {
    return (
      <Router>
        <React.Fragment>
          <Route exact path='/' component={Name} />
          <Route exact path='/rsvp' component={Rsvp} />
          <Route exact path='/our-story' component={OurStory} />
          { /* <Route exact path='/response' component={Response} />
              <Route exact path='/registries' component={Registries} />
              <Route exact path='/about-us' component={About} /> */ }
        </React.Fragment>
      </Router>
    )
  }
}

export default App
