import Filter from "./Filter";
import PropTypes from "prop-types";
import * as filterActions from "../redux/filterActions";
import { connect } from "react-redux";

Filter.propTypes = {
  value: PropTypes.string,
  changeFilter: PropTypes.func.isRequired,
};

const mSTP = (state) => ({
  value: state.filter,
});

const mDTP = (dispatch) => ({
  changeFilter: (event) =>
    dispatch(filterActions.fillFilter(event.target.value)),
});

export default connect(mSTP, mDTP)(Filter);
