import React, { useState } from 'react';


function Form(props) {
    const [content, setContent] = useState("");

    function handleChange(e){
        setContent(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(content !== ""){
            props.handleSubmit(content);
            setContent("");
            e.target.reset();
        }
        
    }



    return ( 
                <form onSubmit={handleSubmit}>
                    <div class="row justify-content-center gy-3">
                        <div class="col-11">
                            <label for="exampleFormControlTextarea1" class="form-label"><h1>To do</h1></label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write your content" onChange={handleChange}></textarea>
                        </div>
                        <div class="d-grid gap-2 col-6 mx-auto">
                            <button class="btn btn-dark" type="submit">To do</button>
                            <button class="btn btn-dark" type="reset">Clear</button>
                        </div>
                    </div>
                </form>
   );
}

export default Form;