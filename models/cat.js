import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const CatSchema = new Schema(
    {
        id: Number,
        name: String,
        age: Number,
        description: String,
        image_url: String,
        background_color: String,
        owner: Object,
    },
    {
        collection: 'cats',
    }
);

CatSchema.plugin(timestamps);

CatSchema.index({ createdAt: 1, updatedAt: 1 });

export const Cat = mongoose.model('Cat', CatSchema);
export const CatTC = composeWithMongoose(Cat);
