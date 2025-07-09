import React, { useEffect, useState } from 'react'
import './feed_search.css'
import {Link} from 'react-router-dom'
import { API_KEY4, value_converter } from '../../data.js'
import moment from 'moment'

const Feed_search = ({string_searched}) => {

      const [data,setdata] = useState([]);

      const fetchdata = async () =>{
            const videolist_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=40&order=relevance&q=${string_searched}&type=video&regionCode=IN&key=${API_KEY4}`;
            await fetch(videolist_url)
            .then(response => response.json())
            .then(data=>setdata(data.items))
      }

      useEffect(()=>{
         fetchdata(); 
      },[string_searched])

  return (
      <div className="feed">
            {data.map((item,index)=>{
                 return(
                  <a key={index} href={`http://localhost:5173/video/0/${item.id.videoId}`} className='card'>
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <h2>{item.snippet.title}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                        <p>{moment(item.snippet.publishedAt).fromNow()}</p>
                  </a>
                 )
            })}
      </div>
  )
}

export default Feed_search
