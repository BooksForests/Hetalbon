import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home/Home";
import RoomDetails from "./components/roomDetails/RoomDetails";
import BookingsPage from "./components/bookings/BookingsPage";
import About from "./components/about/About";
import ContactUs from "./components/contactus/contactUs";
import Gallery from "./components/gallery/Gallery";
import Services from "./components/services/Services";
import MediaPage from "./components/media/MediaPage";
import ErrorPage from "./components/error/ErrorPage";
import SunadariBoat from "./components/sundari/SunadariBoat";
import LoknathBoat from "./components/loknathboat/LoknathBoat";
import BookingThankPage from "./components/main/bookingThanks/BookingThanks";
import Thankyoupage from "./components/main/contactThanks/ContactThanks";
import { WhatsappButton } from "./components/shared/whatsappButton/WhatsappButton";
import { Canonical } from "./components/shared/Canonical";

const App = () => {
  return (
    <>
      <Router>
        <Canonical />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Legacy URLs. The .htaccess 301 normally handles these before
              the app loads; this catches stale caches and old bookmarks. */}
          <Route path="/index.php" element={<Navigate to="/" replace />} />
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/thanks-for-booking" element={<BookingThankPage />} />
          <Route path="/thanks-for-contact" element={<Thankyoupage />} />
          <Route path="/MediaPage" element={<MediaPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/roomDetails" element={<RoomDetails />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/sundari_boat" element={<SunadariBoat />} />
          <Route path="/loknath_boat" element={<LoknathBoat />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <WhatsappButton />
    </>
  );
};

export default App;
