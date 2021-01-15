import React, { Component } from "react";
import { connect } from "react-redux";



const requireAuth =  (ChildComponent) => {
    class ComposedComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {};
        }
        
        
        componentDidMount() {
            this.ShouldNavigation();
        }
        
        componentDidUpdate() {
            this.ShouldNavigation();
        }
        
        ShouldNavigation() {
            if (!this.props.isAuth) {
                this.props.history.push("/");
            }
        }
        
        render() {
            console.log(this.props)
            return <ChildComponent {...this.props}/>;
        }
    }

    const mapStateToProps = (state) => {
        return { isAuth : state.auth };
    }

    return connect(mapStateToProps)(ComposedComponent);
};

export default requireAuth;