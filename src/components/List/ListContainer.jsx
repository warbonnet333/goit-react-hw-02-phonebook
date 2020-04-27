import List from "./List"
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import * as listActions from "../redux/listActions"

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string,
  })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired
}

const mstp = state => ({
  items: state.contacts,
  filter: state.filter
})

const mDTP = dispatch => ({
  deleteContact: id => dispatch(listActions.deleteContact(id))
})

export default connect(mstp, mDTP)(List)