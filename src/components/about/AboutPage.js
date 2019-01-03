//Photo by Kevin Hernandez on Unsplash
import React from 'react';
import {HashLink} from 'react-router-hash-link';
import PageTitle from '../common/PageTitle';

const AboutPage = () => {
  return (
    <div>
    <PageTitle titleId="aboutHeader" titleText="About Me"/>
    <section className="container top-pad">
      {/* <div className="columns is-centered">
        <h1 className="column is-12-mobile is-8-tablet is-8-desktop"><span>About Me</span></h1>
      </div> */}
      <div className="columns is-centered">
        <div className="column is-10-mobile is-offset-1-mobile is-5-tablet is-3-desktop">
          <img src={require('../../images/portrait_filtered.jpg')} style={{'border':'4px solid #2b669b'}}/>
        </div>
        <div className="column is-12-mobile is-8-tablet is-8-desktop">
          <div className="text">
            <p style={{paddingTop:'0'}}>
              Hi! I&rsquo;m Rahul. I am a developer, aspiring engineer, and (amateur) musician.
              I am passionate about anything and everything relating to technology.
            </p>
            <p>
              I am a freshman at the Massachusetts Institute of Technology, studying Course 6-2 (Electrical Engineering and Computer Science). Check out my <HashLink exact to="/coursework">coursework</HashLink> page! In my free time, I direct DevOps for <a href="https://hackmit.org/" target="_blank" rel="noopener noreferrer">HackMIT</a> and help run the <a href="http://ieeeacm.mit.edu/" target="_blank" rel="noopener noreferrer">MIT IEEE/ACM</a> student chapter.
            </p>
            <p>
              Over the 2018 summer, I worked as a Software Engineering Intern on the Infrastructure team at <a href="https://www.quora.com/" target="_blank" rel="noopener noreferrer">Quora</a>!
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
              both Bollywood and Hollywood. Some of my favorites include the Marvel Cinematic Universe (Team Iron Man!),
              Zootopia, and Sherlock. I also enjoy watching tennis (Rafa!) and YouTube tech reviewers.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default AboutPage;
