import React from 'react';

const Project = ({ details }) => {
  return (
    <div className="card h-100 project-card">
      <a target="_blank" href={details.link}>
        <img className="card-img-top" alt="Streamy" src={details.image} />
      </a>
      <div className="card-body project-body">
        <h5 className="project-name">{details.projectName}</h5>
        <div className="tags">
          {details.tags.map((tag) => <span className="badge badge-danger px-2 py-2 mx-1 my-1" key={tag}>{tag}</span>)}
        </div>
        <p className="card-text">
          {details.desc}
        </p>
      </div>
    </div>
  )
}

export default Project;