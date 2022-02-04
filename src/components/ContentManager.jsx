import React, { useState } from 'react';
import Card from "./Card";
import Form from "./Form";



function ContentManager(props) {
    const [text, setText] = useState(props.data);

    function addContent(description){
        setText([...text, description])
    }
    function deleteContent(name){
        var array = [...text];
        var index = array.indexOf(name);
        if (index !== -1) {
            array.splice(index, 1);
            setText([...array]);
        }
    }


    return ( 
        <div class="container">
            <div class="row justify-content-center gy-3">
                <Form handleSubmit={addContent}/>
                <Card data={text} handleDelete={deleteContent}/>
            </div>
        </div>
        );
}

export default ContentManager;