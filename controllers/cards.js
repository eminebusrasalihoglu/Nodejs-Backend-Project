const Card = require('../models/card');
exports.getCard = (req, res, next) => {

    const mycards = Card.getAll();
    res.render('card', { title: 'Lingua Card', mycard: mycards });
}
exports.getCardDetails = (req, res, next) => {

    const cardId = req.params.cardId;
    const card = Card.getById(cardId);

    res.render('editCard', {
        title: card.word,
        card: card
    });

}
exports.getEditCard = (req, res, next) => {
    const cardId = req.params.cardId;
    const card = Card.getById(cardId);

    res.render('cardDetail', {
        title: card.word,
        card: card
    });
}
exports.postEditCard = (req, res, next) => {
    const mycards = Card.getAll();
    res.render('cardlist', { title: 'Lingua Card', mycard: mycards });
}
exports.postAddCard = (req, res, next) => {
    res.redirect('/');
}
exports.getAddCard = (req, res, next) => {
    res.render('add', { title: 'Lingua ' });
}
exports.postAddCard = (req, res, next) => {

    const card = new Card(req.body.word,
        req.body.mean,
        req.body.image,
        req.body.sentence);
    card.saveCard();

    res.redirect('/');
}

