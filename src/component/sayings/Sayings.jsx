import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Sayings = () => {
    const [saying, setSaying] = useState([]);  
    const navigate = useNavigate();
    useEffect(() => {
        fetch("https://hadis-api-id.vercel.app/hadith/abu-dawud?page=2&limit=300")
            .then((res) => res.json())
            .then((data) => setSaying(data.items))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    if (saying.length === 0) {
        return (
            <div className="text-center mt-5 mb-5" style={{paddingTop:"100px "}}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">جاري التحميل...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="Sayings pb-5 " style={{backgroundColor:"#1a1f2c",direction:"rtl",paddingTop:"100px"}}>

 <div className="py-4  " style={{ right:"10px ",position:"fixed"}}>
 <button onClick={() => navigate(-1)} className="btn btn-dark   ">
      <FaArrowRight className="fs-4" />  
    </button>
 </div>

 <h1 className="text-center text-light py-4 pt-5" style={{ fontFamily: "cursive" }}>
  قال رسول الله  ﷺ  :  <br />    
  <span style={{ color: "#FFD700" }}>  
    " تركتُ فيكم ما إن تمسّكتم به لن تضلوا بعدي، كتاب الله وسنتي "    
  </span>  
  <br />  
  <span className="d-block mt-2">صدق رسول الله ﷺ  ، اللهم صلِّ وسلم عليه</span>
</h1>



        <div className="container">
          <div className="row mt-4  p-3">
            {saying.map((pro) => (
              <div key={pro.number} className="col-lg-4 col-md-6 mb-4">
                <div className="card shadow-lg p-3 h-100 d-flex flex-column"  style={{backgroundColor:"#004d40"}}>
                  <div className="card-body flex-grow-1">
                    <h5 className="card-title text-light"  style={{direction:"rtl"}}>📖 حديث رقم {pro.number}</h5>
                    <p className="card-text text-warning "  style={{direction:"rtl"}}>{pro.arab.slice(0, 100)}...</p>
                    <p className="card-text text-warning    "  style={{direction:"ltr"}}>{pro.id.slice(0, 100)}...</p>
                  </div>
                  <div className="card-footer text-center   border-0">
                    <Link to={`/sayingdetails/${pro.number}`} className="p-2 mt-3 text-light"   style={{
                                        backgroundColor: "#777",
                                        borderRadius: "4px",
                                        fontSize: "14px",
                                        fontWeight: "bold",
                                        textDecoration:"none"
                                    }}  >
                      التفاصيل
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    );
};

export default Sayings;
