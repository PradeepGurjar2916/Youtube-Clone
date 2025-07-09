import React from 'react'
import './sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'
import utube_premium from '../../assets/utube_premium.jpeg'
import utube_studio from '../../assets/utube_studio.jpeg'
import utube_music from '../../assets/utube_music.jpeg'
import utube_kids from '../../assets/utube_kids.jpeg'
import { API_KEY } from '../../data'
import { useEffect,useState } from 'react'

const Sidebar = ({sidebar,category,setcategory}) => {
      //to set list of subscriptions
      const [subscribed,setsubscribed] = useState([{url:jack,channel:"dusky tribe"},
            {url:simon,channel:"carry vlogs"},{url:tom,channel:"code aur chae"},
            {url:megan,channel:"Ninjas"},{url:cameron,channel:"Music Masti"}]);

      // const fetchdata = async () =>{
      //       const videolist_url = `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&channelId=UCm5XuLizI7rU--xzKJI7CuQ&key=${API_KEY}`;
      //       await fetch(videolist_url)
      //       .then(response => response.json())
      //       .then(data=>setsubscribed(data.items))
      // }

      // useEffect(()=>{
      //       fetchdata(); 
      //    },[])

  return (
//if sidebar is false then add a class small-sidebar  which is there to contract the sidebar 
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className="shortcut-links">
            <div className={`side-link ${category===0?"active":""}`} onClick={() => setcategory(0)}>
                  <img src={home} alt="" /><p>Home</p>
            </div>
            <div className={`side-link ${category===20?"active":""}`} onClick={() => setcategory(20)}>
                  <img src={game_icon} alt="" /><p>Gaming</p>
            </div>
            <div className={`side-link ${category===2?"active":""}`} onClick={() => setcategory(2)}>
                  <img src={automobiles} alt="" /><p>Automobiles</p>
            </div>
            <div className={`side-link ${category===17?"active":""}`} onClick={() => setcategory(17)}>
                  <img src={sports} alt="" /><p>Sports</p>
            </div>
            <div className={`side-link ${category===24?"active":""}`} onClick={() => setcategory(24)}>
                  <img src={entertainment} alt="" /><p>Entertainment</p>
            </div>
            <div className={`side-link ${category===28?"active":""}`} onClick={() => setcategory(28)}>
                  <img src={tech} alt="" /><p>Technology</p>
            </div>
            <div className={`side-link ${category===10?"active":""}`} onClick={() => setcategory(10)}>
                  <img src={music} alt="" /><p>Music</p>
            </div>
            <div className={`side-link ${category===22?"active":""}`} onClick={() => setcategory(22)}>
                  <img src={blogs} alt="" /><p>Blogs</p>
            </div>
            <div className={`side-link ${category===25?"active":""}`} onClick={() => setcategory(25)}>
                  <img src={news} alt="" /><p>News</p>
            </div>
            <hr />
      </div>
      <div className="subscribed-list">
            <h3>Subscribed</h3>
            {subscribed.map((item,index)=>{
                  return(
                        <div key={index} className="side-link">
                              <img src={item.url} alt="" /><p>{item.channel}</p>
                        </div>
                  );
            })}
            <hr />
      </div>
      <div className="more-from-utube">
            <div className={`side-link`}>
                  <img src={utube_premium} alt="" /><p>Utube Premium</p>
            </div>
            <div className={`side-link `}>
                  <img src={utube_music} alt="" /><p>Utube Studio</p>
            </div>
            <div className={`side-link`} >
                  <img src={utube_studio} alt="" /><p>Utube Kids</p>
            </div>
            <div className={`side-link `} >
                  <img src={utube_kids} alt="" /><p>Utube Music</p>
            </div>
            <hr />
      </div>
      <div className="other_things">
            
      </div>
    </div>
  )
}

export default Sidebar
