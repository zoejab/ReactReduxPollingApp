module.exports = {
    ...require('./poll')
}

module.exports.errors = (err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || 'Something went wrong'
    });
};

module.exports.notFound = (req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;

    next(err);
};