import React from 'react';


function Navbar() {
    return ( 
        <nav class="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">To Do List</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
     );
}

export default Navbar;