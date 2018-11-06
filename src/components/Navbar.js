import React from 'react'


const Navbar = () => {
  return(
    <nav className="navbar navbar-expand-xl navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="./index.html">RH</a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active"><a href="./index.html"> Home <span class="sr-only">(current)</span></a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
      </div>
    </nav>



  )

}







export default Navbar
