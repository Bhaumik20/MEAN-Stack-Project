const mongoose = require('mongoose');

const Video = mongoose.model('Video');

module.exports.addVideo = (req, res) => {
    var video = new Video();
    video.title = req.body.title;
    video.url = req.body.url;
    video.description = req.body.description;
    video.save((err, doc) => {

        if (err) {
            console.log(err);
            res.send(err);
        }

        else {
            res.send(doc);
        }

    });
}

module.exports.listVideos = (req, res) => {
    Video.find(function (err, videos) {
        if (err) {
            res.status(400);
            res.send("Unable to find names");
        }
        else {
            console.log("All videos returned");
            res.send(videos);
        }
    });
}

module.exports.listVideo = (req, res) => {
    Video.findById(req.params.id, function (err, video) {
        if (err) {
            res.status(400);
            res.send("Unable to find name");
        }
        else {
            console.log("video returned");
            res.send(video);
        }
    });
}

module.exports.updateVideo = (req, res) => {
    Video.findById(req.body._id, function (err, video) {
        if (err) {
            console.log("No video with given id found!");
            res.status(400);
            res.send("No video with given id found!");
        }
        if(req.body.title)
            video.title = req.body.title;
        
        if(req.body.description)    
            video.description = req.body.description;
        
        if(req.body.url)    
            video.url = req.body.url;

        video.save(function (err) {
            if (err) {
                console.log("Unable to update video");
                res.status(400);
                res.send("Unable to video employee");
            }
            else {
                console.log("video  updated successfully");
                res.send({ "message": "Video  updated successfully" });
            }
        });

    });
}

module.exports.deleteVideo = (req, res) => {
    Video.findById(req.params.id, function (err, video) {
        if (err) {
            res.status(400);
            res.send("Unable to find a video");
        }
        else {
            video.remove(function (err) {
                if (err) {
                    console.log("Unable to remove video");
                    res.status(400);
                    res.send("Unable to remove video");
                }
                console.log("Video removed!");
                res.send({ "message": "Video removed!" });
            });
        }
    });
}