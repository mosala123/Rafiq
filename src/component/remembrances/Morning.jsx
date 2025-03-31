import React, { useEffect, useState, useMemo } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Morning = () => {
    const [azkar, setAzkar] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error('فشل في جلب البيانات');
                }
                return res.json();
            })
            .then((data) => {
                if (data && data["أذكار الصباح"] && Array.isArray(data["أذكار الصباح"])) {
                    setAzkar(data["أذكار الصباح"]);
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

    const filteredAzkar = useMemo(() => {
        return azkar.filter((_, index) => index !== 0 && index !== 12);
    }, [azkar]);

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
        return <div className="text-center mt-5 text-danger">حدث خطأ: {error.message}</div>;
    }
 
    return (
        <div className='Morning pb-5' style={{ direction: 'rtl' ,backgroundColor:"#1a1f2c",paddingTop:"100px" }}>
 <div className="py-4 " style={{ right:"10px ",position:"fixed",zIndex:"99"}}>
 <button onClick={() => navigate(-1)} className="btn btn-dark   ">
      <FaArrowRight className="fs-4" />  
    </button>
 </div>
            <h1 className='text-center py-5 text-light px-4'> في هدوء الصباح، نجدد العهد بذكر الله  </h1>
            <div className='container'>
                <div className='row mt-3 justify-content-center'>
                    {filteredAzkar.map((item) => (
                        <div className='col-lg-4 col-md-6 col-sm-12 mb-3 d-flex justify-content-center ' key={item.id}  >
                            <div className='card py-5 px-3' 
                             style={{
                                backgroundColor: "#004d40",
                                borderRadius: "10px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                width: "100%",
                                maxWidth: "400px",  
                                justifyContent:"space-between",
                                flexDirection:"column"
                              }}
                            >
                                <p className='fs-5 text-warning'>{item.content ? item.content.slice(0, 300) : "لا يوجد محتوى متاح"}</p>
                                <p className='text-light'>{item.description}</p>
                                <div
                                    className="p-2 mt-3 text-light text-center"
                                    style={{
                                        backgroundColor: "#777",
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

export default Morning;