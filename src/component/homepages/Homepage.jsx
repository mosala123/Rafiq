import React, { useEffect, useState } from 'react';
import "./Homepage.css";
import Remembrances from '../remembrances/Remembrances';
import DayOf from '../dayof/DayOf';
import Show from '../show/Show';

const Homepage = () => {
    const [time, settime] = useState(null);

    useEffect(() => {
        fetch("https://api.aladhan.com/v1/timingsByCity/15-04-2023?city=cairo&country=egypt&method=8")
            .then((res) => res.json())
            .then((data) => settime(data.data.timings)); // استخراج المواقيت فقط
    }, []);

    if (!time) {
        return (
            <div className="text-center mt-5" style={{paddingTop:"100px "}}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">جاري التحميل...</span>
                </div>
                <h2>انتظر يتم تحميل مواقيت الصلاة</h2>
            </div>
        );
    }

    return (
         <>
         
         <div className='Homepage pb-5 px-3 topnav px-3' style={{display:"flex" ,justifyContent:"space-between",paddingTop:"100px"}}>
            <div className='container py-5 ' style={{ direction: "rtl" }}>
                <div className="row ">
                    <div className="col-lg-6 col-md-12 col-sm-12 mt-2">
                        <p className='fs-4 text-light'>
                            رفيقك في كل وقت <br /> <br />
                            <span className='text-warning fs-1 fw-bold '>
                                قال تعالى <br />
                                "وَقُل رَّبِّ أَدْخِلْنِي مُدْخَلَ صِدْقٍ وَأَخْرِجْنِي مُخْرَجَ صِدْقٍ وَاجْعَل لِّي مِن لَّدُنكَ سُلْطَانًا نَّصِيرًا" 
                                
                                 [الإسراء: 80] 
                            </span><br /> <br />
                            رفيقك اليومي الذي يذكّرك بالأذكار، يعينك على الصلاة، ويأخذ بيدك للسير على نهج النبي ﷺ.
                        </p>
                    </div>


                    
                    <div className="col-lg-6 col-md-12 col-sm-12 text-center Homepageleft mt-2">
                        <div className='p-0 m-0'>
                            <h1 style={{ background: "#004d40", color: "white", borderRadius: "5px", margin: "20px 10px", padding: "10px 0" }}>
                                مواقيت الصلاة 
                                (مصر )
                            </h1>
                            
                            <div className="d-flex align-items-center justify-content-between p-2">
                                <p>الفجر</p>
                                <p>{time.Fajr} ص</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between p-2">
                                <p>الظهر </p>
                                <p>{time.Dhuhr} ص</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between p-2">
                                <p>العصر</p>
                                <p>{time.Asr} ص</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between p-2">
                                <p>المغرب</p>
                                <p>{time.Maghrib} م</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between p-2">
                                <p>العشاء</p>
                                <p>{time.Isha} م</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <DayOf />
        <Remembrances />
        <Show /> 
         </>
    );
};

export default Homepage;
