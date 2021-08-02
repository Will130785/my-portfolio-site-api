const router = require('express').Router()
const ctrl = require(`${global.APP_ROOT}/controllers/index`)

router.get('/blogs', ctrl.blogCtrl.getBlogs)
router.get('/current', ctrl.currentCtrl.getAllCurrent)
router.get('/experience', ctrl.experienceCtrl.getAllExperience)
router.get('/freelance', ctrl.freelanceCtrl.getAllFreelance)
router.get('/projects', ctrl.projectsCtrl.getAllProjects)

module.exports = router
