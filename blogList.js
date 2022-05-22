const BlogList = ({blogs,title,handleDelete}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.Title}</h2>
                <p>Description: {blog.body}</p>
                <p><button onClick={()=>handleDelete(blog.id)}>Delete blog</button></p>
            </div>
            ))};
        </div>
        
    );
}
 
export default BlogList;