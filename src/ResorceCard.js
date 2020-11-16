import React from 'react'

function ResorceCard({ author }) {
  return (
    <div class='col-md-12'>
      <div class='card flex-md-row mb-4 box-shadow h-md-250'>
        <div class='card-body d-flex flex-column align-items-start'>
          <h3 class='mb-0'>
            <a class='text-dark' href='#'>
              {author}
            </a>
          </h3>
          <div class='mb-1 text-muted'>Nov 12</div>
          <p class='card-text mb-auto'>
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </p>
          <a href='#'>Continue reading</a>
        </div>
        <img
          class='card-img-right flex-auto d-none d-md-block'
          src='https://via.placeholder.com/300'
          alt='Card image cap'
        ></img>
      </div>
    </div>
  )
}

export default ResorceCard
