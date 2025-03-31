import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Reading = () => {
  const [reciter, setReciter] = useState(null);  
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://alquran.vip/APIs/reciterAudio?reciter_id=92")
      .then((res) => res.json())
      .then((data) => setReciter(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // عرض مؤشر تحميل أثناء جلب البيانات
  if (!reciter) {
    return (
      <div className="text-center mt-5 mb-4" style={{paddingTop:"100px "}}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">جاري التحميل...</span>
        </div>
      </div>
    );
  }

  return (
     <div style={{backgroundColor:"#1a1f2c",fontFamily:"-moz-initial",direction:"rtl",paddingTop:"100px"}} >
       <div className="py-4 " style={{ right:"10px ",position:"fixed",zIndex:"99"}}>
       <button onClick={() => navigate(-1)} className="btn btn-dark   ">
            <FaArrowRight className="fs-4" />  
          </button>
       </div>
        <div className="container py-5 px-4">
      <h2 className="text-center text-warning  mb-4"  >تلاوات  الشيخ  {reciter.reciter_name}</h2>
      <div className="mt-3 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {reciter.audio_urls.map((surah) => (
          <div   className="col" key={surah.surah_id}>
            <div className="card shadow-sm border-0 p-3 text-center" style={{backgroundColor:"#004d40"}}>
              <h5 className="text-light">{surah.surah_name_ar}</h5>
              <audio controls className="mt-2 w-100">
                <source src={surah.audio_url} type="audio/mpeg" />
                متصفحك لا يدعم تشغيل الصوت
              </audio>
            </div>
          </div>
        ))}
      </div>
    </div>
     </div>
  );
};

export default Reading;
