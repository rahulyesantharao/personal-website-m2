import React from 'react';

const AboutPage = () => {
  return (
    <div>
    <section className="container-fluid" id="aboutHeader">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-12-mobile is-8-tablet is-8-desktop">
            <h1><span>About Me</span></h1>
          </div>
        </div>
      </div>
    </section>
    <section className="container">
      {/* <div className="columns is-centered">
        <h1 className="column is-12-mobile is-8-tablet is-8-desktop"><span>About Me</span></h1>
      </div> */}
      <div className="columns is-centered">
        <div className="column is-12-mobile is-8-tablet is-8-desktop">
          <div className="text">
            <p>
              Hi! I&rsquo;m Rahul. I am a developer, aspiring engineer, and (amateur) musician.
              I am passionate about anything and everything relating to technlogy.
            </p>
            <p>
              I am a freshman at the Massachusetts Institute of Technology, studying Course 6-2 (Electrical Engineering and Computer Science).
            </p>
            <p>
              I was born and raised in Houston, Texas, just a couple minutes away from the Johnson Space Center.
              I graduated from Clear Lake High School as Salutatorian of the Class of 2017
              (see my speech <a href="https://vimeo.com/220680421#t=1696s" target="_blank" rel="noopener noreferrer">here!</a>).
              During my time in high school, I was invited to the White House Science Fair in <a href="https://obamawhitehouse.archives.gov/the-press-office/2015/03/23/new-details-president-obama-hosts-5th-white-house-science-fair" target="_blank" rel="noopener noreferrer">2015</a> and <a href="https://obamawhitehouse.archives.gov/the-press-office/2016/04/13/new-details-president-obama-hosts-6th-white-house-science-fair" target="_blank" rel="noopener noreferrer">20</a><a href="https://www.click2houston.com/news/local-students-perfect-sat-psat-scores-lead-to-white-house-visit" target="_blank" rel="noopener noreferrer">16</a>.
              I also competed in the USA Math and Computing Olympiads. In addition, I was the principal cellist
              of the <a href="http://lakeorchestra.org/" target="_blank" rel="noopener noreferrer">CLHS Orchestra</a> and played in
              the Texas All State Orchestras
              (<a href="https://www.youtube.com/playlist?list=PLUSRfoOcUe4YXuqdjf3Ata8lNqEiTy3cx" target="_blank" rel="noopener noreferrer">2015</a>, <a href="https://www.youtube.com/watch?v=tWuUI1-IBZ8" target="_blank" rel="noopener noreferrer">2016</a>, <a href="https://www.youtube.com/watch?v=AGhqUWLgGeM" target="_blank" rel="noopener noreferrer">20</a><a href="https://www.youtube.com/watch?v=wCT5MtY9xtw" target="_blank" rel="noopener noreferrer">17</a>).
            </p>
            <p>
              In my free time, I love reading just about any book I can get my hands on (but especially Harry Potter) and watching movies,
              both Bollywood and Hollywood and TV shows. Some of my favorites include the Marvel Cinematic Universe (Team Iron Man!),
              Zootopia, and Sherlock. I also like watching tennis (#RafaNadal) and YouTube tech reviewers.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default AboutPage;
