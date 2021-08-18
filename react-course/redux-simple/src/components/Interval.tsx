import './Interval.css';
import React from 'react'
import Card from './Card';

export default function Interval() {
  return (
    <Card title="Interval of Numbers" headerBg="#c62828" contenBg="#f44336">
      <div className="Interval">

        <span>
          <strong>Minimun: </strong>
          <input type="number" value={0} readOnly />
        </span>
        <span>
          <strong>Maximun: </strong>
          <input type="number" value={10} readOnly />
        </span>
      </div>
    </Card>
  )
}