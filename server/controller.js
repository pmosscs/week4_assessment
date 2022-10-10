const songs = require('./db.json');
let newId = 4;

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
    },

    addSong: (req, res) => {
        let { song, artist } = req.body
        let newSong = {
            id: newId,
            song,
            artist
        }
        songs.push(newSong)
        console.log(songs);
        res.status(200).send(songs)
        newId++
    },

    changeTitle: (req, res) => {
        let existingSong = req.params.song;
        let newSong = req.body.song;
        
        for (let i = 0; i < songs.length; i++) {
            if (songs[i].song === existingSong) {
                //console.log('found it!')
                songs[i].song = newSong;
                res.status(200).send(songs);
                console.log(songs);
                return;
            } 
            
        }
        res.status(400).send('Song not found');
    },

    deleteSong: (req, res) => {
        let songTitle = req.params.song;
        for (let i = 0; i < songs.length; i++) {
            if (songs[i].song === songTitle) {
                songs.splice(i, 1);
                res.status(200).send(songs)
                console.log(songs);
                return;
            }
        }
        res.status(400).send('song not found');
    }

}

