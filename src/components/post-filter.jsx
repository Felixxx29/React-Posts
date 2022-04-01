import React from 'react';
import MyInput from "./UI/input/my-input";
import MySelect from "./UI/select/my-select";

const PostFilter = ({filter,setFilter}) => {
    return (
        <div>
            <MyInput
                style={{marginBottom: '15px'}}
                placeholder='Поиск...'
                value={filter.query}
                onChange={e => setFilter({...filter,query: e.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue='Сортировка по'
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'},
                ]}
            />
        </div>
    );
};

export default PostFilter;