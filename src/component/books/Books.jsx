import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Books = () => {
  const [books, setBooks] = useState([]);
 const navigate = useNavigate();
  useEffect(() => {
    fetch('https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/showall/ar/ar/1/25/json')
      .then(response => response.json())
      .then(data => {
        if (data.data) {
          setBooks(data.data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="px-3 topnav pb-5 " style={{ direction: 'rtl', backgroundColor: '#1a1f2c',paddingTop:"100px" }}>
      <div className="container">


        <div className="py-4 " style={{position:"absolute",right:"10px ",position:"fixed"}}>
         <button onClick={() => navigate(-1)} className="btn btn-dark   ">
              <FaArrowRight className="fs-4" />  
            </button>
         </div>
         <h2 className="text-center text-light mb-4">اكتشف كنوز المعرفة الإسلامية من أمهات الكتب والمراجع القيمة</h2>

        <div className="row  row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {books.map((book, index) => {
            const bookUrl = book.attachments && book.attachments.length > 0 ? book.attachments[0].url : null;

            return (
              <div className="mt-5" key={index} style={{display:"flex",alignItems:"center",justifyContent:"center",}}>
                <div
                  className="card h-100 shadow-sm border-0 p-3"
                  style={{
                    backgroundColor: '#004d40',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    width: '100%',
                    maxWidth: '400px',
                  }}
                >
                  <div className="card-body text-right">
                    <h5 className="card-title text-light">{book.title}</h5>
                    <p className="card-text text-warning">
                      {book.description ? book.description : 'لا يوجد وصف متاح'}
                    </p>
                  </div>
                  <div className="card-footer border-0 text-center   ">
                  
                    {bookUrl ? (
                      <a href={bookUrl} target="_blank" rel="noopener noreferrer" className=" py-2 btn btn-primary btn-sm">
                          قراءة الكتاب
                      </a>
                    ) : (
                      <button className="btn btn-secondary btn-sm" disabled>
                        ❌ الرابط غير متاح
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Books;
