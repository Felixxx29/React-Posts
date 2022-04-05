import React from 'react';
import MyButton from "./UI/button/my-button";
import {useNavigate, useParams} from 'react-router-dom';

const PostItem = (props) => {
    const navigate = useNavigate();
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post-btns">
                <MyButton
                    style={{marginRight: '5px', marginLeft: '5px'}}
                    onClick={() => navigate(`/posts/${props.post.id}`)}>
                    Открыть
                </MyButton>
                <MyButton
                    onClick={() => props.remove(props.post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;