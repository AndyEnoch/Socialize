import React from 'react';
import './Postcard.css';
import { Avatar } from '@material-ui/core';
import InputOptions from './InputOptions';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { ChatOutlined, FavoriteBorder,  } from '@material-ui/icons';

function PostCard({ post: { body, createdAt, id, username, likeCount, commentCount, likes } }) {

    function likePost(){
        console.log('Like')
    }

    function commentOnPost(){
        console.log('Comment')
    }

    return (
        <div className='postcard'>
            <div className='post__header'>
                <Avatar/>
                <div className='post__info'>
                    <h5>{username}</h5>
                    <h5 as={Link} to={`/posts/${id}`} className='time'>{moment(createdAt).fromNow(true)}</h5>
                </div>
            </div>
            <div className='post__body'>
                {/* <img className='post__image' src='https://media.giphy.com/media/QvBoMEcQ7DQXK/giphy.gif' alt='Test'/> */}
                <p>{body}</p>
            </div>
            <div className='post__buttons'>
                <div className='icons' onClick={likePost}>
                    <InputOptions Icon={FavoriteBorder} title='Like' color='red' onClick={likePost}/>
                    <h5>{likeCount}</h5>
                </div>
                <div className='icons'>
                    <InputOptions Icon={ChatOutlined} title='Comment' color='gray' onClick={commentOnPost}/>
                    <h5>{commentCount}</h5>
                </div>
            </div>
        </div>
    )
}

export default PostCard;
