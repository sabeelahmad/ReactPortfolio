import React from 'react';
import Streamy from './images/streamy.jpeg';
import Project from './Project';
import Blog from './images/blog.jpeg'
import Expense from './images/expense.jpeg'

const data = [
  {
    projectName: 'Streamy - A minimal twitch clone',
    tags: ['React JS', 'Redux', 'RTMP', 'JSON Live Server'],
    image: Streamy,
    desc: 'Streamy is a minimal twitch clone that can be used to stream from OBS. A streamers live stream can be viewed as well.',
    link: 'https://github.com/sabeelahmad/React_Twitch_Clone'
  },
  {
    projectName: 'Blogit - A simple blog',
    tags: ['React JS', 'Redux', 'Bootstrap', 'Semantic UI'],
    image: Blog,
    desc: 'A simple blog made using React JS where a user could write a blog and view his blogs. The project had no data persistence.',
    link: 'https://github.com/sabeelahmad/blogit',
  },
  {
    projectName: 'Expense Manager',
    tags: ['React', 'React Hooks', 'Bootstrap'],
    image: Expense,
    desc: 'An expense manager created using React and React Hooks. A user could add expense with details of each expense as well, and later on edit them as well. The data was stored in the localStorage for persistence. Visualizations were also provided on monthly and daily expenses.',
    link: 'https://github.com/sabeelahmad/expense-manager'
  }
]

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="text-center pt-5 projects-header">
        Projects
      </div>
      <div className="container">
      <div className="row">
        <div className="col-md-4 mt-3 col-sm-12">
          <Project details={data[0]} />
        </div>
        <div className="col-md-4 mt-3 col-sm-12">
          <Project details={data[1]} />
        </div>
        <div className="col-md-4 mt-3 col-sm-12">
          <Project details={data[2]} />
        </div>
      </div>
      </div>
    </section>
  )
}

export default Projects;