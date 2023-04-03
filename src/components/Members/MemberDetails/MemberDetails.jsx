import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MemberDetails = () => {
    const singlePerson = useLoaderData();
    const {name , email, company , website , phone , username} = singlePerson;
    return (
        <div className='border text-xl p-3 font-semibold space-y-2 text-slate-900 bg-slate-300 rounded-lg  mx-auto'>
            <img src="" alt="" />
            <h1>Name: {name}</h1>
            <h1>Username: {username}</h1>
            <h1>Email: {email}</h1>
            <h1>Phone : {phone}</h1>
            <h1>Website: {website}</h1>
        </div>
    );
};

export default MemberDetails;