const mongoose = require('mongoose');

var videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'title name can\'t be empty'
    },
    url: {
        type: String,
        required: 'Url can\'t be empty',
        unique: true
    },
    description: {
        type: String,
        
    }
    
});

mongoose.model('Video', videoSchema);