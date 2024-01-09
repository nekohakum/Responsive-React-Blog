import React, { useState } from "react";
import { DUMMY_POSTS } from "../data";
import PostItem from "../components/PostItem";

const AuthorPosts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS);
    return (
        <section className="posts">
            {posts.length > 0 ? (
                <div className="container posts_container">
                    {posts.map((post) => (
                        <PostItem post={post} key={post.id} />
                    ))}
                </div>
            ) : (
                <h2 className="center">No posts founds</h2>
            )}
        </section>
    );
};

export default AuthorPosts;
