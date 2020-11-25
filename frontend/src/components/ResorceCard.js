import React from 'react'

function ResorceCard({ article }) {
  return (
    <div className='col-md-12'>
      <div className='card flex-md-row mb-4 box-shadow h-md-250'>
        <div className='card-body d-flex flex-column align-items-start'>
          <h5 className='mb-0'>
            <a className='text-dark' href={article.url}>
              {article.title}
            </a>
          </h5>
          <div className='mb-1 text-muted'>{article.publishedAt}</div>
          <p className='card-text mb-auto'>{article.content}</p>
          <a href={article.url}>Continue reading</a>
        </div>
      </div>
    </div>
  )
}

export default ResorceCard
