import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ShowAllVideos = () => {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://mp3quran.net/api/v3/videos")  
      .then((res) => res.json())
      .then((data) => {
        if (data.videos) {
          const allVideos = data.videos.flatMap((reciter) =>
            reciter.videos.map((video) => ({
              ...video,
              reciter_name: reciter.reciter_name,  
            }))
          );
          setVideos(allVideos);
        }
      })
      .catch((err) => console.error("Error fetching videos:", err));
  }, []);

  if (videos.length === 0) {
    return  <div className="text-center mt-5 mb-4">
    <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">جاري التحميل...</span>
    </div>
</div>;
  }

  return (
    <div className="  px-2 pb-5" style={{ direction: "rtl" ,backgroundColor:"#1a1f2c",paddingTop:"100px"}}>


 <div className="py-4 " style={{position:"absolute",right:"10px ",position:"fixed",zIndex:"99"}}>
 <button onClick={() => navigate(-1)} className="btn btn-dark   ">
      <FaArrowRight className="fs-4" />  
    </button>
 </div>

      <div className="container">
      <h2 className="text-center text-warning  mb-5 mt-2" style={{fontFamily:"-moz-initial"}}>
          ﴿ وَرَتِّلِ ٱلۡقُرۡءَانَ تَرۡتِيلًا ﴾
        </h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 px-3">
          {videos.map((vid) => (
            <div className="col" key={vid.id}>
              <a
                href={vid.video_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="card shadow-sm border-0">
                  <img
                  style={{height:"300px"}}
                    src={vid.video_thumb_url}
                    alt="Video Thumbnail"
                    className="card-img-top"
                  />
                  <div className="card-body text-center">
                    <h5 className="text-primary">    <span className="text-danger">القارئ : </span>   {vid.reciter_name}</h5>  
                    <h6 className="text-secondary">مشاهدة الفيديو</h6>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowAllVideos;
