import * as UploadApi from "../api/UploadRequest"; // Assuming UploadRequest defines uploadImage

export const uploadImage = (data) => async (dispatch) => {
  try {
    const response = await UploadApi.uploadImage(data); // Make the upload request

    dispatch({ type: "UPLOAD_IMAGE_SUCCESS", data: response }); // Dispatch success action with the entire response object
    return response; // Return the entire response object
  } catch (error) {
    console.error("Error uploading image:", error);
    dispatch({ type: "UPLOAD_IMAGE_FAIL", error });
    throw error; // Rethrow the error to propagate it
  }
};


export const uploadPost = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const newPost = await UploadApi.uploadPost(data);
    dispatch({ type: "UPLOAD_SUCCESSFUL", data: newPost.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};
