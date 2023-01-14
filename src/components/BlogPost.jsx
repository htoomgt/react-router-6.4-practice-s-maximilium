import React from "react";

const BlogPost = () => {
    return (
        <article className={classes.post}>
            <h1>{title}</h1>
            <p>{text}</p>
        </article>
    );
};

export default BlogPost;
