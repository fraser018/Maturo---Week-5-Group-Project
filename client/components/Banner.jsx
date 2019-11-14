import React from 'react'

//contains a banner image, profile pic
const Banner = () => {

  return (

    <div class="px-4 pt-0 pb-4 cover">
      <div class="media align-items-end profile-head">
        <div class="profile mr-3"><img src={"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"} alt="..." width="130" class="rounded mb-2 img-thumbnail"></img>
          <a href="#" class="btn btn-outline-dark btn-sm btn-block">Edit profile</a>
        </div>
        <div class="media-body mb-5 text-white">
          <h4 class="mt-0 mb-0">Mark Williams</h4>
          <p class="small mb-4"> <i class="fas fa-map-marker-alt mr-2"></i>New York</p>
        </div>
      </div>
    </div>

  )


}

export default Banner