
const complimentBtn = document.getElementById("complimentButton")

const fortuneBtn = document.getElementById("fortuneButton");

const form = document.querySelector('#going-out-of-style');

const changeForm = document.getElementById('was-a-class-guy-till-you-complained');

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

/*********** SONG SECTION **************/


/* POST */
////// POST TO BACK END
const addSong = (body) => {
    axios.post("http://localhost:4000/api/songs", body)
}

///// POST EVENT HANDLER
const submitSong = (event) => {
    event.preventDefault()

    let song = document.querySelector('#song-name')
    let artist = document.querySelector('#artist-name')

    let songObj = {
        song: song.value,
        artist: artist.value  
    }

    addSong(songObj);

    song.value = ''
    artist.value = ''

}

/* PUT */
////// PUT TO BACK END
const changeTitle = (id, change) => {
    axios.put(`http://localhost:4000/api/songs/${id}`, change).then(res => console.log(res))
}

////// PUT EVENT HANDLER
const changeSubmit = (event) => {
    event.preventDefault();


    let songName = document.querySelector('#current-title').value;
    let newName = document.querySelector('#updated-title').value;

    let updatedObj = {
        song: newName
    }

    changeTitle(songName, updatedObj);

    songName.value = ''
    newName.value = ''

}

/* DELETE */ 
////// TO BACK END


////// DELETE EVENT HANDLER


complimentBtn.addEventListener('click', getCompliment)

fortuneBtn.addEventListener('click', getFortune);

form.addEventListener('submit', submitSong);

changeForm.addEventListener('submit', changeSubmit)