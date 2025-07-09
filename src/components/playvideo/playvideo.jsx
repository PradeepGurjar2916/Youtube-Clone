import React, { useEffect, useState } from 'react'
import './playvideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY1,API_KEY2, value_converter } from '../../data.js'
import moment from 'moment'
import { useParams } from 'react-router-dom'

const Playvideo = () => {
      const {videoId} = useParams();
      //for data of the video
      const [apidata,setapidata] = useState(null);
      // for data of the channel
      const [channeldata,setchanneldata] = useState(null);
      //for storing comments
      const [commentdata,setcommentdata] = useState([]);
      
      const fetchvideodata = async () =>{
            //fetching videos data
            const videodetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY1}`;
            await fetch(videodetails_url)
            .then(res=>res.json())
            .then(data=> setapidata(data.items[0]));
      }

      const fetchotherdata = async() =>{
            //fetching channel data
            const channeldata_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelId}&key=${API_KEY2}`;
            await fetch(channeldata_url)
            .then(res=>res.json())
            .then(data=>setchanneldata(data.items[0]));

            //fetching comment url
            const comment_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=45&videoId=${videoId}&key=${API_KEY1}`;
            await fetch(comment_url)
            .then(res=>res.json())
            .then(data=>setcommentdata(data.items));
      }

      useEffect(()=>{
        fetchvideodata();
      },[videoId]);

      useEffect(()=>{
        fetchotherdata();
      },[apidata]);

  return (
    <div className='play-video'>
       {/* <video src={video1} controls autoPlay muted></video> */}
       <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
       frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       <h3>{apidata?apidata.snippet.title:"title"}</h3>
       <div className='play-video-info'>
            <p>{apidata?value_converter(apidata.statistics.viewCount):"16k"} Views &bull; {apidata?moment(apidata.snippet.publishedAt).fromNow():""}</p>
            <div>
                <span><img src={like} alt="" /> {apidata?value_converter(apidata.statistics.likeCount):"155"}</span>  
                <span><img src={dislike} alt="" />0</span>  
                <span><img src={share} alt="" /> share</span>  
                <span><img src={save} alt="" /> save</span>  
            </div>
       </div>
       <hr />
       <div className="publisher">
            <img src={channeldata?channeldata.snippet.thumbnails.default.url:user_profile} alt="" />
            <div>
                  <p>{apidata?apidata.snippet.channelTitle:"Channel"}</p>
                  <span>{channeldata?value_converter(channeldata.statistics.subscriberCount):0} Subscribers</span>
            </div>
            <button>Subscribe</button>
       </div>
       <div className="vid-description">
            <p>{apidata?apidata.snippet.description.slice(0,250):"Decription"}</p>
            <hr />
            <h4>{apidata?value_converter(apidata.statistics.commentCount):102} Comments</h4>
            {commentdata.map((item,index)=>{
                  return(
                        <div key={index} className="comment">
                              <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                              <div>
                                    <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                                    <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                                    <div className="comment-action">
                                          <img src={like} alt="" />
                                          <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                          <img src={dislike} alt="" />
                                          <span>0</span>
                                    </div>
                              </div>
                        </div>
                  );
            })}
       </div>
    </div>
  )
}

export default Playvideo
