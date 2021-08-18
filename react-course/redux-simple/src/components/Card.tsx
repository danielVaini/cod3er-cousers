import React from 'react'
import './Card.css'

interface CardProps {
  headerColor?: string,
  headerBg?: string,
  contenBg?: string,
  children?: React.ReactNode,
  title: string

}

export default function Card({...props}:CardProps) {
  return (
    <div className="Card">
      <div className="Header" style={{backgroundColor: props.headerBg}}>
        <span className="Title" style={{color: props.headerColor || "white"}}>{props.title}</span>
      </div>
      <div className="Content" style={{backgroundColor: props.contenBg}}>
        {props.children}
      </div>
    </div>  
  )
}