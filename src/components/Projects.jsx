import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import MorseConverter from './MorseConverter';

function Projects() {
  const location = useLocation();
  const path = location.pathname;

  let content;

  if (path === '/Projects') {
    content = (
      <>
        <div className='main'>
          <h1 className='name'>Projects</h1>
        </div>
        <hr />
        <div className='body'>
          <Link to='/Projects/morse-converter' className='bodyContent bodyLink'>
            morse converter
          </Link>
          <p>-</p>
          <Link to='#' className='bodyContent bodyLink'>
            something else
          </Link>
          <p>-</p>
        </div>
        <hr />
      </>
    );
  } else if (path === '/Projects/morse-converter') {
    content = (
      <>
        <div className='main'>
          <h1 className='name'>Morse Converter</h1>
        </div>
        <hr />
        <div className='body'>
          <MorseConverter />
        </div>
        <hr />
      </>
    );
  } else {
    content = <p>Page not found</p>;
  }

  return <div className='App'>{content}</div>;
}

export default Projects;
