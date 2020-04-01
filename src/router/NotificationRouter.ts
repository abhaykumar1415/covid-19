import NotificationController from '../controllers/Notifications';
import { Router } from 'express';
/**
 * @export
 * @class NotificationRouter
 */
export default class NotificationRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    /**
     * @memberof NotificationRouter
     */
    public routes(): void {
        this.router.get('/', NotificationController.getAllNotifications);
        this.router.post('/',  NotificationController.createNotification);
        this.router.put('/:_id',  NotificationController.updateNotification);
        this.router.get('/:_id', NotificationController.getNotification);
    }
}
