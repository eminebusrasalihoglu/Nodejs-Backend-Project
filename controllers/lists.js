
exports.getList = (req, res, next) => {
    res.render('list.pug', { title: 'Lingua List' });
}