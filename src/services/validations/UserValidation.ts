const validatePutRequest = (req: any) => {
  console.log("req.any in service", req);
  let updatePayload: any = {};
  let result = true;
  // let pattern = /^[789]\d{9}$/;
  // if (req.mobile) {
  //   if (pattern.test(req.mobile) && req.mobile.length === 10) {
  //     updatePayload.mobile = req.mobile;
  //   } else {
  //     result = false;
  //   }
  // }

  if (req.name) {
    if (req.name.length) {
      updatePayload.name = req.name;
    } else {
      result = false;
    }
  }

  if (req.health) {
    if (req.health.length) {
      updatePayload.health = req.health;
    } else {
      result = false;
    }
  }

  if (req.geolocation) {
    if ((req.geolocation !=='undefined' || null)  &&  req.geolocation.type === "Point" && req.geolocation.coordinates.length === 2 ) {
      updatePayload.geolocation = req.geolocation;
    } else {
      result = false;
    }
  }

  if (req.notificationtoken) {
    if (req.notificationtoken.length) {
      updatePayload.notificationtoken = req.notificationtoken;
    } else {
      result = false;
    }
  }

  if (req.JWTtoken) {
    if (req.JWTtoken.length) {
      updatePayload.JWTtoken = req.JWTtoken;
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
    // let pattern = /^[789]\d{9}$/;

    // if (req.mobile) {
    //   if (pattern.test(req.mobile) && req.mobile.length === 10 ) {
    //     createPayload.mobile = req.mobile;
    //   } else {
    //       createResult = false;
    //   }
    // } 
  

    if (req.name) {
      if (req.name.length) {
        createPayload.name = req.name;
      } else {
        createResult = false;
      }
  } 

    console.log("Result:", createResult);
    return createResult; 
  }
  
const UserValidation = { validatePostRequest, validatePutRequest };
export default UserValidation;