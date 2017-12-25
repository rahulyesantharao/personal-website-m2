// Inspired by: https://stackoverflow.com/questions/40064249/react-animate-mount-and-unmount-of-a-single-component
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

// const timeoutTime = 182; // eslint-disable-line no-unused-vars

class PageAnimationWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: props.mounted
    }
  }

  showState() {
    return "(" + this.state.show + ")";
  }
  setShow() {
    this.setState((prevState) => (
      Object.assign({}, prevState, {show: true})
    ));
  }
  unsetShow() {
    this.setState((prevState) => (
      Object.assign({}, prevState, {show: false})
    ));
  }

  componentDidMount() {
    if(this.props.mounted) { // show the element
      this.setShow();
    }
  }
  componentWillReceiveProps(newProps) {
    if(newProps.mounted!=this.props.mounted) {
      if(newProps.mounted) { // show the element
        if(!this.state.show) {
          document.title = this.props.home?("Rahul Yesantharao"):(this.props.page + " | Rahul Yesantharao");
          this.setShow();
        }
      } else {
        this.unsetShow();
      }
    }
  }

  render() {
    let pageStyle = {};
    if(this.state.show) {
      if(this.props.home) {
        pageStyle = {height: '100%', paddingTop: '0'};
      }
    }
    let className = (this.state.show)?"page-1":"page-0";
    return (
      <div className={"page-wrapper " + className} style={pageStyle}>
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
