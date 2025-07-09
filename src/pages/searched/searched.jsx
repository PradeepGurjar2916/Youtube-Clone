import React from 'react'
import './searched.css'
import Sidebar from '../../components/sidebar/sidebar.jsx'
import { useParams } from 'react-router-dom'
import Feed_search from '../../components/feed_search/feed_search.jsx'
import { useState } from 'react'

const Searched = ({sidebar}) => {
  
  const {string_searched} = useParams();
  const [category,setcategory] = useState(0);

  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setcategory={setcategory}/>
      <div className={`container ${sidebar?"":"large-container"}`}>
        <h1>Results for {string_searched}</h1>
        <Feed_search string_searched={string_searched}/>
      </div>
    </>
  )
}

export default Searched;
