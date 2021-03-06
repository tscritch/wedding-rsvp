import { changeLastName, nameFetchStart } from '../../../store/actions/name'
import { connect } from 'react-redux'
import Name from './Name.display'
import withLayout from '../../Layout/Layout.display'

const mapStateToProps = ({ name: { lastName, loading, guests, message }, guest: { guest } }) => ({
  lastName,
  loading,
  guest,
  guests,
  message
})

const mapDispatchToProps = dispatch => ({
  _changeLastName: (e) => dispatch(changeLastName(e.target.value)),
  _submitName: (name) => dispatch(nameFetchStart(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(withLayout(Name))
