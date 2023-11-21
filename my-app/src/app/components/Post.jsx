import React from 'react'
import Button from './Button'

const Post = ({title, body, author}) => {
  return (
    <div className='border border-black p-4 flex flex-col'>
        <h1 className='font-extralight txt-xl'>{title}</h1>
        <h3 className='font-extralight text-xs'>{author}</h3>
        <h2 className='font-bold text-xs'>{body}</h2>
        <Button
            onClick={() => console.log(title)}
            text="View"
            color="red-100"        
        />
    </div>
  )
}

export default Post