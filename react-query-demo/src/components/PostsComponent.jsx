import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

const PostsComponent = () => {
  // React Query's `useQuery` hook with refetchOnWindowFocus
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: ["posts"], // Unique key for caching
    queryFn: fetchPosts,
    cacheTime: 1000 * 60 * 10, // 10 minutes before garbage collection
    staleTime: 1000 * 60 * 5, // 5 minutes before refetching
    keepPreviousData: true, // Retain previous data while fetching new data
    refetchOnWindowFocus: true, // Refetch data when window regains focus
  });

  if (isLoading) return <div>Loading posts...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch} disabled={isFetching}>
        {isFetching ? "Refetching..." : "Refetch Posts"}
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
