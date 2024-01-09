import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const PostItem = ({ post }) => {
    return (
        <article className="post">
            <div className="post_thumbnail">
                <img src={post.thumbnail} alt={post.title} />
            </div>
            <div className="post_content">
                <Link to={`/posts/${post.postID}`}>
                    <h3>{post.title}</h3>
                </Link>
                <p>{post.description}</p>
                <div className="post_footer">
                    <PostAuthor />
                    <Link
                        to={`/posts/categories/${post.category}`}
                        className="btn category"
                    >
                        {post.category}
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default PostItem;
