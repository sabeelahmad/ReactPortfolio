import React, {useState, useEffect} from 'react';

const Navigation = () => {
  const [scroll, setScroll] = useState("transparent")

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 200 ? 'transparent' : '#2CA58D';
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    })
  })

  return (
    <nav className="navbar navbar-expand-md navbar-dark" style={{ width: '100vw', backgroundColor: scroll }}>
      <div className="container">
        <a className="navbar-brand navbar-text" href="#hero">Sabeel Ahmad</a>
        <button className="navbar-toggler toggle-btn mr-sm-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link navbar-text mr-lg-2" href="#hero">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link navbar-text mr-lg-2" href="#skills">Skills <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link navbar-text mr-lg-2" href="#journey">My Journey <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link navbar-text mr-lg-2" href="#projects">Projects <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link navbar-text mr-lg-2" href="#contact">Contact Me <span className="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;