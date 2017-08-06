import React from 'react';
import PropTypes from 'prop-types';

const PageWrapper2 = (Page) => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: props.mounted,
      className: "page-wrapper page-0"
    }
  }

  componentWillReceiveProps(newProps) {
    console.log("New Props!: mounted: " + newProps.mounted);
    if(newProps.mounted) { // show the element
      this.setState((prevState) => (
        Object.assign({}, prevState, {show: true})
      ));
      setTimeout(() => this.setState((prevState) => (
        Object.assign({}, prevState, {className: "page-wrapper page-1"})
      )), 300);
    } else {
      this.setState((prevState) => (
        Object.assign({}, prevState, {className: "page-wrapper page-0"})
      ));
    }
  }

  transitionEnd() {
    if(!this.props.mounted) {
      this.setState({
        show: false
      });
    }
  }

  componentDidMount() {
    console.log("Component Mounted!");
    setTimeout(() => this.setState((prevState) => (
      Object.assign({}, prevState, {className: "page-wrapper page-1"})
    )), 300);
  }

  render() {
    if(this.state.show) return null;
    return  (
      <div className={this.state.className} onTransitionEnd={()=>this.transitionEnd()}>
        <Page {...this.props}/>
      </div>
    );
  }

};

PageWrapper2.propTypes = {
  mounted: PropTypes.bool.isRequired
}

export default PageWrapper2;
