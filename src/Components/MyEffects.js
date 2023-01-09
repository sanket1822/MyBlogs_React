import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

function MyEffects(){


const { data : blogs, isPending, error} = useFetch("http://localhost:8000/blogs")

    return(
    <div> 
           
            {error && <div>{error}</div>}
            {isPending && <div> <h4> Loading...</h4> </div>}
            {blogs && <BlogList  blogs={blogs} title=" All blogs"/>}
    </div>);

}

export default MyEffects;