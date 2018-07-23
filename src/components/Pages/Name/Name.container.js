import { changeFirstName, changeLastName } from '../../../store/actions/name'
import { connect } from 'react-redux'
import Name from './Name.display'
import withLayout from '../../Layout/Layout.display'

const mapStateToProps = ({ name }) => ({
  firstName: name.firstName,
  lastName: name.lastName,
  loading: name.loading
})

const mapDispatchToProps = dispatch => ({
  _changeFirstName: (e) => dispatch(changeFirstName(e.target.value)),
  _changeLastName: (e) => dispatch(changeLastName(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(withLayout(Name))
