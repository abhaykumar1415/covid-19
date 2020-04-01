import * as connections from '../config/connection';
import { Schema, Document } from 'mongoose';

/**
 * @export
 * @interface INotificationModel
 * @extends {Document}
 */
export interface INotificationModel extends Document {
    createdAt ? : Date;
    updatedAt ? : Date;
    title: string;
    description: string;
}

const NotificationSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, {
    collection: 'Notification',
    versionKey: false,
    timestamps: true
});

export default connections.db.model < INotificationModel >('NotificationModel', NotificationSchema);
