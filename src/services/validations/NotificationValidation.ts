const validatePutRequest = (req: any) => {
    console.log("req.any in service", req);
    let updatePayload: any = {};
    let result = true;
  
    if (req.title) {
      if (req.title.length) {
        updatePayload.title = req.title;
      } else {
        result = false;
      }
    }
  
    if (req.description) {
      if (req.description.length) {
        updatePayload.description = req.description;
      } else {
        result = false;
      }
    }
  
    console.log("Reult:", result);
    return result ;
}

const validatePostRequest = (req:any) => {
    console.log("req.any",req);
    let createPayload: any = {};
    let createResult = true;
  
    if (req.title) {
      if (req.title.length) {
        createPayload.title = req.title;
      } else {
          createResult = false;
      }
    } 
  
    if (req.description) {
      if (req.description.length) {
        createPayload.description = req.description;
      } else {
        createResult = false;
      }
  } 
    
    console.log("Result:", createResult);
    return createResult ; 
  }
  
const NotificationValidation = { validatePostRequest, validatePutRequest };
export default NotificationValidation;