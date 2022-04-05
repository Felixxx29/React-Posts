import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {useFetching} from "../hooks/useFetching";
import PostServise from "../API/PostServise";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState({})
    const [comment, setComment] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostServise.getById(id);
        setPost(response.data)
    });
    const [fetchCommentsById, isCommentsLoading, commentsError] = useFetching(async () => {
        const response = await PostServise.getCommentsByPostId(id);
        setComment(response.data)
    });
    useEffect(() => {
        fetchPostById(id);
        fetchCommentsById(id);
    }, []);
    return (
        <div>
            <h1>Вы открыли страницу поста {id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>
            }
            <h2>Комментарии</h2>
            {isCommentsLoading
                ? <Loader/>
                : <div>
                    {comment.map(item =>
                        <div key={item.id}>
                            <h5>{item.body}</h5>
                            <div>{item.email}</div>
                        </div>
                    )}
                </div>
            }

        </div>
    );
};

export default PostIdPage;