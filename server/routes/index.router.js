const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlVideo = require('../controllers/video.controller');
const jwtHelper = require('../config/jwtHelper');


router.post('/register', ctrlUser.register);
router.get('/list',ctrlUser.list);
router.delete('/delete/:email',ctrlUser.deleteUser);
router.put('/update',ctrlUser.updateUser);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);

router.get('/video/:id',ctrlVideo.listVideo);
router.get('/videos',ctrlVideo.listVideos);
router.post('/addVideo',ctrlVideo.addVideo);
router.put('/updateVideo',ctrlVideo.updateVideo);
router.delete('/deleteVideo/:id',ctrlVideo.deleteVideo);


module.exports = router;



