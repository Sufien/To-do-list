import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Form(props) {
    const [content, setContent] = useState("");

    function handleChange(e){
        setContent(e.target.value);
    }

    function handleSubmit(e){
        if(content !== ""){
            props.handleSubmit(content);
            setContent("");
        }
        e.preventDefatl();
    }



    return ( 
        <form onSubmit={handleSubmit}>
            <div class="container">
                <div class="row justify-content-center">
                        <div class="col">
                            <label for="exampleFormControlTextarea1" class="form-label">Notes</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write your content" onChange={handleChange}></textarea>
                        </div>
                    </div>
                <div class="row-12 justify-content-center">
                    <div class="col offset-6">
                        <button type="submit" class="btn btn-dark">To do</button>
                    </div>
                    
                </div>
            </div>
        </form>
   );
}

export default Form;