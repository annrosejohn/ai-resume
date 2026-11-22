import axiosService from "../api/axiosService";

export const addResumeAPI=async(reqBody) =>{
    return await axiosService('POST','/resumes',reqBody)
}

export const displayResumeAPI=async()=>{
return await axiosService('GET','/resumes', {})
}

export const deleteResumeAPI=async(id)=>{
return await axiosService('DELETE',`/resumes/${id}`,{})
}

export const viewResumeAPI=async(id)=>{
return await axiosService('GET',`/resumes/${id}`,{})
}