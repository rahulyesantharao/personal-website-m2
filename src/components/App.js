import React from 'react';
import Header from './common/Header';
import Main from './common/Main';
import Footer from './common/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {home:false, menu:false};
  }

  setHome() {
    this.setState((prevState) => {
      return Object.assign({}, prevState, {home: true});
    });
    // console.log("HOME!: " + this.state.home); // eslint-disable-line no-console
    // document.getElementById("app").className="home";
  }
  unsetHome() {
    this.setState((prevState) => {
      return Object.assign({}, prevState, {home: false});
    });
    // console.log("NOT HOME!"); // eslint-disable-line no-console
    // document.getElementById("app").className="not-home";
  }
  toggleMenu() {
    this.setState((prevState) => {
      return Object.assign({}, prevState, {menu: !prevState.menu});
    });
    console.log("MENU TOGGLED!"); // eslint-disable-line no-console
  }



  render() {
    return (
      <div>
        <Header menuOpen={this.state.menu} toggleMenu={this.toggleMenu.bind(this)} isHome={this.state.home}/>
        <Main isHome={this.state.home} setHome={this.setHome.bind(this)} unsetHome={this.unsetHome.bind(this)}/>
        <Footer isHome={this.state.home}/>
      </div>
    );
  }
}

export default App;
