import { useState } from "react";
import { useHistory } from "react-router-dom";

function Create(){


const [title, setTitle] = useState("");
const [body, setBody] = useState("");
const [author, setAuthor]= useState("Jack")
const [isPending, setIsPending] = useState(false)
const history =  useHistory();


function handleSubmit(event){
    event.preventDefault();
    const blog =  {title, author, body}

   setIsPending(true);

    fetch("http://localhost:8000/blogs",{
        method: "POST",
        headers : {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
    }).then(()=> {
        console.log("Blog added");
        setIsPending(false);
       history.push("/");
    })
    
}


    return (
        <div className="create">
            <h2> Add New Blog</h2>

            <form onSubmit={handleSubmit}>

                    <label> Blog Title:</label>
                    <input
                    type="text"
                    required
                    value={title}
                    onChange={ (e)=> setTitle(e.target.value)}
                    >
                    </input>

                    <label> Blog Body:</label>
                    <textarea
                    required
                    value={body}
                    onChange={(e)=> setBody(e.target.value)}
                    >
                    </textarea>

                    <label> Blog Author</label>
                    <select value={author} onChange={(e)=> setAuthor(e.target.value)}>
                        <option> Jack </option>
                        <option> John </option>
                    </select>

                   {!isPending && <button> Add Blog</button>} 
                   {isPending && <button disabled> Adding ...</button> }

            </form>
            
            
        </div>
    )
}
export default Create;