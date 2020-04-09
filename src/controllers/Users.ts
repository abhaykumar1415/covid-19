import UserModel from '../models/UserModel';
import * as express from 'express';
import Auth from "../services/JwtToken";
import UserValidation from './../services/validations/UserValidation';

class UserController {

  /**
   * @api {get} /users Get all users
   * @apiName GetUser
   * @apiGroup User
   *
   * @apiParam {Number} id Users unique ID.
   *
   * @apiSuccess {String} name  Name  of the User.
   * @apiSuccess {Number} deviceId  deviceId Number of the User.
   * @apiSuccess {String} health  Health  of the User.
   * @apiSuccess {Array} geolocation   Geolocation of the User.
   * @apiSuccess {String} notificationtoken  Notificationtoken of the User.
   * @apiSuccess {String} jwttoken  JWTtoken of the User.
   * 
   * 
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     [
   *           {
   *               "invitedTo": [],
   *             "geolocation": {
   *                "type": "Point",
   *                "coordinates":[1,2]
   *             },  
   *               "_id": "5e84c96f34edaed699dfde8c",
   *               "deviceId": "dthjgj123",
   *               "name": "Abhay",
   *               "createdAt": "2020-04-01T17:03:43.480Z",
   *               "updatedAt": "2020-04-02T12:29:30.976Z",
   *               "JWTtoken": "fdgbdshjkjhngfv",
   *               "notificationtoken": "asdfgjhgfdbnyuhg",
   *               "health": "sick"
   *           }
   *           {
   *               "invitedTo": [],
   *             "geolocation": {
   *                "type": "Point",
   *                "coordinates":[3,4]
   *             }, 
   *              "_id": "5e84c7bae5f9a6d653759b02",
   *               "deviceId": "dfghjhhy234",
   *               "name": "Mayuri",
   *               "createdAt": "2020-04-01T16:56:26.688Z",
   *               "updatedAt": "2020-04-01T16:56:26.688Z"
   *               "JWTtoken": "asdvgfdgrhds",
   *               "notificationtoken": "agesaderthfdf",
   *               "health": "Fine"
   *           }
   *       ]              
   *
   * @apiError UserNotFound The id of the User was not found.
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 404 Not Found
   *     {
   *       "error": "UserNotFound"
   *     }
   */
public getAllUsers(req: express.Request, res: express.Response, next: express.NextFunction): void {
  
  UserModel
    .find({})
    .then((data)=> {
      res.status(200).json({ data });
    })
    .catch((error: Error) => {
      res.status(500).json({
        error: error.message,
        errorStack: error.stack
      });
      next(error);
    });
}
/**
 *@api {get} /users/:_id Get one User
 * @apiName Get one User
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *  
 * @apiSuccess {String} name  Name  of the User.
 * @apiSuccess {Number} deviceId  deviceId Number of the User.
 * @apiSuccess {String} health  Health  of the User.
 * @apiSuccess {Array} geolocation   Geolocation of the User.
 * @apiSuccess {String} notificationtoken  Notificationtoken of the User.
 * @apiSuccess {String} jwttoken  JWTtoken of the User.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *         {
 *             "invitedTo":[],
 *             "geolocation": {
 *                "type": "Point",
 *                "coordinates":[1,2]
 *             }, 
 *             "_id": "5e84c96f34edaed699dfde8c",
 *             "deviceId": "aegrwa123",
 *             "name": "Abhay",
 *             "health": "sick",
 *             "createdAt": "2020-04-01T17:03:43.480Z",
 *             "updatedAt": "2020-04-02T12:21:55.626Z",
 *             "JWTtoken": "fdgbdshjkjhngfv",
 *             "notificationtoken": "asdfgjhgfdbnyuhg"
 *         }
 *@apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

public getUser(req: express.Request, res: express.Response, next: express.NextFunction): void {
  UserModel
    .findOne(
      req.params,
    )
    .then((data) => {
        res.status(200).json({ data });
    })
    .catch((error: Error) => {
        res.status(500).json({
            error: error.message,
            errorStack: error.stack
        });
        next(error);
    });
}


/**
 * @api {put} /users/:_id Update one User
 * @apiName Update one User
 * @apiGroup User
 *
 * 
 * @apiParam {Number} id Users unique ID.
 *
 *       {
 *             "deviceId": "asgda123",
 *             "name": "Abhay",
 *             "geolocation": {
 *                "type": "Point",
 *                "coordinates":[1,2]
 *             },
 *             "health": "sick",
 *             "notificationtoken":"asdfgjhgfdbnyuhg",
 *             "JWTtoken":"fdgbdshjkjhngfv"
 *       }
 *
 * @apiSuccess {String} success Success true status for update.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *          {
 *               "success": true
 *          }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

public updateUser(req: express.Request, res: express.Response, next: express.NextFunction): void {
    
  let payload = UserValidation.validatePutRequest(req.body);
  if (payload) {
    UserModel.update(req.params,req.body)
    .then((update) => {
        res.status(200).json({ success: true });
    })
    .catch((error: Error) => {
        res.status(500).json({
            error: error.message,
            errorStack: error.stack
        });
        next(error);
    });
  }
  else{
    res.status(200).json({ success: false, message: 'Invalid data' });
  }
}

/**
 * @api {post} /users Create User
 * @apiName CreateUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {Number} deviceId deviceId number of user.
 * @apiSuccess {String} name Name of user.
 *
 * @apiParamExample {json} Request-Example
 *         {
 *            "deviceId": "asfgdfsa112",
 *	          "name": "sagar"
 *         }
 * 
 * @apiSuccessExample Success-Responce:
 *      {
 *            "_id": "5e8ac99e3a397520b0fb0d21",
 *            "invitedTo":[],
 *            "geolocation":{ "coordinates":[]  },
 *            "deviceId": "aefqawef122",
 *            "name": "vaibhav",
 *            "health": "fine",
 *            "createdAt": "2020-04-06T06:18:06.835Z",
 *            "updatedAt": "2020-04-06T06:18:06.835Z"
 *      } 
 * 
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

public createUser(req: express.Request, res: express.Response, next: express.NextFunction): void {
  // Auth.verifyRequestAuth(req,res,next);
     
  let createPayload = UserValidation.validatePostRequest(req.body);

  if(createPayload){
      UserModel
        .findOne({deviceId: req.body.deviceId}).lean()
        .then(data=>{
            if(data){
              res.status(200).json({ data });
            }else{
              UserModel
              .create({
                deviceId: req.body.deviceId,
                name: req.body.name,
                health: 'fine'
              })
              .then((data) => {
                res.status(200).json({ data });
              })
              .catch((error: Error) => {
                res.status(500).json({
                  error: error.message,
                  errorStack: error.stack
                });
                next(error);
              });
            }
        })
    }
    else{
      res.status(200).json({ success: false, message: 'Invalid data' });
    }
  }
}


export default new UserController();
