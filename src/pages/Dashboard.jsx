import axios from "axios";
import { useEffect, useState } from "react";
import AddPost from "../components/post/add-post/AddPost";
import Posts from "../components/post/Posts";
import ShowPost from "../components/post/show-post/ShowPost";
import { SelectedDataContext, SelectedIdContext } from "../context/SelectedDataContext";

const Dashboard = () => {
  const [showPostDiv, setShowPostDiv] = useState(false);
  const [posts, setPosts] = useState([]);
  const [dataToShow, setDataToShow] = useState();
  const [selectedData, setSelectedData] = useState();

  const getAllPosts = () => {
    axios
      .get("http://localhost:8080/api/v1/posts")
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err.message));
  };

  const onDataSubmit = () => {
    getAllPosts();
  };

  const showData = () => {
    setShowPostDiv(true);
  };
  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
    <SelectedDataContext.Provider value={{selectedData, setSelectedData}}>
      <div className="row">
        <div className="col-sm-6">
          <Posts posts={posts} showPost={showData} />
        </div>
        <div className="col-sm-6">
          <AddPost onDataSubmit={onDataSubmit} />
        </div>
      </div>
      <div className="row card">
        {showPostDiv && <ShowPost />}
      </div>
      </SelectedDataContext.Provider>
    </>
  );
};

export default Dashboard;
