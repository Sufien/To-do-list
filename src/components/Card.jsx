function Card(props) {
  const arr = props.data;
  const listItems = bb;
    return ( 
      <div class="col-sm-4">
        <div class="card text-center">
          <div class="card-header">
            TITLE
          </div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">Content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          <div class="card-footer text-muted">
            2 days ago
          </div>
        </div>
      </div>
     );
}

export default Card;