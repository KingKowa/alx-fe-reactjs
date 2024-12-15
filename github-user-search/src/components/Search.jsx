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
  const [criteria, setCriteria] = useState({});
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to handle API call and state updates
  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setUserData(null);
    setResults([]);

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
      <div className="max-w-xl mx-auto p-4">
        <SearchForm onSearch={handleSearch} />
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="mt-4 space-y-4">
          {results.map((user) => (
            <div
              key={user.id}
              className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center space-x-4"
            >
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-lg font-bold">{user.login}</h2>
                <p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    View Profile
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

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

return (
  <div className="max-w-xl mx-auto p-4">
    <SearchForm onSearch={handleSearch} />
    {loading && <p>Loading...</p>}
    {error && <p className="text-red-500">{error}</p>}
    <div className="mt-4 space-y-4">
      {results.map((user) => (
        <div
          key={user.id}
          className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center space-x-4"
        >
          <img
            src={user.avatar_url}
            alt={`${user.login}'s avatar`}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-lg font-bold">{user.login}</h2>
            <p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View Profile
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
