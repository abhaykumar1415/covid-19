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
    phone: string;
}

const UserSchema: Schema = new Schema({
    phone: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    invitedTo: [{
        type: Schema.Types.ObjectId,
        ref: 'UserModel'
      }],
    geolocation: { //https://mongoosejs.com/docs/geojson.html
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: { //Note that longitude comes first in a GeoJSON coordinate array, not latitude.
          type: [Number],
          required: true
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
