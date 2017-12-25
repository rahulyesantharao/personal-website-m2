// Inspired by: https://stackoverflow.com/questions/40064249/react-animate-mount-and-unmount-of-a-single-component
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

const timeoutTime = 182;

class PageAnimationWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: props.mounted?true:false,
      className: "page-0"
    }
  }

  showState() {
    return "(" + this.state.show + ", " + this.state.className + ")";
  }
  setShow() {
    // console.log(this.props.page + ": " + caller + ">setShow" + this.showState());
    this.setState((prevState) => (
      Object.assign({}, prevState, {show: true})
    ));
    // document.title = this.props.page + " | Rahul Yesantharao";
  }
  unsetShow() {
    // console.log(this.props.page + ": " + caller + ">unsetShow" + this.showState());
    this.setState((prevState) => (
      Object.assign({}, prevState, {show: false})
    ));
  }
  setShowClass() {
    if(!(this.state.className==="page-1")) {
      // console.log(this.props.page + ": " + caller + ">setShowClass" + this.showState());
      this.setState((prevState) => (
        Object.assign({}, prevState, {className: "page-1"})
      ))
    }
  }
  unsetShowClass() {
    if(!(this.state.className==="page-0")) {
      // console.log(this.props.page + ": " + caller + ">unsetShowClass" + this.showState());
      this.setState((prevState) => (
        Object.assign({}, prevState, {className: "page-0"})
      ));
    }
  }

  componentDidMount() {
    // console.log(this.props.page + ": componentDidMount");
    if(this.props.mounted) { // show the element
      this.setShow();
      this.setShowClass()
      // setTimeout(() => this.setShowClass(), timeoutTime);
    } else {
      // this.unsetShowClass();
    }
  }
  componentWillReceiveProps(newProps) {
    if(newProps.mounted!=this.props.mounted) {
      // console.log(newProps.page + ": componentWillReceiveProps: mounted: " + newProps.mounted);
      if(newProps.mounted) { // show the element
        if(!this.state.show) {
          document.title = this.props.home?("Rahul Yesantharao"):(this.props.page + " | Rahul Yesantharao");
          setTimeout(() => this.setShow(), timeoutTime); // ** DON'T RENDER UNTIL AFTER THE PREVIOUS PAGE HAS UNLOADED ENTIRELY, gets rid of the need for absolute positioning
        }
        setTimeout(() => this.setShowClass(), timeoutTime);
      } else {
        this.unsetShowClass();
      }
    }
  }
  transitionEnd() {
    // console.log(this.props.page + ": transitionEnd: mounted: " + this.props.mounted);
    if(!this.props.mounted) {
      this.unsetShow();
    }
  }

  render() {
    let pageStyle = {};
    if(this.state.show) {
      if(this.props.home) {
        pageStyle = {height: '100%', paddingTop: '0'};
      }
    }
    return (
      <div className={"page-wrapper " + this.state.className} onTransitionEnd={()=>this.transitionEnd()} style={pageStyle}>
        {this.state.show && this.props.children}
      </div>
    );
  }

}

PageAnimationWrapper.propTypes = {
  mounted: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  page: PropTypes.string.isRequired,
  home: PropTypes.bool.isRequired
}

export default PageAnimationWrapper;
