import './styles/app.css';
import React, {useEffect, useState} from "react";
import PostList from "./components/post-list";
import PostForm from "./components/post-form";
import PostFilter from "./components/post-filter";
import MyModal from "./components/UI/modal/my-modal";
import MyButton from "./components/UI/button/my-button";
import {usePosts} from "./hooks/usePosts";
import PostServise from "./API/PostServise";
import Loader from "./components/UI/loader/Loader";
import {useFetching} from "./hooks/useFetching";

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalCount, setTotalCount] = useState(0);
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostServise.getAll();
        setPosts(response.data);
        console.log(response.headers['x-total-count'])
        setTotalCount(response.headers['x-total-count'])
    });

    useEffect(() => {
        fetchPosts();
    }, [filter])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError &&
            <h1>Произошла ошибка {postError}</h1>
            }
            {isPostsLoading
                ? <Loader/>
                : <PostList posts={sortedAndSearchedPosts} remove={removePost} title='Список постов 1'/>
            }

        </div>
    );
}

export default App;
