import Alert from "./Alert";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as alertActions from "../redux/alertActions";

Alert.propTypes = {
  existedName: PropTypes.string,
  onCloseAlert: PropTypes.func.isRequired,
};

const mSTP = (state) => ({
  existedName: state.alert.existedName,
});

const mDTP = (dispatch) => ({
  onCloseAlert: () => dispatch(alertActions.closeAlert()),
});

export default connect(mSTP, mDTP)(Alert);
