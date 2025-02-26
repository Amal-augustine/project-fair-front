import commonAPI from "./commonApi";
import SERVER_URL from "./server_url";


//register

export const registerAPI=async(reqBody)=>{

   return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}

export const loginAPI=async(reqBody)=>{

   return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
}


export const AddProjectAPI=async(reqBody,reqHeader)=>{

   return await commonAPI("POST",`${SERVER_URL}/add-project`,reqBody,reqHeader)
}
export const homeProjectAPI=async()=>{

   return await commonAPI("GET",`${SERVER_URL}/get-home-project`,"")
}
export const AllProjectAPI=async(searchkey,reqHeader)=>{

   return await commonAPI("GET",`${SERVER_URL}/get-all-project/search=searchkey=${searchkey}`,{},reqHeader)
}
export const UserProjectAPI = async (reqHeader) => {
   return await commonAPI("GET",`${SERVER_URL}/get-user-project`,{},reqHeader);


}
export const UpdateProjectAPI = async (Id, reqBody, reqHeader) => {
   return await commonAPI("PUT", `${SERVER_URL}/edit/project/${Id}`, reqBody, reqHeader);
};

export const deleteProjectAPI = async (Id,reqHeader) => {
   return await commonAPI("DELETE",`${SERVER_URL}/delete/project/${Id}`,{},reqHeader);
};
export const updateprofileapi = async ( reqBody, reqHeader) => {
   return await commonAPI("PUT", `${SERVER_URL}/update/profile`, reqBody, reqHeader);
};
