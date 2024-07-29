
let Schedule=document.querySelector('.ldemo'); 
let UpSchedule=document.querySelector('.rdemo');
let mydata=CurrentMatches();

function CurrentMatches(){
	fetch("https://cricapi.com/api/matches?apikey=ttDgV9DLXMf359grp0bWJ8lCR4n2")
	.then((response) => {return response.json();})
	.then((data) =>{
		//console.log(data);
		/*var matches ={
			0: {
			  "unique_id": 1234916,
			  "date": "2020-11-13T00:00:00.000Z",
			  "dateTimeGMT": "2020-11-13T21:30:00.000Z",
			  "team-1": "Central Districts",
			  "team-2": "Northern Districts",
			  "toss_winner_team": "Northern Districts",
			  "squad": false,
			  "winner_team":"",
			  "matchStarted": false,
			  "type": ""
			},
			1:{
			  "unique_id": 1234917,
			  "date": "2020-11-13T00:00:00.000Z",
			  "dateTimeGMT": "2020-11-13T21:30:00.000Z",
			  "team-1": "Wellington",
			  "team-2": "Auckland",
			  "squad": true,
			  "toss_winner_team": "Wellington",
			  "matchStarted": true,
			  "winner_team":"Auckland",
			  "type": ""
			},
			2:{
      "unique_id": 1211672,
      "date": "2020-11-14T00:00:00.000Z",
      "dateTimeGMT": "2020-11-14T10:00:00.000Z",
      "team-1": "Multan Sultans",
      "team-2": "Karachi Kings",
      "type": "Twenty20",
      "squad": true,
      "toss_winner_team": "Karachi Kings",
      "matchStarted": true
    },
    3:{
      "unique_id": 1211673,
      "date": "2020-11-14T00:00:00.000Z",
      "dateTimeGMT": "2020-11-14T15:00:00.000Z",
      "team-1": "Lahore Qalandars",
      "team-2": "Peshawar Zalmi",
      "type": "Twenty20",
      "squad": true,
      "toss_winner_team": "Lahore Qalandars",
      "winner_team": "Lahore Qalandars",
      "matchStarted": true
    }
		};*/
		let mydata="";
		let team1,team2;
		let len =data.matches.length;
		for(let element in data.matches) {
			for (let key in data.matches[element]) {
				if (key=="team-1") {
					team1= data.matches[element][key];
				}
				if (key=="team-2") {
					team2 =data.matches[element][key];
				}	
			}
			mydata+='<div id="sch"><a onclick="mtchselected('+data.matches[element].unique_id+')" href="#" style="text-decoration:none;"><br><span id="tle">'+team1+' vs '+team2+'</span></a><br><div id="to">';
			if (data.matches[element].matchStarted){
				mydata+='<span><i>' +data.matches[element].toss_winner_team+" won the toss</i></span><br>";
				if (data.matches[element].winner_team){
					mydata+='<span><i>'+ data.matches[element].winner_team+" won the match</i></span>";
				}
			}
			else{
				mydata+='<span>' +data.matches[element].dateTimeGMT.slice(0,10)+'</span>';
				mydata+='<span style="margin-left:340px;">'+ data.matches[element].dateTimeGMT.slice(11,16)+'</span>';
			}
			mydata+='</div></div>';
		};
		Schedule.innerHTML=mydata;
	})
	.catch((err) =>{ console.log("the error:"+err);});


	fetch("https://cricapi.com/api/cricket?apikey=ttDgV9DLXMf359grp0bWJ8lCR4n2")
	.then((response) => {return response.json();})
	.then((data) =>{	
		//console.log(data);
		/*var data={
			0:{
				"unique_id": "1234916",
				"description": "Central Districts 161/4 * v Northern Districts 347/10 ",
				"title": "Central Districts 161/4 * v Northern Districts 347/10 "
			  },
			 1: {
				"unique_id": "1234917",
				"description": "Wellington 312/2 * v Auckland 279/10 ",
				"title": "Wellington 312/2 * v Auckland 279/10 "
			  },
			 2: {
				"unique_id": "1234918",
				"description": "Otago 168/10  v Canterbury 424/4 *",
				"title": "Otago 168/10  v Canterbury 424/4 *"
			  }
			};*/
		let mydata1="";
		let str,i;
		for(let element in data.data) {
			for (let key in data.data[element]) {
				if (key=="description") {
					str =data.data[element][key];
					i=str.indexOf(" v ");
					team1=str.slice(0,i) ;
					team2=str.slice(i+3,str.length);
				}
			}
			mydata1+='<div id="usch"><br><span><a onclick="mtchselected('+data.data[element].unique_id+')" href="#" style="text-decoration:none;">'+team1+'</a><br><br></span><span>'+team2+'</span></div>' ;
		}
		UpSchedule.innerHTML=mydata1;
	})
	.catch((err) =>{ console.log("the error:"+err);});
}

//function UpcomingMatches(){}

function mtchselected(id){
	sessionStorage.setItem('mtchid',id);
	console.log(id);
	window.location = 'Scorecard.html';
	return false;
  }

