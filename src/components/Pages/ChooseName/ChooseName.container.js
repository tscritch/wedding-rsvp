import { chooseGuest, selectGuest } from '../../../store/actions/guest'
import { connect } from 'react-redux'
import ChooseName from './ChooseName.display'
import withLayout from '../../Layout/Layout.display'

const mapStateToProps = ({ guest: { guestChoice, guest }, name: { guests } }) => ({
  guestChoice,
  guest,
  guests
})

const mapDispatchToProps = dispatch => ({
  _chooseGuest: (index) => dispatch(chooseGuest(index)),
  _submitParty: (guest) => dispatch(selectGuest(guest))
})

export default connect(mapStateToProps, mapDispatchToProps)(withLayout(ChooseName))
