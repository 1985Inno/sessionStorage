
var track = [];

function myLoad(){
	let htmlSelect = document.getElementById("trackList");
	htmlSelect.style.visibility = "hidden";

	if(sessionStorage.getItem("hasCodeRunBefore") === null){
		sessionStorage.setItem("tracks", JSON.stringify(track));
		sessionStorage.setItem("hasCodeRunBefore", true);
	} else{
		track = JSON.parse(sessionStorage.getItem("tracks"));
		let i = 0;
		track.forEach(function(t){
			
			let optItem = document.createElement("option");
			optItem.innerHTML = t.name.artist;
			optItem.value = i;
			i = i + 1;
			htmlSelect.appendChild(optItem);
        });
        if (i > 0) {
        	htmlSelect.style.visibility = "visible";
        }
	}
}

function Track(artist,title,album,genre,favourite){
	this.name = {
		artist: artist,
		title: title
	};
	this.album = album;
	this.genre = genre;
	this.favourite = favourite;
}

function addTrack(){
	track = JSON.parse(sessionStorage.getItem("tracks"));
	let newTrack = new Track(
		document.getElementById("artist").value,
		document.getElementById("title").value,
		document.getElementById("album").value,
		document.getElementById("genre").value,
		document.getElementById("favourite").value	
		);
	track.push(newTrack);
	sessionStorage.setItem("tracks", JSON.stringify(track));
}

function ChangeActiveUser(indexOfTrackObj){
	track[indexOfTrackObj].details = function(){
		alert(
			" This song was Sang by " +
			" " +
            this.name.artist + 
            " the title of the song is " +
            this.name.title +
            " the album is called " +
            this.album +
            " its a " +
            this.genre +
            " song " +
            this.favourite +
            " is his favourite Assigment " 
			);
	};
	track[indexOfTrackObj].details();
}