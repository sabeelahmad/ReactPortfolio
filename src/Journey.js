import React from 'react';

const Journey = () => {
  return (
    <section className="journey" id="journey">
      <div className="text-center pt-5 journey-header">
        My Journey
      </div>
      <div className="container mt-5">
        
        <div className="row align-items-center connecting-lines d-flex">
          <div className="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
            <div className="circle font-weight-bold"><i className="fas fa-school"></i></div>
          </div>
          <div className="col-6">
            <h4 className="timeline-header">Schooling (2004 - 2016)</h4>
            <p className="timeline-details">
              I did my schooling from Tyndale Biscoe School, Srinagar and graduated with 7th rank in the state in my class XII Board Exams.
            </p>
          </div>
        </div>
        
        <div className="row timeline">
          <div className="col-2">
            <div className="corner top-right"></div>
          </div>
          <div className="col-8">
            <hr/>
          </div>
          <div className="col-2">
            <div className="corner left-bottom"></div>
          </div>
        </div>
        
        <div className="row align-items-center justify-content-end connecting-lines d-flex">
          <div className="col-6 text-right">
            <h4 className="timeline-header">Undergraduation Studies (2017 - Present)</h4>
            <p className="timeline-details">I am currently pursuing B.E in Computer Engineering from Netaji Subhas University of Technology (formerly NSIT). My CGPA till 5 semesters is 8.625.</p>
          </div>
          <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
            <div className="circle font-weight-bold"><i className="fas fa-university"></i></div>
          </div>
        </div>
       
        <div className="row timeline">
          <div className="col-2">
            <div className="corner right-bottom"></div>
          </div>
          <div className="col-8">
            <hr/>
          </div>
          <div className="col-2">
            <div className="corner top-left"></div>
          </div>
        </div>

        <div className="row align-items-center connecting-lines d-flex">
          <div className="col-2 text-center left-full d-inline-flex justify-content-center align-items-center">
            <div className="circle font-weight-bold"><i className="fa fa-chalkboard-teacher"></i></div>
          </div>
          <div className="col-6">
            <h4 className="timeline-header">DSA Teaching Assistant @ Coding Ninjas (2018 JUN - 2018 OCT)</h4>
            <p className="timeline-details">
              I bagged my first internship as a TA for the C++ DSA online course of Coding Ninjas. I successfully solved over 400 doubts related to topics like recursion, DP, graphs. I also secured an average rating of 4.3 / 5.
            </p>
          </div>
        </div>
      
        <div className="row timeline">
          <div className="col-2">
            <div className="corner top-right"></div>
          </div>
          <div className="col-8">
            <hr/>
          </div>
          <div className="col-2">
            <div className="corner left-bottom"></div>
          </div>
        </div>

        <div className="row align-items-center justify-content-end connecting-lines d-flex">
          <div className="col-6 text-right">
            <h4 className="timeline-header">Frontend Developer @ The Healthy Company (NOV 2018 - FEB 2019)</h4>
            <p className="timeline-details">
              My first proper job as a software developer, I worked on the frontend for the ecommerce site for THC. I implemented Google's Accelereated Mobile Pages (AMP) project in order to decrease loading times and allow for a better user experience.
              Also, AJAX calls were implemented on various pages in order to avoid unnecessary refreshes, hence providing better User Experience.
            </p>
          </div>
          <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
            <div className="circle font-weight-bold"><i className="fas fa-laptop-code"></i></div>
          </div>
        </div>

        <div className="row timeline">
          <div className="col-2">
            <div className="corner right-bottom"></div>
          </div>
          <div className="col-8">
            <hr/>
          </div>
          <div className="col-2">
            <div className="corner top-left"></div>
          </div>
        </div>

        <div className="row align-items-center connecting-lines d-flex">
          <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
            <div className="circle font-weight-bold"><i className="fa fa-check"></i></div>
          </div>
          <div className="col-6">
            <h4 className="timeline-header">SDE Summer Intern @ Duetsche Telekom Digital Labs (JUL 2020 - AUG 2020)</h4>
            <p className="timeline-details">
              I worked as a summer intern at DTDL and implemented a project for automating ageing of their pending issues in JIRA. A dedicated Rule Based UI was built for this purpose along with a backend using Node JS. The team also implemented a slack bot that notified of ageing in tickets. I also bagged a PPO from them and will be joining as a full time employee in 2021.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Journey;