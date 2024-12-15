import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";
import { fetchAdvancedUsers } from "../services/githubService";

const Search = ({ onSearch }) => {
  const message = "Looks like we cant find the user";
  const [username, setUsername] = useState(""); // State for the search input
  const [userData, setUserData] = useState(null); // State to hold user data
  const [loading, setLoading] = useState(false); // State for loading status
  const [error, setError] = useState(null); // State for error handling
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

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
  /*const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      handleSearch();
    }
  };*/

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ username, location, minRepos });
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <div>
          <label htmlFor="username" className="block text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-gray-700">
            Location
          </label>
          <input
            type="text"
            id="location"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label htmlFor="minRepos" className="block text-gray-700">
            Minimum Repositories
          </label>
          <input
            type="number"
            id="minRepos"
            placeholder="Minimum repositories"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
