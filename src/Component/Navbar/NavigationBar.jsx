import React from 'react'
import './NavigationBar.css'
function NavigationBar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-custom">
  <div class="container">
    <div className="logo-container navbar-brand">
       <p className='logo-text'><span className='pf-text'>PF</span> SAMADHAN </p>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <div class="dropdown ms-auto">
  <a class="btn  language-dropdown-button dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    LANGUAGE
  </a>

  <ul class="dropdown-menu " aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">HINDI</a></li>
    <li><a class="dropdown-item" href="#"> ENGLISH</a></li>
    <li><a class="dropdown-item" href="#">BENGALI</a></li>
  </ul>
</div>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavigationBar