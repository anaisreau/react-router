import React from'react'
import {Link} from 'react-router-dom'

const Home =() => {

return (
  
    <>
    <ul>
        <li><Link to ='/'>Home</Link></li>
        <li><Link to ='/Html'>Html</Link></li>
        <li><Link to ='/Css'>Css</Link></li>
        <li><Link to ='/Javascript'>Javascript</Link></li>
    </ul>
   </>
)};

export default Home 