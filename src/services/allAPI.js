import commonAPI from "./commonAPI";
import server_url from "./serviceUrl";

//api call for add student details

 export const addVideoAPI=async(details)=>{
   return await commonAPI("POST",`${server_url}/students`,details)

}
//api call for getting all student details

export const getAllDetailsAPI=async()=>{
  return  await commonAPI("GET",`${server_url}/students`,"")
}

// delete student details.

export const deleteDetailsAPI=async(studentId)=>{
  return  await commonAPI("DELETE",`${server_url}/students/${studentId}`,{})
}
// api call for updating student details
export const updateStudentAPI = async (studentId, updatedDetails) => {
  return await commonAPI("PUT", `${server_url}/students/${studentId}`, updatedDetails);
}
