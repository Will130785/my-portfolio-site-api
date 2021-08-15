const router = require('express').Router()
const ctrl = require(`${global.APP_ROOT}/controllers/index`)
const passport = require('passport')

// GET ROUTES
router.get('/blogs', passport.authenticate('jwt', { session: false }), ctrl.blogCtrl.getBlogs)
router.get('/current', passport.authenticate('jwt', { session: false }), ctrl.currentCtrl.getAllCurrent)
router.get('/experience', passport.authenticate('jwt', { session: false }), ctrl.experienceCtrl.getAllExperience)
router.get('/freelance', passport.authenticate('jwt', { session: false }), ctrl.freelanceCtrl.getAllFreelance)
router.get('/projects', passport.authenticate('jwt', { session: false }), ctrl.projectsCtrl.getAllProjects)

// POST ROUTES
router.post('/blogs', passport.authenticate('jwt', { session: false }), ctrl.blogCtrl.createBlog)
router.post('/current', passport.authenticate('jwt', { session: false }), ctrl.currentCtrl.createCurrent)
router.post('/experience', passport.authenticate('jwt', { session: false }), ctrl.experienceCtrl.createExperience)
router.post('/freelance', passport.authenticate('jwt', { session: false }), ctrl.freelanceCtrl.createFreelance)
router.post('/projects', passport.authenticate('jwt', { session: false }), ctrl.projectsCtrl.createProject)

// PUT ROUTES
router.put('/blogs/:id', passport.authenticate('jwt', { session: false }), ctrl.blogCtrl.updateBlog)
router.put('/current/:id', passport.authenticate('jwt', { session: false }), ctrl.currentCtrl.updateCurrent)
router.put('/experience/:id', passport.authenticate('jwt', { session: false }), ctrl.experienceCtrl.updateExperience)
router.put('/freelance/:id', passport.authenticate('jwt', { session: false }), ctrl.freelanceCtrl.updateFreelance)
router.put('/projects/:id', passport.authenticate('jwt', { session: false }), ctrl.projectsCtrl.updateProject)

// DELETE ROUTES
router.delete('/blogs/:id', passport.authenticate('jwt', { session: false }), ctrl.blogCtrl.deleteBlog)
router.delete('/current/:id', passport.authenticate('jwt', { session: false }), ctrl.currentCtrl.deleteCurrent)
router.delete('/experience/:id', passport.authenticate('jwt', { session: false }), ctrl.experienceCtrl.deleteExperience)
router.delete('/freelance/:id', passport.authenticate('jwt', { session: false }), ctrl.freelanceCtrl.deleteFreelance)
router.delete('/projects/:id', passport.authenticate('jwt', { session: false }), ctrl.projectsCtrl.deleteProject)

// AUTH ROUTES
router.post('/register', ctrl.authCtrl.registerUser)
router.post('/login', ctrl.authCtrl.loginUser)

// WEBSITE ROUTES
router.get('/website/blogs', ctrl.websiteCtrl.getBlogsWebsite)
router.get('/website/current', ctrl.websiteCtrl.getCurrentWebsite)
router.get('/website/freelance', ctrl.websiteCtrl.getFreelanceWebsite)
router.get('/website/projects', ctrl.websiteCtrl.getProjectsWebsite)

module.exports = router
