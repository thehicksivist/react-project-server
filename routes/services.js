const express = require('express');
const Service = require('../models/service');
// Service model to be created
const router = express.Router();

// POST /services (C)
router.post('/', (req, res) => {
    Service.create(req.body).then(
      service => res.send(service)
    ).catch(
      error => res.sendStatus(500).json({ error: error.message })
    )
  })
  // if the above were split into middleware, the below would be all that needed to be written here,
  // you would just need to add import postService from './middleware/postService'
  // router.post('/', postService)

// GET /services (R)
router.get('/', (req, res) => {
  Service.find().then(
    services => res.json(services)
  ).catch(
    error => res.sendStatus(500).json({ error: error.message })
  )
})

// UPDATE /services/:id (U)
router.put('/:id', (req,res) => {
    // Service.find......
    // BELOW = CATCH IF CANNOT FIND SERVICE
    //   ).catch(
    //     error => res.sendStatus(500).json({ error: error.message })
    //   )
})


// DELETE /services/:id (D)
router.delete('/:id', (req, res) => {
  Service.findByIdAndRemove(req.params.id).then(
    () => res.sendStatus(204)
  ).catch(
    error => res.sendStatus(500).json({ error: error.message })
  )
})


module.exports = router