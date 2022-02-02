function Card(props) {
  const arr = props.data;
  const listItems = arr.map((content) =>
    <div class="col-sm-4">
      <div class="card text-center">
        <div class="card-header">
          TITLE
        </div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">{content}</p>
          <a href="#" class="btn btn-primary">Done</a>
        </div>
        <div class="card-footer text-muted">
          2 days ago
        </div>
      </div>
    </div>
  );
    return (
      <div>{listItems}</div>
     );
}

export default Card;