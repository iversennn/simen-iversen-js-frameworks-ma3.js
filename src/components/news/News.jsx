import React from 'react';
import Heading from '../layout/Heading';
import NewsList from './NewsList';

export default function News(){
    return(
        <>
            <Heading title='News' />
            <NewsList/>
        </>
    )
}