// Coursework Photo by Nathan Dumlao on Unsplash
// Lists Photo by rawpixel on Unsplash
import React from 'react';
import PageTitle from '../common/PageTitle';

const ListsPage = () => {
  return (
    <div>
    {/* <PageTitle titleId="listsHeader" titleText="Lists"/>
    <section className="container top-pad"> */}
      {/* <div className="columns is-centered">
        <h1 className="column is-12-mobile is-8-tablet is-8-desktop"><span>About Me</span></h1>
      </div> */}
      {/* <div className="columns is-centered">
        <div className="column is-12-mobile is-8-tablet is-8-desktop">
          <div className="text">
            <p style={{paddingTop:'0'}}>
              I have lots of lists of my favorite things, from books to movies, classes, and more. I have compiled some of the best of these here on this page as a quick reference to myself as well as anyone else who is interested.
            </p>
          </div>
        </div>
      </div>
    </section> */}
    <PageTitle titleId="courseworkHeader" titleText="Coursework"/>
    <section className="container top-pad">
      <div className="columns is-centered">
        <div className="column is-12-mobile is-8-tablet is-8-desktop">
          <div className="text">
            {/* <h2><span>Coursework</span></h2> */}
            <h4>Fall 2018</h4>
            <ul>
              <li>6.002 - Circuits and Electronics </li>
              <li>6.003 - Signals and Systems</li>
              <li>18.701 - Algebra I</li>
              <li>6.828 - Operating System Engineering</li>
              <li>6.854 - Advanced Algorithms</li>
            </ul>
            <h4>Spring 2018</h4>
            <ul>
              <li>18.03 - Differential Equations</li>
              <li>8.02 - Physics II</li>
              <li>14.01 - Introduction to Microeconomics</li>
              <li>6.041 - Introduction to Probability</li>
              <li>6.046 - Design and Analysis of Algorithms</li>
              <li>6.004 - Computation Structures</li>
            </ul>
            <h4>IAP 2018</h4>
            <ul>
              <li>6.117 - Introduction to Electrical Engineering Lab Skills</li>
              <li>6.147 - The Battlecode Programming Competition</li>
              <li>18.02 - Multivariable Calculus (ASE)</li>
            </ul>
            <h4>Fall 2017</h4>
            <ul>
              <li>7.012 - Introductory Biology</li>
              <li>5.111 - Principles of Chemical Science</li>
              <li>21M.030 - Introduction to World Music</li>
              <li>6.02 - Introduction to EECS via Communication Networks</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* <PageTitle titleId="courseworkHeader" titleText="Books"/> */}
    {/* <section className="container">
      <div className="columns is-centered">
        <div className="column is-12-mobile is-8-tablet is-8-desktop">
          <div className="text">
            <h2><span>Books</span></h2>
            <p>See a more complete listing on <a href="https://www.goodreads.com/review/list/80899990-rahul-yesantharao?shelf=read" target="_blank" rel="noopener noreferrer">my goodreads bookshelf</a>. I have included some of my favorite books below.</p>
            <h4>Fiction (Novels)</h4>
            <ul>
              <li><a href="https://en.wikipedia.org/wiki/The_Great_Gatsby" target="_blank" rel="noopener noreferrer">The Great Gatsby</a>&nbsp;(F. Scott Fitzgerald)</li>
              <li><a href="https://en.wikipedia.org/wiki/Les_Mis%C3%A9rables" target="_blank" rel="noopener noreferrer">Les Misérables</a>&nbsp;(Victor Hugo)</li>
              <li><a href="https://en.wikipedia.org/wiki/A_Tale_of_Two_Cities" target="_blank" rel="noopener noreferrer">A Tale of Two Cities</a>&nbsp;(Charles Dickens)</li>
            </ul>
            <h4>Fantasy (Series)</h4>
            <ul>
              <li><a href="https://www.pottermore.com/" target="_blank" rel="noopener noreferrer">Harry Potter</a>&nbsp;(J.K. Rowling)</li>
              <li><a href="https://www.patrickrothfuss.com/content/books.asp" target="_blank" rel="noopener noreferrer">The Kingkiller Chronicle</a>&nbsp;(Patrick Rothfuss)</li>
              <li><a href="https://brandonsanderson.com/books/the-stormlight-archive/" target="_blank" rel="noopener noreferrer">The Stormlight Archive</a>&nbsp;(Brandon Sanderson)</li>
              <li><a href="http://www.alagaesia.com/books.php" target="_blank" rel="noopener noreferrer">The Inheritance Cycle</a>&nbsp;(Christopher Paolini)</li>
            </ul>
            <h4>Computers</h4>
            <ul>
              <li><a href="https://www.mhprofessional.com/9780072228977-usa-c-from-the-ground-up-third-edition" target="_blank" rel="noopener noreferrer">C++ From the Ground Up</a>&nbsp;(Herbert Schildt)</li>
              <li><a href="https://dataintensive.net/" target="_blank" rel="noopener noreferrer">Designing Data-Intensive Applications</a>&nbsp;(Martin Kleppmann)</li>
              <li><a href="https://mitpress.mit.edu/books/introduction-algorithms-third-edition" target="_blank" rel="noopener noreferrer">Introduction to Algorithms</a>&nbsp;(Cormen, Leiserson, Rivest, Stein)</li>
            </ul>
          </div>
        </div>
      </div>
    </section> */}
    </div>
  )
}

export default ListsPage;
