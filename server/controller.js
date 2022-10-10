const db = require('./db.js');

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

    
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ['when you wake up at 3am, and it is quiet, and you feel content, that is me connecting with you telepathically', 'you will find me today. probably in your trunk.', 'listen to Hotel Books for the feels while coding.', 'if your soul was in a fortune cookie I would break it open. then eat it. gobble it all up. your soul. in my belly. then you can break out like Alien. what a fantasy.'];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune); 
    }

}