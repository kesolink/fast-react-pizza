import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function LinkButton({children, to}) {
    const className ="text-sm text-blue-500 hover:text-blue-600"
    const navigate = useNavigate();
    if(to === "-1")return (<button onClick={() => navigate(-1)}>{children}</button>)
  return (
    <Link to="/menu"  className={className}>{children}</Link>
  )
}

export default LinkButton