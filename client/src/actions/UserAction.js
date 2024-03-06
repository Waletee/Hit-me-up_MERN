import * as UserApi from "../api/UserRequests";

export const updateUser=(id, formData)=> async(dispatch)=> {
    dispatch({type: "UPDATE_START"})
    try{
        const {data} = await UserApi.updateUser(id, formData);
        dispatch({type: "UPDATE_SUCCESSFUL", data: data})
    }   
    catch(error){
        dispatch({type: "UPDATE_FAILED"})
    }
}

export const followUser = (id, data)=> async(dispatch)=> {
    dispatch({type: "FOLLOW_USER", data: id})
    UserApi.followUser(id, data)
}

export const unfollowUser = (id, data)=> async(dispatch)=> {
    dispatch({type: "UNFOLLOW_USER", data: id})
    UserApi.unfollowUser(id, data)
}