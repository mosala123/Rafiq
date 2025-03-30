import React from 'react';
import { Link } from 'react-router-dom';

const DayOf = () => {
  return (
  
    <div className='   p-4' >
          <div className='  mt-5 mb-5 py-5 px-4 '
      style={{
        backgroundImage: 'url(/public/images/web1.webp)',  
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        borderRadius:"20px ",
        backgroundBlendMode: " color-dodge",  
        backgroundColor:" rgba(0, 0, 0, 0.8)",
      }}
    >
      <h1 className="text-center" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        يوم في حياة النبي ﷺ
      </h1>
      <p className='fs-2 text-warning mt-3 mb-4'>
        "كيف كان يقضي أعظم الخلق يومه؟ ما السر في بركته وإنجازه رغم كثرة مسؤولياته؟ في هذا المقال، سنبحر معًا في تفاصيل يوم النبي ﷺ، لنستلهم منها دروسًا تغير حياتنا."
      </p>
      <Link to={"/dayofdetails"}
        className="btn btn-warning mt-4"
    
      >
        تعرف عليه
      </Link>
    
    </div>
    </div>
  );
};

export default DayOf;