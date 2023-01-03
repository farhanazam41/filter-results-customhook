const PostsList = ({ posts }) => {
  return (
    <ul>
      {posts &&
        posts.map((post, index) => {
          return <li key={index}>{post.title.slice(0, 10)}</li>;
        })}
    </ul>
  );
};

export default PostsList;
