import React from 'react';

const NotFoundPage = () => {
  let curURL = window.location.pathname;
  return (
    <div>
    <section className="container-fluid">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-12-mobile is-8-tablet is-8-desktop">
            <h1><span>Error 404</span></h1>
          </div>
        </div>
      </div>
    </section>
    <section className="container top-pad">
      <div className="columns is-centered">
          <div className="column is-12-mobile is-8-tablet is-8-desktop">
            <div className="text">
              <p style={{paddingTop:'0'}}>
                {"The requested url " + curURL + " could not be found."}
              </p>
            </div>
          </div>
      </div>
    </section>
    </div>
  )
}

export default NotFoundPage;
