import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Evening = () => {
  const [azkar, setAzkar] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json"
    )
      .then((res) => res.json())
      .then((data) => setAzkar(data["أذكار المساء"]))
      .catch((error) => console.error("حدث خطأ:", error));
  }, []);

  return (
    <div
      className="Evening  "
      style={{
        direction: "rtl",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", 
        backgroundColor:"#1a1f2c" ,
        fontFamily: "Tajawal, sans-serif",
        paddingTop:"100px"
      }}
    >

 <div className="py-4 " style={{position:"absolute",right:"10px ",position:"fixed",zIndex:99}}>
 <button onClick={() => navigate(-1)} className="btn btn-dark   ">
      <FaArrowRight className="fs-4" />  
    </button>
 </div>



      <h1
        className="text-center text-light  mt-3 text-white   py-2 px-4" 
        style={{ fontSize: "1.5rem", borderRadius: "8px" }} 
      >
       ليالٍ تزدان بذكر الرحمن
      </h1>
      <div className="container text-center" style={{ maxWidth: "1200px" }}> 
        <div className="row mt-3 justify-content-center"> 
          {azkar.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-3 d-flex justify-content-center"> 
              <div
                className=" card py-4 px-3 text-white"
                style={{
                  backgroundColor: "#004d40",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  width: "100%",
                  maxWidth: "400px",  
                }}
              >
                <p className="text-warning " style={{fontSize:"19px ", }}>{item.content}</p>
                <p className="fst-italic">{item.description}</p>
                <div
                                    className="p-2 mt-3 text-light"
                                    style={{
                                        backgroundColor: "#777",
                                        borderRadius: "4px",
                                        fontSize: "14px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    التكرار :  {item.count || "غير محدد"} مرات
                                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Evening;