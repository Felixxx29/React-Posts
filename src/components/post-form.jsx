import React, {useState} from 'react';
import MyInput from "./UI/input/my-input";
import MyButton from "./UI/button/my-button";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})
    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            ...post,
        }
        create(newPost)
        setPost({title: '',body: ''})
    }

    return (
        <form>
            <MyInput
                value={post.title}
                type="text"
                placeholder='Название поста'
                onChange={e => setPost({...post, title: e.target.value})}
            />
            <MyInput
                type="text"
                placeholder='Описание поста'
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
            />
            <MyButton
                onClick={addNewPost}
            >
                Создать пост
            </MyButton>
        </form>
    );
};

export default PostForm;