import axios from "axios";

const BASE_URL = "https://api.github.com";

const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};

export { fetchUserData };

const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  const queryParts = [];
  if (username) queryParts.push(`user:${username}`);
  if (location) queryParts.push(`location:${location}`);
  if (minRepos) queryParts.push(`repos:>${minRepos}`);

  const query = queryParts.join(" ");
  try {
    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching user data.");
  }
};

export { fetchAdvancedUsers };
