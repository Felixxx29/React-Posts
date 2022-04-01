import React from 'react';
import MyButton from "./UI/button/my-button";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post-btns">
                <MyButton onClick={() => props.remove(props.post)}>удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;