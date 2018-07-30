import { changeSeatCount, submitReservationStart } from '../../../store/actions/seats'
import { connect } from 'react-redux'
import Seats from './Seats.display'
import withLayout from '../../Layout/Layout.display'

const mapStateToProps = ({ seats: { seatCount, loading, message, reserved }, guest: { guest } }) => ({
  seatCount,
  loading,
  guest,
  message,
  reserved
})

const mapDispatchToProps = dispatch => ({
  _changeSeatCount: (e) => dispatch(changeSeatCount(e.target.value)),
  _submitReservation: (reservedSeats) => dispatch(submitReservationStart(reservedSeats))
})

export default connect(mapStateToProps, mapDispatchToProps)(withLayout(Seats))
