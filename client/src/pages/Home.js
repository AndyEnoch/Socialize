import React from 'react'
import Sidebar from '../components/Sidebar';
import PostCard from '../components/PostCard';
import './Home.css';
import Header from '../components/Header';

import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

function Home() {

    const {
        loading,
        data
    } = useQuery(FETCH_POSTS_QUERY);


    return (
        <div className='home'>
            <div className='sidebar'>
                <Sidebar/>
            </div>
            <div className='body'>
                <div className='header'>
                    <Header/>
                </div>
                <div className='posts'>
                    {loading ? (
                        <h2>Loading Posts</h2>
                    ) : (
                        data.getPosts && data.getPosts.map((post) => (
                            <div className='post' key={post.id}>
                                <PostCard post={post}/>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

const FETCH_POSTS_QUERY = gql`
    {
        getPosts{
            id 
            body 
            createdAt 
            username 
            likeCount
            likes{
                username
            }
            commentCount
            comments{
                id 
                username 
                createdAt 
                body
            }
        }
    }
    
`

export default Home;
