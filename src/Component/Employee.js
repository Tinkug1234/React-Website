import React, { useEffect, useState } from 'react'
import axios from "axios";

const Employee = () => {

    const [post, setpost] = useState([]);

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/posts/').then((res) => {
            setpost(res.data);

        }).catch((err) => {
            console.log(err)
        });
    });



const postList = (post.length) ? (post.map((info) =>{
    return(

<React.Fragment key = {info.id}>
<p> Title : {info.title} </p>
<p> Body : {info.body}</p>
</React.Fragment>

  )
    })) : (<p>No Data yet!</p>)


    return (
        <div>
        {postList}
            Employee page
        </div>
    )
}

export default Employee
