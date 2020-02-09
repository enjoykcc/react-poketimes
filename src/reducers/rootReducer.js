const initState = {
    posts: [
        {id: '1', title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", body: "quia et suscipit↵suscipit recusandae consequuntur expedi"},
        {id: '2', title: "qui est esse", body: "est rerum tempore vitae↵sequi sint nihil reprehenderit d"}
    ]
}

const rootReducer = (state=initState, action) => {
    if (action.type === 'DELETE_POST'){
        const newPosts = state.posts.filter((post) => {
            return action.id !== post.id
        });
        return{
            ...state,
            posts: newPosts
        }
    }
    
    return state;
}

export default rootReducer