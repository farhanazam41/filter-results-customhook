import PostsList from "./PostsList";
import "./styles.css";
import useFetch from "./useFetch";
import { useState } from "react";

export default function App() {
  const { loading, error, data } = useFetch(
    "https://jsonplaceholder.typicode.com/postss"
  );
  const [searchVal, setSearchVal] = useState("");

  const filteredData = data.filter((d) => {
    return d.title.toLowerCase().startsWith(searchVal);
  });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        placeholder="Search title"
        type="text"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      {loading && <h1>Loading....!</h1>}
      {error && <h1>Error....!</h1>}
      {data && data.length > 0 && !error && <PostsList posts={filteredData} />}
    </div>
  );
}
