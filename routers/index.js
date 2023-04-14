const router = require('express').Router();
const PhotoController = require('../controllers/photoControllers');

router.get('/', PhotoController.GetAllPhotos);
router.get('/:id', PhotoController.getOnePhotoById);
router.post('/', PhotoController.createPhoto);
router.put('/:id', PhotoController.updatePhotoById);
router.delete('/:id', PhotoController.deletePhotoById);

module.exports = router;
