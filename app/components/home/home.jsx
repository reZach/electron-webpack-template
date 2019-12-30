import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeMessage } from "../../redux/components/home/homeSlice";

const mapDispatch = { changeMessage };

class Home extends React.Component {
  render() {
    return <div>
        message: {this.props.home.message}
        <Link to="/main">link</Link>
    </div>;
  }
}

const mapStateToProps = (state, props) => ({
  home: state.home
});

export default connect(mapStateToProps, mapDispatch)(Home);
