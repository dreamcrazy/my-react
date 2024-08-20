import React from 'react'
import { useParams } from 'react-router-dom'

export default function Info() {
    const params = useParams()
    console.log(params);
    
  return (
    <div>
      123
    </div>
  )
}
