import React from 'react'
import "./Card.css"

export default function Card(props) {
  return (
    <div className='card'>
        <img src={props.surati} alt="" />
        <h2>{props.saxeli} {props.gvari}, {props.asaki}</h2>
        <h3>Course: {props.kursi}</h3>
        <h3> Attendens: {props.daswvreba}%</h3>
        <h4 className="scholarship" style={{ color: props.stipendia ? 'green' : 'red' }}>{props.stipendia ? 'With Scholarship' : 'Without Scholarship'}</h4>
        
    </div>
  )
}
