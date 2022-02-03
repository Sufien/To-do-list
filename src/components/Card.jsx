import React, { useState } from 'react';
import ReactDOM from 'react-dom';

var today = new Date().toLocaleDateString();

function Card(props) {
  const arr = props.data;
  const listItems = arr.map((content) =>
    <div class="col">
      <div class="card text-center">
        <div class="card-body">
          <p class="card-text">{content}</p>
          <button type="button" class="btn btn-dark">Done</button>
        </div>
        <div class="card-footer text-muted">
          {today}
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