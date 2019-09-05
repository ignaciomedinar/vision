const express = require('express')
const router = express.Router()
const Project = require('../models/project')

// All proyects
router.get('/', async (req,res) => {
  let searchOptions = {}
  if (req.query.name != null && req.query.name !== '') {
    searchOptions.name = new RegExp(req.query.name, 'i')
  }
  try {
    const projects = await Project.find(searchOptions)
    res.render('projects/index', {
      projects: projects,
      searchOptions: req.query
    })
  } catch {
    res.redirect('/')
  }
})

// New proyect
router.get('/new', (req,res) => {
  res.render('projects/new',{ project: new Project() })
})

// Create Proyect Route
router.post('/', async (req,res) => {
  const project = new Project({
    name: req.body.name,
    total_value: req.body.total_value,
    utility: req.body.utility
  })
  try {
   const newProject = await project.save()
   // res.redirect(`projects/${newProject.id}`)
   res.redirect(`projects`)
  } catch {
    res.render('projects/new',{
      name: name, /////////////////////////quí hay error minuto 19:40 Author's intex course 2
      total_value: total_value,
      utility: utility,
      errorMessage: 'Error creating Project'
    })
  }
})

module.exports = router
