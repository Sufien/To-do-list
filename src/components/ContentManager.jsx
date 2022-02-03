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
        <div>
            <Form handleSubmit={addContent}/>
            <Card data={text} handleDelete={deleteContent}/>
        </div>
     );
}

export default ContentManager;