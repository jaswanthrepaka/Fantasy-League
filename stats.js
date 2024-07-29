let PStats=document.querySelector('.pname');
$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
      let searchText = $('#searchText').val();
      stats(searchText);
      e.preventDefault();
    });
  });
function stats(searchText){
	
	console.log(searchText);
	fetch("https://cricapi.com/api/playerFinder?apikey=ttDgV9DLXMf359grp0bWJ8lCR4n2&name="+searchText)
	        .then((response) => {return response.json();})
	        .then((data) =>{	
              console.log(data);
              /*var data = {
                0:{
                  "pid": 35320,
                  "fullName": "Sachin Ramesh Tendulkar",
                  "name": "Sachin Tendulkar"
                },
                1:{
                  "pid": 1148776,
                  "fullName": "Arjun Sachin Tendulkar",
                  "name": "Arjun Tendulkar"
                },
                2:{
                    "pid": 35319,
                    "fullName": "Sachin Rana",
                    "name": "Sachin Rana"
                }
            };*/
              let pdata="",p1;
              for(let element in data.data) {
                  p1=data.data[element].name;
                  pdata+='<div id="plname"><a onclick="plselected('+data.data[element].pid+')"  href="#" style="text-decoration: none;color: black;">'+p1+'</a></div>';
              };
              PStats.innerHTML=pdata;
	        })
		   .catch((err) =>{ console.log("the error:"+err);});
}
let pbio=document.querySelector('.pbio');

function plselected(pid){
    console.log(pid);
    fetch("https://cricapi.com/api/playerStats?apikey=ttDgV9DLXMf359grp0bWJ8lCR4n2&pid="+pid)
	    .then((response) => {return response.json();})
	    .then((data) =>{
            console.log(data);
            let bio="";
            //bio+=data.data['bowling']['listA']['Inns'];
            /*var data={
                "pid": 35320,
                "profile": "\n\nSachin Tendulkar has been the most complete batsman of his time, the most prolific runmaker of all time, and arguably the biggest cricket icon the game has ever known. His batting was based on the purest principles: perfect balance, economy of movement, precision in stroke-making, and that intangible quality given only to geniuses - anticipation. If he didn't have a signature stroke - the upright, back-foot punch comes close - it's because he was equally proficient at each of the full range of orthodox shots (and plenty of improvised ones as well) and can pull them out at will.  \n\n",
                "imageURL": "https://www.cricapi.com/playerpic/35320.jpg",
                "battingStyle": "Right-hand bat",
                "bowlingStyle": "Right-arm offbreak, Legbreak googly",
                "majorTeams": "India,Asia XI,Mumbai,Mumbai Indians,Yorkshire",
                "currentAge": "44 years 186 days",
                "born": "April 24, 1973, Bombay (now Mumbai), Maharashtra",
                "fullName": "Sachin Ramesh Tendulkar",
                "name": "Sachin Tendulkar",
                "country": "India",
                "playingRole": "Top-order batsman",
                "v": "2",
                "data": {
                  "bowling": {
                    "listA": {
                      "10": "0",
                      "5w": "2",
                      "4w": "4",
                      "SR": "50.8",
                      "Econ": "4.97",
                      "Ave": "42.17",
                      "BBM": "5/32",
                      "BBI": "5/32",
                      "Wkts": "201",
                      "Runs": "8478",
                      "Balls": "10230",
                      "Inns": "",
                      "Mat": "551"
                    },
                    "firstClass": {
                      "10": "0",
                      "5w": "0",
                      "4w": "",
                      "SR": "107.1",
                      "Econ": "3.45",
                      "Ave": "61.74",
                      "BBM": "",
                      "BBI": "3/10",
                      "Wkts": "71",
                      "Runs": "4384",
                      "Balls": "7605",
                      "Inns": "",
                      "Mat": "310"
                    },
                    "T20Is": {
                      "10": "0",
                      "5w": "0",
                      "4w": "0",
                      "SR": "15.0",
                      "Econ": "4.80",
                      "Ave": "12.00",
                      "BBM": "1/12",
                      "BBI": "1/12",
                      "Wkts": "1",
                      "Runs": "12",
                      "Balls": "15",
                      "Inns": "1",
                      "Mat": "1"
                    },
                    "ODIs": {
                      "10": "0",
                      "5w": "2",
                      "4w": "4",
                      "SR": "52.2",
                      "Econ": "5.10",
                      "Ave": "44.48",
                      "BBM": "5/32",
                      "BBI": "5/32",
                      "Wkts": "154",
                      "Runs": "6850",
                      "Balls": "8054",
                      "Inns": "270",
                      "Mat": "463"
                    },
                    "tests": {
                      "10": "0",
                      "5w": "0",
                      "4w": "0",
                      "SR": "92.1",
                      "Econ": "3.52",
                      "Ave": "54.17",
                      "BBM": "3/14",
                      "BBI": "3/10",
                      "Wkts": "46",
                      "Runs": "2492",
                      "Balls": "4240",
                      "Inns": "145",
                      "Mat": "200"
                    }
                  },
                  "batting": {
                    "listA": {
                      "50": "114",
                      "100": "60",
                      "St": "0",
                      "Ct": "175",
                      "6s": "",
                      "4s": "",
                      "SR": "",
                      "BF": "",
                      "Ave": "45.54",
                      "HS": "200*",
                      "Runs": "21999",
                      "NO": "55",
                      "Inns": "538",
                      "Mat": "551"
                    },
                    "firstClass": {
                      "50": "116",
                      "100": "81",
                      "St": "0",
                      "Ct": "186",
                      "6s": "",
                      "4s": "",
                      "SR": "",
                      "BF": "",
                      "Ave": "57.84",
                      "HS": "248*",
                      "Runs": "25396",
                      "NO": "51",
                      "Inns": "490",
                      "Mat": "310"
                    },
                    "T20Is": {
                      "50": "0",
                      "100": "0",
                      "St": "0",
                      "Ct": "1",
                      "6s": "0",
                      "4s": "2",
                      "SR": "83.33",
                      "BF": "12",
                      "Ave": "10.00",
                      "HS": "10",
                      "Runs": "10",
                      "NO": "0",
                      "Inns": "1",
                      "Mat": "1"
                    },
                    "ODIs": {
                      "50": "96",
                      "100": "49",
                      "St": "0",
                      "Ct": "140",
                      "6s": "195",
                      "4s": "2016",
                      "SR": "86.23",
                      "BF": "21367",
                      "Ave": "44.83",
                      "HS": "200*",
                      "Runs": "18426",
                      "NO": "41",
                      "Inns": "452",
                      "Mat": "463"
                    },
                    "tests": {
                      "50": "68",
                      "100": "51",
                      "St": "0",
                      "Ct": "115",
                      "6s": "69",
                      "4s": "",
                      "SR": "",
                      "BF": "",
                      "Ave": "53.78",
                      "HS": "248*",
                      "Runs": "15921",
                      "NO": "33",
                      "Inns": "329",
                      "Mat": "200"
                    }
                  }
                }
            };*/
            bio+='<div id="bio"><div id="head"><img src="'+data.imageURL+'" alt="Profile"><br><span>'+data.name+'</span><br><span>'+data.country+'</span></div><br>';
            bio+='<h3>PERSONAL INFO</h3><div id="pinfo">Born<span>'+data.born+'</span><br><hr>Age<span>'+data.currentAge +'</span><br><hr>Role<span>'+data.playingRole+'</span><br><hr>Batting Style<span>'+data.battingStyle+'</span><br><hr>Bowling Style<span>'+data.bowlingStyle+'</span></div><br>';
            bio+='<h3>PROFILE</h3><div id="ppro"><span>'+data.profile+'</span></div><br><h3>TEAMS</h3><div id="pteams"><span>'+data.majorTeams+'</span></div><br>';
            for(let key in data.data){
              if(key=='bowling'){
                let ar=['Mat','Inns','Balls','Runs','Wkts','BBI','BBM','Ave','Econ','SR','4w','5w','10'];
                bio+='<h3>BOWLING</h3><div id="tabl"><table><thead><tr><th>Bowling</th><th>ListA</th><th>FirstClass</th><th>T20Is</th><th>ODIs</th><th>Tests</th></tr></thead><tbody>';  
                
                for (let i = 0; i < ar.length; i++){
                  bio+='<tr><td>'+ar[i]+'</td>';
                  for(let key1 in data.data[key]){
                    //console.log(data.data[key][key1][ar[i]].length);
                  
                    if (typeof data.data[key][key1][ar[i]]!=="undefined" && data.data[key][key1][ar[i]]!==null) {
                      bio+='<td>'+data.data[key][key1][ar[i]]+'</td>';
                    }
                    else{
                      bio+='<td>0</td>';
                    }
                  }
                  bio+='</tr>';
                }
                bio+='</tbody></table></div>';
              }
              if(key=='batting'){
                let ar1=['Mat','Inns','NO','Runs','HS','Ave','BF','SR','4s','6s','Ct','St','100','50'];
                bio+='<h3>BATTING</h3><div id="tabl"><table><thead><tr><th>Batting</th><th>ListA</th><th>FirstClass</th><th>T20Is</th><th>ODIs</th><th>Tests</th></tr></thead><tbody>';
                for (let i = 0; i < ar1.length; i++) {
                  bio+='<tr><td>'+ar1[i]+'</td>';
                  for(let key1 in data.data[key]){
                    if (typeof data.data[key][key1][ar1[i]]!=="undefined" && data.data[key][key1][ar1[i]]!==null) {
                      bio+='<td>'+data.data[key][key1][ar1[i]]+'</td>';
                    }
                    else{
                      bio+='<td>0</td>';
                    }
                  }
                  bio+='</tr>';
                }
                bio+='</tbody></table></div>';
              } 
            }
            bio+='</div>';
            pbio.innerHTML=bio;
        })
        .catch((err) =>{ console.log("the error:"+err);});
}