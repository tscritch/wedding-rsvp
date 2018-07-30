import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Attending from '../Pages/Attending.display'
import ChooseName from '../Pages/ChooseName/ChooseName.container'
import Name from '../Pages/Name/Name.container'
import NotAttending from '../Pages/NotAttending.display'
import OurStory from '../Pages/OurStory.display'
import Rsvp from '../Pages/Rsvp/Rsvp.container'

class App extends React.Component {
  render () {
    return (
      <Router>
        <React.Fragment>
          <Route exact path='/' component={Name} />
          <Route path='/rsvp' component={Rsvp} />
          <Route path='/our-story' component={OurStory} />
          <Route path='/choose-name' component={ChooseName} />
          <Route path='/not-attending' component={NotAttending} />
          <Route path='/attending' component={Attending} />
        </React.Fragment>
      </Router>
    )
  }
}

export default App
