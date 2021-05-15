/**
 * @author Rajitha Rajasooriya
 * @email [rajitharajasooriya@hotmail.com]
 * @create date 2021-05-15 15:00:25
 * @modify date 2021-05-15 15:00:25
 * @desc [User image model]
 */

const mongoose = require('mongoose');

const userImagesSchema = new mongoose.Schema({
  userId: {
    type: String,
    //required: true //this is removed since this implementation is only for signgle one user
  },
  images: [{
    id: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    },
    order: {
      type: Number,
      required: true
    }
  }]
}, {
  collection: 'userImages',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('userImages', userImagesSchema);
