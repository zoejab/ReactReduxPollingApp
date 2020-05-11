const db = require('../models');

exports.showPolls = async (req, res, next) => {
    try {
        const polls = await db.Poll.find();

        res.status(200).json(polls);
    } catch(err) {
        err.status = 400;
        next(err);
    }
};

exports.createPoll = async (req, res, next) => {
    try {
        const { question, options } = req.body;
        const poll = await db.Poll.create({
            question,
            options: options.map(option => ({
                option, votes: 0 
            }))
        });

        res.status(201).json(poll);
    } catch(err) {
        err.status = 400;
        next(err);
    }
};

exports.getPoll = async (req, res, next) => {
    try {
        const { id } = req.params;

        const poll = await db.Poll.findById(id);

        if (!poll) throw new Error('No poll found');

        res.status(200).json(poll);
    } catch(err) {
        err.status = 400;
        next(err);
    }
};

exports.deletePoll = async (req, res, next) => {
    try {
        const { id } = req.params;

        const poll = await db.Poll.findById(id);
        if (!poll) throw new Error('No Poll found');
        
        await poll.remove();

        res.status(202).json(poll);
    } catch(err) {
        err.status = 400;
        next(err);
    }
};

exports.vote = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { answer } = req.body;

        if (answer) {
            const poll = await db.Poll.findById(id);
            if (!poll) throw new Error('No Poll found');
            
            const vote = poll.options.map(
                option => {
                    if (option.option === answer) {
                        return {
                            option: option.option,
                            _id: option._id,
                            votes: option.votes + 1
                        } 
                    } else {
                        return option;
                    }
                }
            )
            poll.options = vote;
            await poll.save();
            return res.status(202).json(poll);
        }
    } catch(err) {
        err.status = 400;
        next(err);
    }
};