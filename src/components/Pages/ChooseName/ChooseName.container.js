import { chooseGuest } from '../../../store/actions/name'
import { connect } from 'react-redux'
import Name from './Name.display'
import withLayout from '../../Layout/Layout.display'

const mapStateToProps = ({ name: { guests } }) => ({
  guests
})

const mapDispatchToProps = dispatch => ({
  _chooseGuest: (guest) => dispatch(chooseGuest(guest))
})

export default connect(mapStateToProps, mapDispatchToProps)(withLayout(Name))
