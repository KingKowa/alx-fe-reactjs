import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const message = "Looks like we cant find the user";
  const [username, setUsername] = useState(""); // State for the search input
  const [userData, setUserData] = useState(null); // State to hold user data
  const [loading, setLoading] = useState(false); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  // Function to handle API call and state updates
  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username); // Call the API
      setUserData(data); // Update the state with user data
    } catch (err) {
      setError("Looks like we can't find the user."); // Set error message
    } finally {
      setLoading(false); // End loading state
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      handleSearch();
    }
  };

  return (
    <div>
      {/* Search Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional Rendering for API States */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <img
            src={userData.avatar_url}
            alt={`${userData.login}'s avatar`}
            width="100"
          />
          <h2>{userData.name || userData.login}</h2>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
