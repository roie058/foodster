const mongoose = require('mongoose');
const Review = require('./review');
const Schema = mongoose.Schema;



const ImageSchema = new Schema({
    url: String,
    filename: String
});
ImageSchema.virtual('thumb').get(function() {
    return this.url.replace('/upload', '/upload/w_200');
})
const opts = { toJSON: { virtuals: true } };
const restaurantSchema = new Schema({

    Name: String,
    Category: String,
    description: String,
    geometry: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },

    location: String,
    images: [ImageSchema],
    Menu: Array,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }]

}, opts);

restaurantSchema.virtual('properties.popUpMarkup').get(function() {
    return `<strong><a href="/restaurants/${this.id}">${this.Name}</a></strong>
    <p>${this.description.substring(0,30)}...</p>`
});
//<strong><a href='/restaurants/${this.id}>${this.Name}</a></strong>
//  <p>${this.description.substring(0,30)}...</p>
restaurantSchema.post('findOneAndDelete', async function(doc) {
    if (doc) {
        await Review.deleteMany({
            id: {
                $in: doc.reviews
            }
        })
    }
});


module.exports = mongoose.model('Restaurant', restaurantSchema);