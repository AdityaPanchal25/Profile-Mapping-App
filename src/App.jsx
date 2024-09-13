import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import ProfileDetails from "./pages/ProfileDetails/ProfileDetails";
import AdminLogin from "./pages/admin/adminLogin/AdminLogin";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import MyState from "./context/data/myState";
import CreateProfile from "./pages/admin/createProfile/CreateProfile";
import NoPage from "./pages/nopage/NoPage";
import { Toaster } from "react-hot-toast";
// import GooglePlacesApi from "./pages/map/GooglePlacesApi";
import MapComponent from "./pages/map/MapComponent";
import SearchLocationInput from "./pages/map/GooglePlacesApi"; // Import your map input

function App() {
  // map logic
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 28.7041,
    lng: 77.1025,
  });

  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profiledetails/:id" element={<ProfileDetails />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/CreateProfile" element={<CreateProfile />} />
          <Route path="/*" element={<NoPage />} />
          
          {/* Adding a route for the map if needed */}
          <Route
            path="/map"
            element={
              <div style={{ height: "100vh", width: "100%" }}>
                <SearchLocationInput setSelectedLocation={setSelectedLocation} />
                <MapComponent selectedLocation={selectedLocation} />
              </div>
            }
          />
        </Routes>
        <Toaster />

        {/* If you want to display the map globally, add it here */}
        {/* <div style={{ height: "100vh", width: "100%" }}>
          <SearchLocationInput setSelectedLocation={setSelectedLocation} />
          <MapComponent selectedLocation={selectedLocation} />
        </div> */}
      </Router>
    </MyState>
  );
}

export default App;
