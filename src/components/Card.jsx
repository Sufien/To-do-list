function Card(props) {
  const arr = props.data;
  const listItems = arr.map((content) =>
    <div class="col">
      <div class="card text-center">
        <div class="card-header">
          TITLE
        </div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">{content}</p>
          <button type="button" class="btn btn-dark">Done</button>
        </div>
        <div class="card-footer text-muted">
          2 days ago
        </div>
      </div>
    </div>
  );
    return (
      <div class="container">
        <div class="row justify-content-center">{listItems}</div>
      </div>
     );
}

export default Card;