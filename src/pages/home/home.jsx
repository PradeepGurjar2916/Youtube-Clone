import React, { useState } from 'react'
import './home.css'
import Sidebar from '../../components/sidebar/sidebar.jsx'
import Feed from '../../components/feed/feed.jsx'

const Home = ({sidebar}) => {

  const [category,setcategory] = useState(0);

  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setcategory={setcategory}/>
      <div className={`container ${sidebar?"":"large-container"}`}>
      <Feed category={category}/>
      </div>
    </>
  )
}

export default Home
