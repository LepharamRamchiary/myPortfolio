import React from 'react'

import "./WorkCardStyle.css"
import { NavLink } from 'react-router-dom'

const WorkCard = (props) => {
    return (
        <div className='project-card'>
            <img src={props.imgsrc} alt='project_image' />
            <h2 className='project-title'>{props.title}</h2>
            <div className='project-details'>
                <p>{props.text}</p>
                <div className='pro-btns'>
                    <NavLink to={props.view} className="btn" target="_blank" rel="noopene noreferrer">View</NavLink>
                    <NavLink to={props.source} className="btn" target="_blank" rel="noopene noreferrer">Source</NavLink>
                </div>
            </div>
        </div>
    )
}

export default WorkCard