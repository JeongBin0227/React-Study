import * as postsAPI from '../api/posts'
import { reducerUtils, createPromiseThunck, handleAsyncActions } from '../lib/asyncUtils'

const GET_POSTS = 'GET_POSTS'
const GET_POSTS_SUCESS = 'GET_POSTS_SUCESS'
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'

const GET_POST = 'GET_POST'
const GET_POST_SUCESS = 'GET_POST_SUCESS'
const GET_POST_ERROR = 'GET_POST_ERROR'

// export const getPosts = () => async dispatch => {
//     // 요청이 시작됨
//     dispatch({type:GET_POSTS})
//     // API를 호출
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
export const getPost = createPromiseThunck(GET_POST,postsAPI.getPostById)

const initialState = { 
    posts:reducerUtils.initial(),
    post: reducerUtils.initial()
}

const getPostsReducer = handleAsyncActions(GET_POSTS,'posts')
const getPostReducer = handleAsyncActions(GET_POST,'post')

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
        case GET_POSTS_SUCESS:
        case GET_POSTS_ERROR:
            return getPostsReducer(state, action)
        case GET_POST:
        case GET_POST_SUCESS:
        case GET_POST_ERROR:
            return getPostReducer(state, action)
        default:
            return state
    }
}