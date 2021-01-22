import React from 'react';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="text-center pt-5 skills-header">
        My Skills
      </div>
      <div className="container" style={{ marginTop: '2em' }}>
        <div className="row text-center">
          <div className="col-md-3 col-sm-3">
            <div className="row">
              <div className="col-sm-12">
                <i className="fab fa-node skill-icon" style={{ color: '#2CA58D', fontSize: '90px' }}></i>
              </div>
              <div className="col-sm-12">
                <div className="progress mt-4">
                  <div className="progress-bar bg-success skill-progress" role="progressbar" style={{ width: '70%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="skill-name">Node JS</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-4">
            <div className="row">
              <div className="col-sm-12">
                <i className="fab fa-react skill-icon" style={{ color: '#2CA58D', fontSize: '90px' }}></i>
              </div>
              <div className="col-sm-12">
                <div className="progress mt-4">
                  <div className="progress-bar bg-success skill-progress" role="progressbar" style={{ width: '50%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="skill-name">React JS</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-4">
            <div className="row">
              <div className="col-sm-12">
                <i className="fab fa-bootstrap skill-icon" style={{ color: '#2CA58D', fontSize: '90px' }}></i>
              </div>
              <div className="col-sm-12">
                <div className="progress mt-4">
                  <div className="progress-bar bg-success skill-progress" role="progressbar" style={{ width: '90%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="skill-name">Bootstrap 4</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-4">
            <div className="row">
              <div className="col-sm-12">
                <i className="fab fa-python skill-icon" style={{ color: '#2CA58D', fontSize: '90px' }}></i>
              </div>
              <div className="col-sm-12">
                <div className="progress mt-4">
                  <div className="progress-bar bg-success skill-progress" role="progressbar" style={{ width: '60%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="skill-name">Python 3.x</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row text-center" style={{ marginTop: '4em' }}>
          <div className="col-md-3 col-sm-3">
            <div className="row">
              <div className="col-sm-12">
                <i className="fab fa-html5 skill-icon" style={{ color: '#2CA58D', fontSize: '90px' }}></i>
              </div>
              <div className="col-sm-12">
                <div className="progress mt-4">
                  <div className="progress-bar bg-success skill-progress" role="progressbar" style={{ width: '95%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="skill-name">HTML 5</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-4">
            <div className="row">
              <div className="col-sm-12">
                <i className="fab fa-css3-alt skill-icon" style={{ color: '#2CA58D', fontSize: '90px' }}></i>
              </div>
              <div className="col-sm-12">
                <div className="progress mt-4">
                  <div className="progress-bar bg-success skill-progress" role="progressbar" style={{ width: '75%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="skill-name">CSS 3</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-4">
            <div className="row">
              <div className="col-sm-12">
                <i className="fas fa-database skill-icon" style={{ color: '#2CA58D', fontSize: '90px' }}></i>
              </div>
              <div className="col-sm-12">
                <div className="progress mt-4">
                  <div className="progress-bar bg-success skill-progress" role="progressbar" style={{ width: '60%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="skill-name">MongoDB, My SQL</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-4">
            <div className="row">
              <div className="col-sm-12">
                <i className="fab fa-js skill-icon" style={{ color: '#2CA58D', fontSize: '90px' }}></i>
              </div>
              <div className="col-sm-12">
                <div className="progress mt-4">
                  <div className="progress-bar bg-success skill-progress" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="skill-name">ES6 JS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row text-center" style={{ marginTop: '4em' }}>
          <div className="col-md-3 col-sm-3">
            <div className="row">
              <div className="col-sm-12">
                <i className="fab fa-git-alt skill-icon" style={{ color: '#2CA58D', fontSize: '90px' }}></i>
              </div>
              <div className="col-sm-12">
                <div className="progress mt-4">
                  <div className="progress-bar bg-success skill-progress" role="progressbar" style={{ width: '90%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="skill-name">Git</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-4">
            <div className="row">
              <div className="col-sm-12">
                <i className="fab fa-github skill-icon" style={{ color: '#2CA58D', fontSize: '90px' }}></i>
              </div>
              <div className="col-sm-12">
                <div className="progress mt-4">
                  <div className="progress-bar bg-success skill-progress" role="progressbar" style={{ width: '100%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="skill-name">Github</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-4">
            <div className="row">
              <div className="col-sm-12">
                <i className="fab fa-jira skill-icon" style={{ color: '#2CA58D', fontSize: '90px' }}></i>
              </div>
              <div className="col-sm-12">
                <div className="progress mt-4">
                  <div className="progress-bar bg-success skill-progress" role="progressbar" style={{ width: '60%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="skill-name">Jira</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-4">
            <div className="row">
              <div className="col-sm-12">
                <i className="fas fa-server skill-icon" style={{ color: '#2CA58D', fontSize: '90px' }}></i>
              </div>
              <div className="col-sm-12">
                <div className="progress mt-4">
                  <div className="progress-bar bg-success skill-progress" role="progressbar" style={{ width: '90%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="skill-name">Rest APIs</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills;