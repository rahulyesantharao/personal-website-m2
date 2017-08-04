import React from 'react';
import PropTypes from 'prop-types';

class HomePage extends React.Component {
  componentWillMount() {
    this.props.setHome();
  }

  render() {
    return (
      <div className="homePage">
        <section className="banner">
          <h1>
            <span>Rahul</span><br/>
            <span>Yesantharao</span>
          </h1>
          <h2><span>./Student/Programmer/Artist</span></h2>
        </section>
      </div>
    );
  }

  componentWillUnmount() {
    this.props.unsetHome();
  }
}

HomePage.propTypes = {
  setHome: PropTypes.func.isRequired,
  unsetHome: PropTypes.func.isRequired
};

export default HomePage;
