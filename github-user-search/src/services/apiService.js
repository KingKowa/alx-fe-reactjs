import axios from "axios";

const BASE_URL = "https://api.github.com";

const fetchGitHubUser = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`, {
    headers: {
      Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
    },
  });
  return response.data;
};

export { fetchGitHubUser };
