import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SleepAzkar = () => {
    const [azkar, setAzkar] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
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
                if (data && data["أذكار النوم"] && Array.isArray(data["أذكار النوم"])) {
                    setAzkar(data["أذكار النوم"]);
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
            <div className="text-center mt-5" style={{paddingTop:"100px "}}>
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
            className="SleepAzkar text-center"
            style={{
                direction: "rtl",
                minHeight: "100vh",
            
                fontFamily: "Tajawal, sans-serif",
                padding: "20px",
                backgroundColor:"#1a1f2c",
                paddingTop:"100px"
            }}
        >
<div className="py-4 " style={{ right:"10px ",position:"fixed"}}>
 <button onClick={() => navigate(-1)} className="btn btn-dark   ">
      <FaArrowRight className="fs-4" />  
    </button>
 </div>




            <h1
                className="text-white  py-2 mt-3 px-4"
                style={{
                    borderRadius: "8px",
                    display: "inline-block",
                    fontSize: "28px",backgroundColor: "#004d40",
                }}
            >
               ليالي الذاكرين
            </h1>
            <div className="container" style={{ maxWidth: "1200px" }}>
                <div className="row mt-4 justify-content-center">
                    {azkar.map((item, index) => (
                        <div
                            className="col-lg-4 col-md-6 col-sm-12 mb-4"
                            key={index}
                        >
                            <div
                                className="p-4 text-white text-center"
                                style={{
                                    backgroundColor: "#00695c",
                                    borderRadius: "10px",
                                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    padding: "208px",
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
                                {item.reference && (
                                    <p className="text-light" style={{ fontSize: "14px" }}>
                                        {item.reference}
                                    </p>
                                )}
                                <div
                                    className="p-2 mt-3"
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

export default SleepAzkar;
