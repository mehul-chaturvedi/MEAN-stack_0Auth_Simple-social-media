const express = require('express');
const postController = require('../controller/postController')
let commentController = require('../controller/commentController');

let router = express.Router();

router.post('/createpost/:id', postController.createPost);
router.put('/updatepost', postController.updatePost);
router.get('/getposts', postController.getPosts);
router.get('/getpost/:id', postController.getPost);
router.delete('/deletepost/:id', postController.deletePost);
router.get('/getcomments/:id', commentController.getComments);
router.post('/createcomment/:id', commentController.createComment);

module.exports = router;