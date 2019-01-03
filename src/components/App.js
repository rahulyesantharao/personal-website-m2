import React from 'react';
import Header from './common/Header';
import Main from './common/Main';
import Footer from './common/Footer';
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {menu:false};
  }

  toggleMenu() {
    this.setState((prevState) => {
      return Object.assign({}, prevState, {menu: !prevState.menu});
    });
  }

  render() {
    const isHome = this.props.location.pathname=='/';
    return (
      <div style={this.state.menu?{overflow:"hidden"}:{}}>
        <Header menuOpen={this.state.menu} toggleMenu={this.toggleMenu.bind(this)} isHome={isHome}/>
        <Main isHome={isHome}/>
        <Footer isHome={isHome}/>
        <div id="sidenav-overlay" className={this.state.menu?"is-active":""} onClick={this.toggleMenu.bind(this)}/>
      </div>
    );
  }
}

App.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default withRouter(App);
