import { submitRsvp } from '../../../store/actions/guest'
import { connect } from 'react-redux'
import Rsvp from './Rsvp.display'
import withLayout from '../../Layout/Layout.display'

const mapStateToProps = ({ guest: { guest } }) => ({
  guest
})

const mapDispatchToProps = dispatch => ({
  _submitRsvp: (answer) => dispatch(submitRsvp(answer))
})

export default connect(mapStateToProps, mapDispatchToProps)(withLayout(Rsvp))
