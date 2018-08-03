import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Attending from '../Pages/Attending.display'
import ChooseName from '../Pages/ChooseName/ChooseName.container'
import Name from '../Pages/Name/Name.container'
import NotAttending from '../Pages/NotAttending.display'
import OurStory from '../Pages/OurStory.display'
import Rsvp from '../Pages/Rsvp/Rsvp.container'
import Seats from '../Pages/Seats/Seats.container'
// import { css } from 'emotion'

class App extends React.Component {
  render () {
    // add css here
    return (
      <Router>
        { /* <Route render={({ location }) => (
          <React.Fragment>
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={250} classNames='fade'>
                <Switch location={location}> */ }
        <React.Fragment>
          <Route exact path='/' component={Name} />
          <Route path='/rsvp' component={Rsvp} />
          <Route path='/our-story' component={OurStory} />
          <Route path='/choose-name' component={ChooseName} />
          <Route path='/not-attending' component={NotAttending} />
          <Route path='/reserve-seats' component={Seats} />
          <Route path='/attending' component={Attending} />
        </React.Fragment>
        { /* </Switch>
      </CSSTransition>
    </TransitionGroup>
        </React.Fragment>
)} /> */ }
      </Router>
    )
  }
}

export default App
