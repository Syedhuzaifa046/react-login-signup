import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Data() {

  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        // console.log("dhhhhhh", res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
      });
  }, []);

  return (
    <div className="container mt-5">
    <h1>Data Component</h1>
    {data ? (
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 4).map((post) => (
              <tr key={post.id}>
                <th scope="row">{post.id}</th>
                <td>{post.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  );
}

export default Data;

// <div>
//   <h1>Data Component</h1>
// {data ? (
//   <ul>
//     {data.map((post) => (
//       <li key={post.id}>{post.title} </li>
//     ))}
//   </ul>
// ) : (
//   <p>Loading...</p>
// )}
// </div>

//     <table class="table">
//   <thead>
//     <tr>
//       {/* <th scope="col">ID</th> */}
//       <th scope="col">UserId</th>
//       <th scope="col">Title</th>
//     </tr>
//   </thead>
//   <tbody>
// {data ? (
//   <ul>
//     {data.map((post, index) => (
//       index < 5 &&
//       <tr>
//       <th scope="row">{post.id}</th>
//       {/* <td>{post.userId}</td> */}
//       <td>{post.title}</td>
//     </tr>
//     ))}
//   </ul>
// ) : (
//   <p>Loading...</p>
// )}

//   </tbody>
// </table>
