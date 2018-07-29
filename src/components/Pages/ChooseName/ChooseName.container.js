import { chooseGuest } from '../../../store/actions/guest'
import { connect } from 'react-redux'
import ChooseName from './ChooseName.display'
import withLayout from '../../Layout/Layout.display'

const mapStateToProps = ({ name: { guests } }) => ({
  guests
})

const mapDispatchToProps = dispatch => ({
  _chooseGuest: (guest) => dispatch(chooseGuest(guest))
})

export default connect(mapStateToProps, mapDispatchToProps)(withLayout(ChooseName))
