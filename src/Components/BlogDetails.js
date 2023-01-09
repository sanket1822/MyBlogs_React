import { useHistory, useParams } from "react-router-dom"
import useFetch from "./useFetch";

function BlogDetails(){

    const {id} = useParams();
    const {data : blog, isPending, error} = useFetch("http://localhost:8000/blogs/" + id);
    const history =  useHistory();

    function handleDelete(){
        fetch("http://localhost:8000/blogs/" + blog.id ,{
        method: "DELETE"
        }).then(()=>{
            history.push("/");
        })
    }

    return <div className="blog-details">
     
        { isPending && <div> Loading ... </div>}
        { error && <div> {error} </div>}
        {blog && (
            <article>
            <h2>{blog.title}</h2>
            <p> Written by <b>{blog.author}</b></p>
            <div> {blog.body}</div>
            <button onClick={handleDelete}> Delete</button>

        </article>)
        }
    </div>
}
export default BlogDetails;