import React from 'react';
import { Link } from 'react-router-dom';

const Show = () => {
  return (
    <div style={{backgroundColor:"#1a1f2c "}}>
       <div className=" container  p-5 text-center " style={{width:"100%",direction:"rtl",minHeight:"100%" , }}>
      <div className=" mb-1 d-flex  align-items-center  " style={{width:"100%",justifyContent:"space-between"}}>
        <h1 className="text-3xl font-bold text-light  ">  المرئيات</h1>
        <Link to="/showall" className="btn  btn-primary ">عرض المزيد</Link>
      </div>
      
      {/* فيديو YouTube */}
      <div className="relat ive w-full max-w-5xl aspect-video shadow-lg rounded-md overflow-hidden">
        <iframe style={{height:"60vh",width:"100%"}}
          className="" 
          src="https://www.youtube.com/embed/K404uV9xvH8?autoplay=1&mute=1&loop=1&controls=1&showinfo=0&modestbranding=1&rel=0" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
    </div>
    </div>
  );
};

export default Show;