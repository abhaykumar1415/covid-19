import NotificationModel from '../models/Notifications';
import * as express from 'express';
// import Auth from "../services/JwtToken";
import NotificationValidation from '../services/validations/NotificationValidation';

class NotificationController {

    /**
     * @api {get} /notifications Get all Notifications
     * @apiName GetNotification
     * @apiGroup Notification
     *
     * @apiParam {Number} id Notifications unique ID.
     *
     * @apiSuccess {String} title title of the Notification.
     * @apiSuccess {String} description  description of the Notification.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "title": "John",
     *       "description": "Doe"
     *     }
     *
     * @apiError NotificationNotFound The id of the Notification was not found.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "error": "NotificationNotFound"
     *     }
     */
public getAllNotifications(req: express.Request, res: express.Response, next: express.NextFunction): void {
  NotificationModel
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
 *@api {get} /notifications/:_id Get one Notification
 * @apiName Get one Notification
 * @apiGroup Notification
 *
 * @apiParam {Number} id Notifications unique ID.
 *  
 * @apiSuccess {String} title title of Notification.
 * @apiSuccess {String} description description of event. 
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "_id": "5dee22d0bf5c9c1ae44cab26",
 *           "title": "abcd",
 *           "description": "corona virus covid-19",
 *           "createdAt": "2019-12-09T10:32:48.116Z",
 *           "updatedAt": "2019-12-12T12:17:27.326Z"
 *      },
 *@apiError NotificationNotFound The id of the Notification was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "NotificationNotFound"
 *     }
 */


public getNotification(req: express.Request, res: express.Response, next: express.NextFunction): void {
  NotificationModel
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
 * @api {put} /notifications/:_id Update one Notification
 * @apiName Update one Notification
 * @apiGroup Notification
 *
 * @apiParam {Number} id Medias unique ID.
 *
 *        {
 *               "_id": "5dee22d0bf5c9c1ae44cab26",
 *               "title": "text 3",
 *               "description": "hey hiiii",
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
 * @apiError NotificationNotFound The id of the Notification was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "NotificationNotFound"
 *     }
 */

public updateNotification(req: express.Request, res: express.Response, next: express.NextFunction): void {

    let payload = NotificationValidation.validatePutRequest(req.body);

    if (payload) {
      NotificationModel.update(req.params,req.body)
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
 * @api {post} /notifications Create Notification
 * @apiName CreateNotification
 * @apiGroup Notification
 *
 * @apiParam {Number} id Notifications unique ID.
 *
 * @apiSuccess {String} title title of Notification.
 * @apiSuccess {String} description description of Notification.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *         {
 *               "_id": "5de9fc33e1b74048f92922ab",
 *               "title": "text 4",
 *               "description": "covid 19 pune",
 *               "createdAt": "2019-12-06T06:58:59.610Z",
 *               "updatedAt": "2019-12-06T06:58:59.610Z"
 *           }
 * @apiError NotificationNotFound The id of the Notification was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "NotificationNotFound"
 *     }
 */


public createNotification(req: express.Request, res: express.Response, next: express.NextFunction): void {
  // Auth.verifyRequestAuth(req,res,next);

  let createPayload = NotificationValidation.validatePostRequest(req.body);

    if(createPayload){
      NotificationModel
          .create({
            title: req.body.title,
            description: req.body.description,
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


export default new NotificationController();
