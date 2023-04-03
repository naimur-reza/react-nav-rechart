import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from './SinglePost';

const Posts = () => {
    const data = useLoaderData();
    return (
        <>
        <h1 className='text-2xl text-center py-3 font-semibold'>Total Posts:{data.length}</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
            {
                data.map(dt=> <SinglePost data={dt}></SinglePost>)
            }
        </div>
            </>
    );
};

export default Posts;