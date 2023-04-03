import React from 'react';

const SinglePost = ({data}) => {
    const{title , body} = data;
    return (
        <>
        <div className='bg-slate-200 p-3  space-y-3 border-2 rounded-md'>
            <h1 className='text-lg font-semibold'>Title: {title}</h1>
            <h1>{body}</h1>
            <button className='py-2 px-5 rounded-lg bg-slate-800 text-white font-semibold'>Show details</button>
        </div>
        </>
    );
};

export default SinglePost;