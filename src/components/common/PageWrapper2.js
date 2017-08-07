// Inspired by: https://stackoverflow.com/questions/40064249/react-animate-mount-and-unmount-of-a-single-component
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

class PageWrapper2 extends React.Component {
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
  setShow(caller) {
    console.log(this.props.page + ": " + caller + ">setShow" + this.showState());
    this.setState((prevState) => (
      Object.assign({}, prevState, {show: true})
    ));
  }
  unsetShow(caller) {
    console.log(this.props.page + ": " + caller + ">unsetShow" + this.showState());
    this.setState((prevState) => (
      Object.assign({}, prevState, {show: false})
    ));
  }
  setShowClass(caller) {
    if(!(this.state.className==="page-1")) {
      console.log(this.props.page + ": " + caller + ">setShowClass" + this.showState());
      this.setState((prevState) => (
        Object.assign({}, prevState, {className: "page-1"})
      ))
    }
  }
  unsetShowClass(caller) {
    if(!(this.state.className==="page-0")) {
      console.log(this.props.page + ": " + caller + ">unsetShowClass" + this.showState());
      this.setState((prevState) => (
        Object.assign({}, prevState, {className: "page-0"})
      ));
    }
  }


  componentWillReceiveProps(newProps) {
    if(newProps.mounted!=this.props.mounted) {
      // console.log(newProps.page + ": componentWillReceiveProps: mounted: " + newProps.mounted);
      if(newProps.mounted) { // show the element
        if(!this.state.show) {
          setTimeout(() => this.setShow("willReceiveProps"), 200); // ** DON'T RENDER UNTIL AFTER THE PREVIOUS PAGE HAS UNLOADED ENTIRELY, gets rid of the need for absolute positioning
          // this.setShow("willReceiveProps");
        }
        setTimeout(() => this.setShowClass("willReceiveProps"), 200);
        // this.setShowClass("willReceiveProps");
      } else {
        this.unsetShowClass("willReceiveProps");
      }
    }
  }

  transitionEnd() {
    // console.log(this.props.page + ": transitionEnd: mounted: " + this.props.mounted);
    if(!this.props.mounted) {
      this.unsetShow("transitionEnd");
      // this.unsetAbs();
    }
  }

  componentDidMount() {
    console.log(this.props.page + ": componentDidMount");
    if(this.props.mounted) { // show the element
      this.setShow("didMount");
      setTimeout(() => this.setShowClass("didMount"), 200);
    } else {
      // this.unsetShowClass();
    }
  }

  render() {
    // if(this.state.show) return null;
    return (
      <div className={"page-wrapper " + this.state.className} onTransitionEnd={()=>this.transitionEnd()} style={(this.props.home && this.state.show) ? {height: '100%', position: 'static'} : {}}>
        {this.state.show && this.props.children}
      </div>
    );
  }

}

PageWrapper2.propTypes = {
  mounted: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
  page: PropTypes.string.isRequired,
  home: PropTypes.bool.isRequired
}

export default PageWrapper2;
