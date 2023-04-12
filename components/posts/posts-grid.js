import Post from "./post-item";
import classes from "./posts-grid.module.css";

function PostGrid(props) {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <Post key={post.slug} post={post}></Post>
      ))}
    </ul>
  );
}

export default PostGrid;
