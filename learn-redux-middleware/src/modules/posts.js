import * as postsAPI from '../api/posts'

const GET_POSTS = 'GET_POSTS'
const GET_POSTS_SUCESS = 'GET_POSTS_SUCESS'
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'

const GET_POST = 'GET_POST'
const GET_POST_SUCESS = 'GET_POST_SUCESS'
const GET_POST_ERROR = 'GET_POST_ERROR'

export const getPosts = () => async dispatch => {
    // 요청이 시작됨
    dispatch({type:GET_POSTS})
    // API를 호출
    try {
        const posts = await postsAPI.getPosts()
        // 성공했을 때
        dispatch({
            type:GET_POSTS_SUCESS,
            posts
        })
    } catch (error) {
        // 실패했을 떄
        dispatch({
            type:GET_POSTS_ERROR,
            error:error
        })
    }
}

export const getPost = (id) => async dispatch => {
    // 요청이 시작됨
    dispatch({type:GET_POST})
    // API를 호출
    try {
        const posts = await postsAPI.getPosts(id)
        // 성공했을 때
        dispatch({
            type:GET_POST_SUCESS,
            posts
        })
    } catch (error) {
        // 실패했을 떄
        dispatch({
            type:GET_POST_ERROR,
            error:error
        })
    }
}