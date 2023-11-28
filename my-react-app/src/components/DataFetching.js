import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetching = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
        setLoading(false);
      });
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트 될 때만 실행되도록 설정

  return (
    <div>
      <h2>Fetching Data from API</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetching;
