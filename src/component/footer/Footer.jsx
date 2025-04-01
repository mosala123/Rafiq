import React from 'react';
import { FaFacebook, FaLinkedin, FaGlobe, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" py-4 text-white w-100 text-lg-end  text-center " style={{ backgroundColor: '#004d40', direction: 'rtl' }}>
      <div className=" p-4">
        <div className="row" style={{display:"flex",alignItems:" ",}}>
          <div className="col-12 col-md-4 mb-4 mb-md-0  ">
            <Link to="/Rafiq" className='fs-3 text-light ' style={{ borderBottom: '1px solid white', paddingBottom: '10px' ,textDecoration:"none "}}>رفيقك </Link>
            <p className='mt-3'>اجعل رمضانك مختلفًا هذا العام وسِر على خطى المصطفى ﷺ يومًا بيوم. ابدأ رحلتك الايمانيه مع "رفيق" وكن أقرب إلى الله في كل لحظة.</p>
            <div className="social-icons mt-3">
              <a href="https://www.instagram.com/mo_salah_10_74/?igsh=NDFudXdyc3YxaWg%3D#" target="_blank" rel="noopener noreferrer" className="mx-2 text-white">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/mohamed-ibrahim-1a6a9131b/" target="_blank" rel="noopener noreferrer" className="mx-2 text-white">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/mosala123" target="_blank" rel="noopener noreferrer" className="mx-2 text-white">
                <FaGlobe size={24} />
              </a>
            </div>
          </div>
          <div className="col-6  col-md-4  mb-md-0">
            <ul className="list-unstyled">
            <h6 className='mb-4' style={{ borderBottom: '1px solid    white', paddingBottom: '17px' }}>عن رفيق</h6>

              <li><a href="#" className="text-white text-decoration-none">النهج المحمدي</a></li>
              <li><a href="#" className="text-white text-decoration-none">الأذكار</a></li>
              <li><a href="#" className="text-white text-decoration-none">الأحاديث</a></li>
              <li><a href="#" className="text-white text-decoration-none">قائمة المهام اليومية</a></li>
              <li><a href="#" className="text-white text-decoration-none">الكتب</a></li>
              <li><a href="#" className="text-white text-decoration-none">الصوتيات</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-4 mb-4 mb-md-0">
            <ul className="list-unstyled">
            <h6 style={{ borderBottom: '1px solid white', paddingBottom: '17px' }}>المزيد</h6>

              <li><a href="#" className="text-white text-decoration-none">سياسة الخصوصية</a></li>
              <li><a href="#" className="text-white text-decoration-none">سياسات ملفات الارتباط</a></li>
            </ul>
          </div>
        </div>
        <div className="row mt-3 text-center">
          <div className="col">
            <p className="mb-0">© 2025 جميع الحقوق محفوظة - رفيقك</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
