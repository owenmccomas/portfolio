import './App.css'

function App() {

  return (
    <div className="App">
      <nav>
        <a className='navLink' href='#'>projects</a>
        <a className='navLink' href='#'>contact</a>
        <a className='navLink' href='#'>about</a>
      </nav>
      <div className='main'>
        <h1 className='name'>Owen McComas</h1>
      </div>
      <hr/>
      <div className='body'>
        <p className='bodyContent'>github</p><a className='bodyLink' href='https://github.com/owenmccomas'>owenmccomas</a><p>-</p>
        <p className='bodyContent'>linkedin</p><a className='bodyLink' href='https://www.linkedin.com/in/owenmccomas/'>owenmccomas</a><p>-</p>
        <p className='bodyContent'>onlyfans</p><a className='bodyLink' href='https://youtu.be/dQw4w9WgXcQ'>daddymachine</a>
        <br/><br/>
      </div>
      <hr/>
      <footer className='footer'>
      &#169;2023 owen mccomas
      </footer>
    </div>
  )
}

export default App
