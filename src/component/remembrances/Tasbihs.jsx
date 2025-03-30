import React, { useEffect, useState } from "react";
import { FaArrowRight, FaRedo, FaVolumeMute } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Tasbihs = () => {
    const [tasbihs, setTasbihs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    const [count, setCount] = useState(0);

    const handleIncrease = () => {
      setCount(count + 1);
    };
  
    const handleReset = () => {
      setCount(0);
    };
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("فشل في جلب البيانات");
                }
                return res.json();
            })
            .then((data) => {
                if (data && data["تسابيح"] && Array.isArray(data["تسابيح"])) {
                    setTasbihs(data["تسابيح"]);
                } else {
                    throw new Error("البيانات غير متوفرة أو غير صحيحة!");
                }
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="text-center mt-5 mb-5" style={{paddingTop:"100px "}}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">جاري التحميل...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center mt-5 text-danger">
                حدث خطأ: {error.message}
            </div>
        );
    }

    return (
        <div
            className="Tasbihs text-center"
            style={{
                direction: "rtl",
                minHeight: "100vh",
                backgroundColor: "#1a1f2c",
                fontFamily: "Tajawal, sans-serif",paddingTop:"100px"
            }}
        >
 

 <div className="py-4 " style={{position:"absolute",right:"10px ",position:"fixed"}}>
 <button onClick={() => navigate(-1)} className="btn btn-dark   ">
      <FaArrowRight className="fs-4" />  
    </button>
 </div>



 <div className="py-2 d-flex flex-column align-items-center justify-content-center     text-light">
      <h1 className="text-warning display-1">{count}</h1>
      <p className="text-secondary">الإجمالي : {count}</p>

      <div className="circle" onClick={handleIncrease}>
        <p className="tasbeeh-text">سبح</p>
        <span className="sub-text">انقر للتسبيح</span>
      </div>

      <div className="d-flex mt-3">
        <button className="reset-btn gap-3" onClick={handleReset}>
          <FaRedo className="me-2" /> إعادة تعيين
        </button>
        
      </div>
    </div>
 
           


          
            <div className="container  " style={{ maxWidth: "1200px" }}>
                <div className="row mt-4 justify-content-center px-3">
                    {tasbihs.map((item, index) => (
                        <div
                            className="col-lg-4 col-md-6 col-sm-12 mb-4"
                            key={index}
                        >
                            <div
                                className=" p-4 text-white text-center"
                                style={{
                                    backgroundColor: "#00695c",
                                    borderRadius: "10px",
                                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    padding: "20px",
                                }}
                            >
                                <p
                                    className="fs-5 text-warning"
                                    style={{
                                        wordWrap: "break-word",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {item.content || "لا يوجد محتوى متاح"}
                                </p>
                                <p
                                    className="text-light"
                                    style={{ fontSize: "16px" }}
                                >
                                    {item.description}
                                </p>
                                <div
                                    className="p-2 mt-3 text-light"
                                    style={{
                                        backgroundColor: "#004d40",
                                        borderRadius: "4px",
                                        fontSize: "14px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    التكرار: {item.count || "غير محدد"} مرات
                                </div>






                            </div>







                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Tasbihs;
