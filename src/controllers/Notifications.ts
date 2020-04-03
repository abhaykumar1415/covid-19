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
 * @apiSuccess {String} title Title of the Notification.
 * @apiSuccess {String} description  Description of the Notification.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   [
 *       {
 *           "_id": "5e84dc858b4943dd1d2bd600",
 *           "title": "CURFEW",
 *           "description": "It's not just day 08 of the 21-day India lockdown.",
 *           "createdAt": "2020-04-01T18:25:09.553Z",
 *           "updatedAt": "2020-04-01T18:25:09.553Z"
 *       },
 *       {
 *           "_id": "5e84dcb28b4943dd1d2bd601",
 *           "title": "covid-19",
 *           "description": "It's not just day 08 of the 21-day India lockdown.",
 *           "createdAt": "2020-04-01T18:25:54.054Z",
 *           "updatedAt": "2020-04-01T18:25:54.054Z"
 *       }
 *   ]
 *
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
 * @apiSuccess {String} title Title of Notification.
 * @apiSuccess {String} description Description of event. 
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "_id": "5e84dc858b4943dd1d2bd600",
 *          "title": "corona-covid-19",
 *          "description": "Maharashtra CM Uddhav Thackeray announced the curfew on Monday evening after holding meetings with divisional commissioners, collectors, IPS officers & other senior officials in the state via video conferencing.",
 *          "createdAt": "2020-04-01T18:25:09.553Z",
 *          "updatedAt": "2020-04-01T18:40:42.222Z"
 *      } 
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
 * @apiParam {Number} id Notifications unique ID.
 * 
 *        {
 *            "title": "covid- 19",
 *            "description": "COVID-19 pandemic is spreading, an outbreak is “looking imminent",
 *        }
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
    console.log("payload",payload);
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
 * @apiSuccess {String} title Title of Notification.
 * @apiSuccess {String} description Description of Notification.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *         {
 *            "_id": "5e84de067ae5afdd6b0e38a6",
 *            "title": "curfew covid- 19",
 *            "description": "It's not just day 08 of the 21-day India lockdown.",
 *            "createdAt": "2020-04-01T18:31:34.628Z",
 *            "updatedAt": "2020-04-01T18:31:34.628Z"
 *         }
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
