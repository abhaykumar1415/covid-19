import * as connections from '../config/connection';
import { Schema, Document } from 'mongoose';

/**
 * @export
 * @interface IUserModel
 * @extends {Document}
 */
export interface IUserModel extends Document {
    createdAt ? : Date;
    updatedAt ? : Date;
    name: string;
    mobile: string;
    health: string;
    invitedTo: Array<Object>;
    geolocation: Array<Object>;
    notificationtoken: string;
    JWTtoken: string;
}

const UserSchema: Schema = new Schema({
    mobile: {
        type: String,
    },
    deviceId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    health: {
        type: String,
    },
    invitedTo: [{
        type: Schema.Types.ObjectId,
        ref: 'UserModel'
    }],
    geolocation: { //https://mongoosejs.com/docs/geojson.html
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: false
        },
        coordinates: { //Note that longitude comes first in a GeoJSON coordinate array, not latitude.
          type: [Number],
          required: false
        }
    },
    notificationtoken: {
        type: String,
    },
    JWTtoken: {
        type: String
    }
}, {
    collection: 'User',
    versionKey: false,
    timestamps: true
});

export default connections.db.model < IUserModel >('UserModel', UserSchema);
