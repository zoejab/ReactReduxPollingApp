const router = require('express').Router();

const handle = require('../handlers');

//all polls
router.route('/')
.get(handle.showPolls)
.post(handle.createPoll); 

//individual polls
router.route('/:id')
.get(handle.getPoll)
.post(handle.vote)
.delete(handle.deletePoll);

module.exports = router;