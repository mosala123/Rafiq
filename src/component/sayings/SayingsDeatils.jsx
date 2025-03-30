import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SayingsDetails = () => {
  const { sayingId } = useParams();
  const [saying, setSaying] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://hadis-api-id.vercel.app/hadith/abu-dawud?page=2&limit=300")
      .then((res) => res.json())
      .then((data) => {
        const selectedSaying = data.items.find((item) => item.number.toString() === sayingId);
        setSaying(selectedSaying);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [sayingId]);

  if (!saying) {
    return (
      <div className="text-center mt-5" style={{paddingTop:"100px "}}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">جاري التحميل...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="  d-flex flex-column align-items-center pb-5  px-3" style={{ backgroundColor: "#1a1f2c", minHeight: "100vh",fontFamily: "Tajawal, sans-serif",paddingTop:"100px" }}>
      <div className="card shadow-lg  p-4 mt-5  text-center" style={{ maxWidth: "600px", width: "100%", borderRadius: "15px" ,backgroundColor:"#004d40"}} >
        <h1 className="mb-4 text-primary">  حديث رقم {saying.number}</h1>
        <p className="text-right text-light" style={{ direction: "rtl", fontSize: "19px",   }}>
          {saying.arab}
        </p>
        <p className="text-start  text-warning " style={{ direction: "ltr", fontSize: "16px" }}>
          {saying.id}
        </p>
        <button onClick={() => navigate(-1)} className=" p-2 mt-3 text-light" 
           style={{
            backgroundColor: "#777",
            borderRadius: "4px",
            fontSize: "17px",
            fontWeight: "bold",
            textDecoration:"none"
        }}>
          🔙 رجوع
        </button>
      </div>
    </div>
  );
};

export default SayingsDetails;
