import { chooseRsvp, submitRsvp } from '../../../store/actions/guest'
import { connect } from 'react-redux'
import Rsvp from './Rsvp.display'
import withLayout from '../../Layout/Layout.display'

const mapStateToProps = ({ guest: { guest, rsvpChoice, rsvped, message, loading } }) => ({
  guest,
  rsvpChoice,
  rsvped,
  message,
  loading
})

const mapDispatchToProps = dispatch => ({
  _chooseRsvp: (index) => dispatch(chooseRsvp(index)),
  _submitRsvp: (id, answer) => dispatch(submitRsvp(id, answer))
})

export default connect(mapStateToProps, mapDispatchToProps)(withLayout(Rsvp))
