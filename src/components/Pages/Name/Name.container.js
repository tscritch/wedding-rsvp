import { changeFirstName, changeLastName } from '../../../store/actions/nameFields'
import { connect } from 'react-redux'
import Name from './Name.display'
import withLayout from '../../Layout/Layout.display'

const mapStateToProps = ({ nameFields: { firstName, lastName, loading } }) => ({
  firstName,
  lastName,
  loading
})

const mapDispatchToProps = dispatch => ({
  _changeFirstName: (e) => dispatch(changeFirstName(e.target.value)),
  _changeLastName: (e) => dispatch(changeLastName(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(withLayout(Name))
