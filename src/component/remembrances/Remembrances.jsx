import { Link } from 'react-router-dom';
import mosqueImage1 from '../../../public/images/mosque.webp';
import mosqueImage2 from '../../../public/images/download.jpg';
import mosqueImage4 from '../../../public/images/images.jpg';
import mosqueImage3 from '../../../public/images/download.jfif';
import "./Remembrances.css"
const Remembrances = () => {
  
  return (
    <div className='Remembrances py-5 px-3  ' style={{ direction: "rtl",backgroundColor:"#004d40" }}>
      <h1 className='text-center text-light '>بين كل ذكرٍ وذكر، تتفتح أبوابُ السكينة، وتطمئن القلوب.</h1>
      <div className='container px-4 py-3'>
        <div className='row text-center mt-2'>
          
          <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
            <Link to="/morning" className='card-link'>
              <div className='card'>
                <img src={mosqueImage1} alt="أذكار الصباح" className="card-img-top" style={{ height: "220px" }} />
                <div className="card-body py-5 text-warning" style={{ backgroundColor: "#004d40", color: "white" }}>
                  <h3 className="card-title fw-bold mb-3 fs-1">أذكار الصباح</h3>
                  <p className="card-text fw-bold">لتبدأ يومك في طاعة الله</p>
                </div>
              </div>
            </Link>
          </div>

          <div className='col-lg-3 col-md-6 col-sm-12 mb-3  '>
            <Link to="/evening" className='card-link'>
              <div className='card'  >
                <img src={mosqueImage2} alt="أذكار المساء" className="card-img-top" style={{ height: "220px" }} />
                <div className="card-body py-5 text-warning" style={{ backgroundColor: "#004d40", color: "white" }}>
                  <h3 className="card-title fw-bold mb-3 fs-1">أذكار المساء</h3>
                  <p className="card-text fw-bold">لتبدأ يومك في طاعة الله</p>
                </div>
              </div>
            </Link>
          </div>

          <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
            <Link to="/tasbeeh" className='card-link'>
              <div className='card'>
                <img src={mosqueImage3} alt="تسابيح" className="card-img-top" style={{ height: "220px" }} />
                <div className="card-body py-5 text-warning" style={{ backgroundColor: "#004d40", color: "white" }}>
                  <h3 className="card-title fw-bold mb-3 fs-1">تسابيح</h3>
                  <p className="card-text fw-bold">لتبدأ يومك في طاعة الله</p>
                </div>
              </div>
            </Link>
          </div>

          <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
            <Link to="/sleepAzkar" className='card-link'>
              <div className='card'>
                <img src={mosqueImage4} alt="أذكار النوم" className="card-img-top" style={{ height: "220px" }} />
                <div className="card-body py-5 text-warning" style={{ backgroundColor: "#004d40", color: "white" }}>
                  <h3 className="card-title fw-bold mb-3 fs-1">أذكار النوم</h3>
                  <p className="card-text fw-bold">لتبدأ يومك في طاعة الله</p>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Remembrances;
