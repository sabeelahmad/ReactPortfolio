import React from 'react';
import Typing from 'react-typing-animation';
import MyResume from './MyResume.pdf';

class Hero extends React.Component {

  state = {
    showText: false
  }

  displayText = () => {
    this.setState(
      {showText: true}
    )
  }

  render() {
    return (
      <section className="hero" id="hero">
        <div className="parent-content">
          <div className="content">
            Sabeel Ahmad
          </div>
          <Typing onFinishedTyping={this.displayText}>
            <span className="details">Student</span>
            <Typing.Delay ms={500} />
            <Typing.Backspace count={7} />
            <span className="details">Web Developer</span>
            <Typing.Delay ms={500} />
            <Typing.Backspace count={17} />
            <span className="details">Machine Learning Enthusiast</span>
            <Typing.Backspace count={27} />
          </Typing>
          {this.state.showText ? <Typing><span className="details">Computer Engineer, Freelancer, Web Developer, ML Enthusiast</span></Typing>: null}
          <a href={MyResume} target="_blank" className="resume-btn btn btn-primary mt-5">
            View My Resume
          </a>
        </div>
      </section>
    )
  }
}

export default Hero;