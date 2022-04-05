import React, {useEffect, useState} from "react";
import PostServise from "../API/PostServise";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import {getPagesCount} from "../utils/pages";
import MyButton from "../components/UI/button/my-button";
import MyModal from "../components/UI/modal/my-modal";
import PostForm from "../components/post-form";
import PostFilter from "../components/post-filter";
import Loader from "../components/UI/loader/Loader";
import PostList from "../components/post-list";
import Pagination from "../components/UI/pagination/pagination";


function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostServise.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPagesCount(totalCount, limit));
    });

    const changePage = (page) => {
        setPage(page);
    }

    useEffect(() => {
        fetchPosts();
    }, [page]);

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
                Создать пост
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
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
        </div>
    );
}

export default Posts;
