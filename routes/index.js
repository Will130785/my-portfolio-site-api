const router = require('express').Router()
const ctrl = require(`${global.APP_ROOT}/controllers/index`)

// GET ROUTES
router.get('/blogs', ctrl.blogCtrl.getBlogs)
router.get('/current', ctrl.currentCtrl.getAllCurrent)
router.get('/experience', ctrl.experienceCtrl.getAllExperience)
router.get('/freelance', ctrl.freelanceCtrl.getAllFreelance)
router.get('/projects', ctrl.projectsCtrl.getAllProjects)

// POST ROUTES
router.post('/blogs', ctrl.blogCtrl.createBlog)
router.post('/current', ctrl.currentCtrl.createCurrent)
router.post('/experience', ctrl.experienceCtrl.createExperience)
router.post('/freelance', ctrl.freelanceCtrl.createFreelance)
router.post('/projects', ctrl.projectsCtrl.createProject)

// DELETE ROUTES
router.delete('/blogs/:id', ctrl.blogCtrl.deleteBlog)
router.delete('/current/:id', ctrl.currentCtrl.deleteCurrent)
router.delete('/experience/:id', ctrl.experienceCtrl.deleteExperience)
router.delete('/freelance/:id', ctrl.freelanceCtrl.deleteFreelance)
router.delete('/projects/:id', ctrl.projectsCtrl.deleteProject)

module.exports = router
