import { useState } from "react";
import BlogList from "./blogList";
const Home = () => {
    // const[name, setName] = useState("Saumya Patil");
    // const[age, setAge] = useState(19);
    // const handleClickAgain = ()=>{
    //     setName("Sakshi Aherkar");
    //     setAge(20);
    const [blogs, setBlogs] = useState([
        {Title: "My fresher's Party", body: "First day at college...", author: "Mario",id:1},
        {Title: "Traditional Day Party", body: "Wearing saari...",author:"Santiana", id:2},
        {Title: "Send off party", body: "Last day of the college...", author: "Mario",id:3}
    ]);
    const handleDelete = (id) =>{
        const newBlog = blogs.filter((blog)=>blog.id!==id);
        setBlogs(newBlog);
    }
    return (
        <div className="Home">
            <h2>Homepage</h2>
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==="Mario")} title="Mario's blogs" handleDelete={handleDelete}/> */}
        </div>
    );
}
 
export default Home;