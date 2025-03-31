import React, { useState } from "react";
import "./Navbar.css";
import { RiMenu2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Navbar">
      <div className="nav-left">
        <div className="menu" onClick={toggleMenu}>
          <RiMenu2Fill />
        </div>
        <ul
          style={{ direction: "rtl" }}
          className={`nav-ul ${isOpen ? "open" : ""}`}
        >
          <li>
            <Link to="/dayofdetails">النهج المحمدي</Link>
          </li>
          <li>
            <Link to="/sayings"> الأحاديث</Link>
          </li>
          <li>
            <Link to="/tasbeeh">قائمة المهام اليومية</Link>
          </li>
          <li>
            <Link to="/showall">المرئيات</Link>
          </li>
          <li>
            <Link to="/Rafiq/quran">القرآن الكريم</Link>
          </li>
          <li>
            <Link to="/Reading">تلاوات</Link>
          </li>
          <li>
            <Link to="/books">الكتب المترجمة</Link>
          </li>
        </ul>
      </div>

      <div className="nav-right">
        <Link
          to="/"
          className="fs-3 text-light "
          style={{ textDecoration: "none" }}
        >
          رفيقك
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
