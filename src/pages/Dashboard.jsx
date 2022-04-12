import { useState } from "react";
import AddPost from "../components/post/add-post/AddPost";
import Posts from "../components/post/Posts";
import ShowPost from "../components/post/show-post/ShowPost";

const Dashboard = () => {
  const [showPostDiv, setShowPostDiv] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 111,
      title: "Happiness",
      author: "John",
    },
    {
      id: 112,
      title: "MIU",
      author: "Dean",
    },
    {
      id: 113,
      title: "Enjoy Life",
      author: "Jasmine",
    },
  ]);
  const [dataToShow, setDataToShow] = useState();

  const onDataSubmit = (title, author) => {
    const post = {
      id: Math.floor(Math.random() * 1000),
      title: title,
      author: author,
    };
    let newPostList = [...posts, post];
    setPosts(newPostList);
    console.log(newPostList);
  };

  const showData = (id) => {
    const post = posts.find((post) => post.id === id);
    setDataToShow(post);
    setShowPostDiv(true);
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <Posts posts={posts} showPost={showData} />
        </div>
        <div className="col-sm-6">
          <AddPost onDataSubmit={onDataSubmit} />
        </div>
      </div>
      <div className="row card">
        {showPostDiv && <ShowPost post={dataToShow} />}
      </div>
    </>
  );
};

export default Dashboard;
