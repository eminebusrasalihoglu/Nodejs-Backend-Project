const mycards = [{ id: "111", word: "dog", mean: "köpek", sentence: "the dog is faster than the turtle", image: "dog.jpg" }];

module.exports = class Card {
    constructor(word, mean, image, sentence) {
        this.id = Math.floor(Math.random() * 99999) + 1;
        this.word = word;
        this.mean = mean;
        this.image = image;
        this.sentence = sentence;
    }

    saveCard() {
        mycards.push(this);
    }

    static getAll() {
        return mycards;
    }
    static getById(id) {
        const card = mycards.find(i => i.id === id);

        return card;
    }
}