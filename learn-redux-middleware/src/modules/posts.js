import * as postsAPI from '../api/posts'
import { reducerUtils, createPromiseThunck, handleAsyncActions, createPromiseThunckById, handleAsyncActionsById } from '../lib/asyncUtils'

const GET_POSTS = 'GET_POSTS'
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'

const GET_POST = 'GET_POST'
const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
const GET_POST_ERROR = 'GET_POST_ERROR'

const CLEAR_POST = 'CLEAR_POST'

// export const getPosts = () => async dispatch => {
//     // 요청이 시작됨
//     dispatch({type:GET_POSTS})
//     // ㅋAPI를 호출
//     try {
//         const posts = await postsAPI.getPosts()
//         // 성공했을 때
//         dispatch({
//             type:GET_POSTS_SUCESS,
//             posts
//         })
//     } catch (error) {
//         // 실패했을 떄
//         dispatch({
//             type:GET_POSTS_ERROR,
//             error:error
//         })
//     }
// }

// export const getPost = (id) => async dispatch => {
//     // 요청이 시작됨
//     dispatch({type:GET_POST})
//     // API를 호출
//     try {
//         const post = await postsAPI.getPostsById(id)
//         // 성공했을 때
//         dispatch({
//             type:GET_POST_SUCESS,
//             post
//         })
//     } catch (error) {
//         // 실패했을 떄
//         dispatch({
//             type:GET_POST_ERROR,
//             error:error
//         })
//     }
// }

export const getPosts = createPromiseThunck(GET_POSTS,postsAPI.getPosts)

export const getPost = createPromiseThunckById(GET_POST,postsAPI.getPostById)

export const clearPost = () => ({type : CLEAR_POST})

const initialState = { 
    posts:reducerUtils.initial(),
    post: {}
}

const getPostsReducer = handleAsyncActions(GET_POSTS,'posts',true)
const getPostReducer = handleAsyncActionsById(GET_POST,'post',true)
// const getPostReducer = (state, action) => {
//     const id = action.meta
//     switch (action.type) {
//         case GET_POST:
//             return{
//                 ...state,
//                 post:{
//                     ...state.post,
//                     [id]:reducerUtils.loading(state.post[id]&&state.post[id].data)
//                 }
//             }
//         case GET_POSTS_SUCCESS:
//             return{
//                 ...state,
//                 post:{
//                     ...state.post,
//                     [id]:reducerUtils.success(state.payload)
//                 }
//             }
//         case GET_POST_ERROR:
//             return{
//                 ...state,
//                 post:{
//                     ...state.post,
//                     [id]:reducerUtils.error(action.payload)
//                 }
//             }
//         default:
//             break;
//     }
// }

// export default function posts(state=initialState, action) {
//     switch(action.type) {
//         case GET_POSTS:{
//             return {
//                 ...state,
//                 posts:reducerUtils.loading()
//             }
//         }
//         case GET_POSTS_SUCESS:{
//             return {
//                 ...state,
//                 posts:reducerUtils.success(action.payload)
//             }
//         }
//         case GET_POSTS_ERROR:{
//             return {
//                 ...state,
//                 post:reducerUtils.error(action.payload)
//             }
//         }
//         case GET_POST:{
//             return {
//                 ...state,
//                 post:reducerUtils.loading()
//             }
//         }
//         case GET_POST_SUCESS:{
//             return {
//                 ...state,
//                 post:reducerUtils.success(action.payload)
//             }
//         }
//         case GET_POST_ERROR:{
//             return {
//                 ...state,
//                 post:reducerUtils.error(action.payload)
//             }
//         }
//         default:
//             return state
//     }

//     return state
// }

export default function posts(state = initialState, action){
    switch(action.type){
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            return getPostsReducer(state, action)
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
            return getPostReducer(state, action)
        case CLEAR_POST:
            return{
                ...state,
                post:reducerUtils.initial()
            }
        default:
            return state
    }
}