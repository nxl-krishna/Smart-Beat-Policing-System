import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomedashboardWeb from "./pages/HomedashboardWeb";
import OfficerAnalysisWeb from "./pages/OfficerAnalysisWeb";
import OfficerAnalysisWeb2 from "./pages/OfficerAnalysisWeb2";
import EmercheckWeb from "./pages/EmercheckWeb";
import AddProfileWeb from "./pages/AddProfileWeb";
import TracknowWeb from "./pages/TracknowWeb";
import TracknowWebMap from "./pages/TracknowWebMap";
import SubmittedWeb from "./pages/SubmittedWeb";
// import Login from "./pages/Login";
import MapBox from "./pages/MapBox";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "Krishna | Aankh - Smart Beat Policing System";
        metaDescription = "Aankh Smart E-Beat Management System by Krishna";
        break;
      case "/HomedashboardWeb":
        title = "Krishna - Dashboard | Aankh";
        metaDescription = "Aankh Home Dashboard by Krishna";
        break;
      case "/OfficerAnalysisWeb":
        title = "Krishna - Officer Analysis | Aankh";
        metaDescription = "Aankh Officer Analysis by Krishna";
        break;
      case "/OfficerAnalysisWeb2":
        title = "Krishna - Performance Analysis | Aankh";
        metaDescription = "Aankh Performance and Analytics by Krishna";
        break;
      case "/EmercheckWeb":
        title = "Krishna - Emergency Checkpoints | Aankh";
        metaDescription = "Aankh Emergency Checkpoints by Krishna";
        break;
      case "/AddProfileWeb":
        title = "Krishna - Add Profile | Aankh";
        metaDescription = "Aankh Add Officer Profile by Krishna";
        break;
      case "/TracknowWeb":
        title = "Krishna - Track Now | Aankh";
        metaDescription = "Aankh Real-time Officer Tracking by Krishna";
        break;
      case "/TracknowWebMap":
        title = "Krishna - Tracking Map | Aankh";
        metaDescription = "Aankh Tracking Map by Krishna";
        break;
      case "/SubmittedWeb":
        title = "Krishna - Profile Submitted | Aankh";
        metaDescription = "Aankh Profile Submission by Krishna";
        break;
      case "/MapBox":
        title = "Krishna - MapBox | Aankh";
        metaDescription = "Aankh MapBox View by Krishna";
        break;
      default:
        title = "Krishna | Aankh - Smart Beat Policing System";
        metaDescription = "Aankh Smart E-Beat Management System by Krishna";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
       <Route path="/" element ={<HomedashboardWeb />}/> 
      <Route path="/HomedashboardWeb" element={<HomedashboardWeb />} />
      <Route path="/OfficerAnalysisWeb" element={<OfficerAnalysisWeb />} />
      <Route path="/OfficerAnalysisWeb2" element={<OfficerAnalysisWeb2 />} />
      <Route path="/EmercheckWeb" element={<EmercheckWeb />} />
      <Route path="/AddProfileWeb" element={<AddProfileWeb />} />
      <Route path="/TracknowWeb" element={<TracknowWeb />} />
      <Route path="/TracknowWebMap" element={<TracknowWebMap />} />
      <Route path="/SubmittedWeb" element={<SubmittedWeb />} />
      <Route path="/MapBox" element={<MapBox />} />
      {/* <Route path="/" element ={<Login />}/> */}
    </Routes>
  );
}
export default App;
