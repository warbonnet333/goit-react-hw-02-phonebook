import Form from "./Form";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as listActions from "../redux/listActions";
import * as alertActions from "../redux/alertActions";

const mSTP = (state) => ({
  contacts: state.contacts,
});

const mDTP = (dispatch) => ({
  addContact: (name, number) => dispatch(listActions.addContact(name, number)),
  switchAlert: (name) => dispatch(alertActions.switchAlert(name)),
});

Form.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
    })
  ).isRequired,
  addContact: PropTypes.func.isRequired,
  switchAlert: PropTypes.func.isRequired,
};

export default connect(mSTP, mDTP)(Form);
