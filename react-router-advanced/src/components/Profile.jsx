import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile/Profile";
import ProfileDetails from "./pages/Profile/ProfileDetails";
import ProfileSettings from "./pages/Profile/ProfileSettings";

import { Outlet, Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <Link to="details">Profile Details</Link> |{" "}
        <Link to="settings">Profile Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Profile;
