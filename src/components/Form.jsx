function Form() {
    return ( 
        <div class="container">
            <div class="row justify-content-center">
                    <div class="col">
                        <label for="exampleFormControlInput1" class="form-label">Title</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Title"></input>

                        <label for="exampleFormControlInput1" class="form-label">Description</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Description"></input>
                    </div>
                    <div class="col">
                        <label for="exampleFormControlTextarea1" class="form-label">Notes</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write your content"></textarea>
                    </div>
                </div>
            <div class="row-12 justify-content-center">
                <div class="col offset-6">
                    <button type="button" class="btn btn-dark">To do</button>
                </div>
                
            </div>
        </div>
   );
}

export default Form;