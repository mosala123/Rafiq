import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Homepage from "./component/homepages/Homepage";
import Remembrances from "./component/remembrances/Remembrances";
import Morning from "./component/remembrances/Morning";
import Evening from "./component/remembrances/Evening";
import { Route, Routes } from "react-router-dom";
import Tasbihs from "./component/remembrances/Tasbihs";
import SleepAzkar from "./component/remembrances/SleepAzkar";
import DayOf from "./component/dayof/DayOf";
import DayOfDetails from "./component/dayof/DayOfDetails";
import Sayings from "./component/sayings/Sayings";
import SayingsDeatils from "./component/sayings/SayingsDeatils";
import Show from "./component/show/Show";
import Books from "./component/books/Books";
import Footer from "./component/footer/Footer";
import ShowAllVideos from "./component/show/ShowAll";
import Reading from "./component/reading/Reading";
import Quran from "./component/quran/Quran";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/Rafiq" element={<Homepage />} />
        <Route path="/Rafiq/Reading" element={<Reading />} />

        <Route path="/Rafiq/quran" element={<Quran />} />

        <Route path="/Rafiq/books" element={<Books />} />

        <Route path="/Rafiq/Show" element={<Show />} />
        <Route path="/Rafiq/showall" element={<ShowAllVideos />} />

        <Route path="/Rafiq/DayOf" element={<DayOf />} />

        <Route path="/Rafiq/dayofdetails" element={ <DayOfDetails />} />

        <Route path="/Rafiq/sayings" element={<Sayings />} />
        <Route
          path="/Rafiq/sayingdetails/:sayingId"
          element={<SayingsDeatils />}
        />

        <Route path="/Rafiq/morning" element={<Morning />} />
        <Route path="/Rafiq/evening" element={<Evening />} />
        <Route path="/Rafiq/tasbeeh" element={<Tasbihs />} />
        <Route path="/Rafiq/sleepAzkar" element={<SleepAzkar />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
