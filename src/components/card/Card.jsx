import React from 'react'
import "./Card.css"

export default function Card(props) {
  return (
    <div className='card'>
        <img src={props.surati} alt="" />
        <h2>{props.saxeli} {props.gvari}, {props.asaki}</h2>
        <h3>Course: {props.kursi}</h3>
        <h3>Attendance: {props.daswvreba}%</h3>
        <h4>Scholarship: {props.stipendia}</h4>
    </div>
  )
}
