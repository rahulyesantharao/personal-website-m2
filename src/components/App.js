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
  }
  unsetHome() {
    this.setState((prevState) => {
      return Object.assign({}, prevState, {home: false});
    });
  }
  toggleMenu() {
    this.setState((prevState) => {
      return Object.assign({}, prevState, {menu: !prevState.menu});
    });
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
