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
   * @apiSuccess {String} firstname Firstname of the User.
   * @apiSuccess {Number} number number of the User.
   * @apiSuccess {Array} invitedTo invitedTo of the User.
   * @apiSuccess {Number} notificationtoken notificationtoken of the User.
   * 
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "firstname": "John",
   *       "number": "9876543526"
   *     }
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
      res.status(200).json({data});
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
 * @apiSuccess {Number} mobile Mobile number of User.
 * @apiSuccess {String} name Name of User.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "_id": "5dee22d0bf5c9c1ae44cab26",
 *           "mobile": "9284274128",
 *           "name": "shivam papat",
 *           "createdAt": "2019-12-09T10:32:48.116Z",
 *           "updatedAt": "2019-12-12T12:17:27.326Z"
 *      },
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
 * @apiParam {Number} id Medias unique ID.
 *
 *        {
 *               "_id": "5dee22d0bf5c9c1ae44cab26",
 *               "mobile": "9284274128",
 *               "name": "shivam papat",
 *               "createdAt": "2019-12-09T10:32:48.116Z",
 *               "updatedAt": "2019-12-12T12:17:27.326Z"
 *        },
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
 * @apiSuccess {Number} mobile Mobile number of user.
 * @apiSuccess {String} name Name of user.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *         {
 *               "_id": "5de9fc33e1b74048f92922ab",
 *               "mobile": 9284274128,
 *               "name": "Mayuri M Papat",
 *               "createdAt": "2019-12-06T06:58:59.610Z",
 *               "updatedAt": "2019-12-06T06:58:59.610Z"
 *           }
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
        .create({
          mobile: req.body.mobile,
          name: req.body.name
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
    else{
      res.status(200).json({ success: false, message: 'Invalid data' });
    }
  }
}


export default new UserController();
