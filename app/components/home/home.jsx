import React from "react";
import { connect } from "react-redux";
import { changeMessage } from "../../redux/components/home/homeSlice";

const mapDispatch = { changeMessage };

class Home extends React.Component {

    render(){
        return <div>{this.props.home.message}</div>;
    }
}

const mapStateToProps = (state, props) => ({
    home: state.home
});

export default connect(
    mapStateToProps,
    mapDispatch
)(Home);