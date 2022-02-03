import React, { useState } from 'react';
import Card from "./Card";
import Form from "./Form";



function ContentManager(props) {
    const [text, setText] = useState(props.data);

    function addContent(description){
        setText([...text, description])
    }


    return ( 
        <div>
            <Form handleSubmit={addContent}/>
            <Card data={text}/>
        </div>
     );
}

export default ContentManager;