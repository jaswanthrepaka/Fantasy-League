let Squad=document.querySelector('.squad');
let Scorecard=document.querySelector('.scorecard');
getScore();
 
function getScore(){
  var mtchid=sessionStorage.getItem('mtchid');
    fetch("https://cricapi.com/api/fantasySummary?apikey=ttDgV9DLXMf359grp0bWJ8lCR4n2&unique_id="+mtchid)
	.then((response) => {return response.json();})
	.then((data) =>{
        console.log(data);
        /*var data={
            data:{
                "man-of-the-match": "Moeen Ali",
                "team": {
                  0:{
                    "name": "India",
                    "players": {
                      0:{
                        "pid": "237095",
                        "name": "M Vijay"
                      },
                      1:{
                        "pid": "28763",
                        "name": "G Gambhir"
                      },
                      2:{
                        "pid": "32540",
                        "name": "CA Pujara"
                      },
                      3:{
                        "pid": "253802",
                        "name": "V Kohli"
                      },
                      4:{
                        "pid": "31107",
                        "name": "A Mishra"
                      },
                      5:{
                        "pid": "277916",
                        "name": "AM Rahane"
                      },
                      6:{
                        "pid": "26421",
                        "name": "R Ashwin"
                      },
                      7:{
                        "pid": "279810",
                        "name": "WP Saha"
                      },
                      8:{
                        "pid": "234675",
                        "name": "RA Jadeja"
                      },
                      9:{
                        "pid": "376116",
                        "name": "UT Yadav"
                      },
                      10:{
                        "pid": "481896",
                        "name": "Mohammed Shami"
                      }
                    }
                  },
                  1:{
                    "name": "England",
                    "players": {
                      0:{
                        "pid": "11728",
                        "name": "AN Cook"
                      },
                      1:{
                        "pid": "632172",
                        "name": "H Hameed"
                      },
                      2:{
                        "pid": "303669",
                        "name": "JE Root"
                      },
                      3:{
                        "pid": "521637",
                        "name": "BM Duckett"
                      },
                      4:{
                        "pid": "8917",
                        "name": "MM Ali"
                      },
                      5:{
                        "pid": "311158",
                        "name": "BA Stokes"
                      },
                      6:{
                        "pid": "297433",
                        "name": "JM Bairstow"
                      },
                      7:{
                        "pid": "247235",
                        "name": "CR Woakes"
                      },
                      8:{
                        "pid": "244497",
                        "name": "AU Rashid"
                      },
                      9:{
                        "pid": "349853",
                        "name": "ZS Ansari"
                      },
                      10:{
                        "pid": "10617",
                        "name": "SCJ Broad"
                      }
                    }
                  }
                },
                "batting": {
                  0:{
                    "title": "England 1st Innings",
                    "scores": {
                      0:{
                        "pid": "11728",
                        "batsman": "AN Cook (c)",
                        "dismissal-info": "lbw b Jadeja",
                        "R": 21,
                        "B": 47,
                        "4s": 2,
                        "6s": 0,
                        "SR": 44,
                        "dismissal": "lbw",
                        "dismissal-by": {
                          "pid": "234675",
                          "name": "RA Jadeja"
                        }
                      },
                      1:{
                        "pid": "632172",
                        "batsman": "H Hameed",
                        "dismissal-info": "lbw b Ashwin",
                        "R": 31,
                        "B": 82,
                        "4s": 6,
                        "6s": 0,
                        "SR": 37,
                        "dismissal": "lbw",
                        "dismissal-by": {
                          "pid": "26421",
                          "name": "R Ashwin"
                        }
                      },
                      2:{
                        "pid": "303669",
                        "batsman": "JE Root",
                        "dismissal-info": "c & b Yadav",
                        "R": 124,
                        "B": 180,
                        "4s": 11,
                        "6s": 1,
                        "SR": 68,
                        "dismissal": "catch & bowled",
                        "dismissal-by": {
                          "pid": "376116",
                          "name": "UT Yadav"
                        }
                      },
                      3:{
                        "pid": "521637",
                        "batsman": "BM Duckett",
                        "dismissal-info": "c Rahane b Ashwin",
                        "R": 13,
                        "B": 17,
                        "4s": 3,
                        "6s": 0,
                        "SR": 76,
                        "dismissal": "catch",
                        "dismissal-by": {
                          "pid": "277916",
                          "name": "AM Rahane"
                        }
                      },
                      4:{
                        "pid": "8917",
                        "batsman": "MM Ali",
                        "dismissal-info": " b Mohammed Shami",
                        "R": 117,
                        "B": 213,
                        "4s": 13,
                        "6s": 0,
                        "SR": 54,
                        "dismissal": "bowled",
                        "dismissal-by": {
                          "pid": "481896",
                          "name": "Mohammed Shami"
                        }
                      },
                      5:{
                        "pid": "311158",
                        "batsman": "BA Stokes",
                        "dismissal-info": "c †Saha b Yadav",
                        "R": 128,
                        "B": 235,
                        "4s": 13,
                        "6s": 2,
                        "SR": 54,
                        "dismissal": "catch",
                        "dismissal-by": {
                          "pid": "279810",
                          "name": "WP Saha"
                        }
                      },
                      6:{
                        "pid": "297433",
                        "batsman": "JM Bairstow †",
                        "dismissal-info": "c †Saha b Mohammed Shami",
                        "R": 46,
                        "B": 57,
                        "4s": 5,
                        "6s": 2,
                        "SR": 80,
                        "dismissal": "catch",
                        "dismissal-by": {
                          "pid": "279810",
                          "name": "WP Saha"
                        }
                      },
                      7:{
                        "pid": "247235",
                        "batsman": "CR Woakes",
                        "dismissal-info": "c †Saha b Jadeja",
                        "R": 4,
                        "B": 8,
                        "4s": 1,
                        "6s": 0,
                        "SR": 50,
                        "dismissal": "catch",
                        "dismissal-by": {
                          "pid": "279810",
                          "name": "WP Saha"
                        }
                      },
                      8:{
                        "pid": "244497",
                        "batsman": "AU Rashid",
                        "dismissal-info": "c Yadav b Jadeja",
                        "R": 5,
                        "B": 20,
                        "4s": 1,
                        "6s": 0,
                        "SR": 25,
                        "dismissal": "catch",
                        "dismissal-by": {
                          "pid": "376116",
                          "name": "UT Yadav"
                        }
                      },
                      9:{
                        "pid": "349853",
                        "batsman": "ZS Ansari",
                        "dismissal-info": "lbw b Mishra",
                        "R": 32,
                        "B": 83,
                        "4s": 3,
                        "6s": 0,
                        "SR": 38,
                        "dismissal": "lbw",
                        "dismissal-by": {
                          "pid": "31107",
                          "name": "A Mishra"
                        }
                      },
                      10:{
                        "pid": "10617",
                        "batsman": "SCJ Broad",
                        "dismissal-info": "not out",
                        "R": 6,
                        "B": 16,
                        "4s": 0,
                        "6s": 0,
                        "SR": 37,
                        "dismissal": "not out"
                      }
                    }
                  },
                  1:{
                    "title": "India 1st Innings",
                    "scores": [
                      {
                        "pid": "237095",
                        "batsman": "M Vijay",
                        "dismissal-info": "c Hameed b Rashid",
                        "R": 126,
                        "B": 301,
                        "4s": 9,
                        "6s": 4,
                        "SR": 41,
                        "dismissal": "catch",
                        "dismissal-by": {
                          "pid": "632172",
                          "name": "H Hameed"
                        }
                      },
                      {
                        "pid": "28763",
                        "batsman": "G Gambhir",
                        "dismissal-info": "lbw b Broad",
                        "R": 29,
                        "B": 72,
                        "4s": 4,
                        "6s": 0,
                        "SR": 40,
                        "dismissal": "lbw",
                        "dismissal-by": {
                          "pid": "10617",
                          "name": "SCJ Broad"
                        }
                      },
                      {
                        "pid": "32540",
                        "batsman": "CA Pujara",
                        "dismissal-info": "c Cook b Stokes",
                        "R": 124,
                        "B": 206,
                        "4s": 17,
                        "6s": 0,
                        "SR": 60,
                        "dismissal": "catch",
                        "dismissal-by": {
                          "pid": "11728",
                          "name": "AN Cook"
                        }
                      },
                      {
                        "pid": "253802",
                        "batsman": "V Kohli (c)",
                        "dismissal-info": "hit wicket b Rashid",
                        "R": 40,
                        "B": 95,
                        "4s": 5,
                        "6s": 0,
                        "SR": 42
                      },
                      {
                        "pid": "31107",
                        "batsman": "A Mishra",
                        "dismissal-info": "c Hameed b Ansari",
                        "R": 0,
                        "B": 2,
                        "4s": 0,
                        "6s": 0,
                        "SR": 0,
                        "dismissal": "catch",
                        "dismissal-by": {
                          "pid": "632172",
                          "name": "H Hameed"
                        }
                      },
                      {
                        "pid": "277916",
                        "batsman": "AM Rahane",
                        "dismissal-info": " b Ansari",
                        "R": 13,
                        "B": 30,
                        "4s": 1,
                        "6s": 0,
                        "SR": 43,
                        "dismissal": "bowled",
                        "dismissal-by": {
                          "pid": "349853",
                          "name": "ZS Ansari"
                        }
                      },
                      {
                        "pid": "26421",
                        "batsman": "R Ashwin",
                        "dismissal-info": "c Ansari b Ali",
                        "R": 70,
                        "B": 139,
                        "4s": 7,
                        "6s": 0,
                        "SR": 50,
                        "dismissal": "catch",
                        "dismissal-by": {
                          "pid": "349853",
                          "name": "ZS Ansari"
                        }
                      },
                      {
                        "pid": "279810",
                        "batsman": "WP Saha †",
                        "dismissal-info": "c †Bairstow b Ali",
                        "R": 35,
                        "B": 82,
                        "4s": 2,
                        "6s": 1,
                        "SR": 42,
                        "dismissal": "catch",
                        "dismissal-by": {
                          "pid": "297433",
                          "name": "JM Bairstow"
                        }
                      },
                      {
                        "pid": "234675",
                        "batsman": "RA Jadeja",
                        "dismissal-info": "c Hameed b Rashid",
                        "R": 12,
                        "B": 26,
                        "4s": 0,
                        "6s": 1,
                        "SR": 46,
                        "dismissal": "catch",
                        "dismissal-by": {
                          "pid": "632172",
                          "name": "H Hameed"
                        }
                      },
                      {
                        "pid": "376116",
                        "batsman": "UT Yadav",
                        "dismissal-info": "c Stokes b Rashid",
                        "R": 5,
                        "B": 12,
                        "4s": 1,
                        "6s": 0,
                        "SR": 41,
                        "dismissal": "catch",
                        "dismissal-by": {
                          "pid": "311158",
                          "name": "BA Stokes"
                        }
                      },
                      {
                        "pid": "481896",
                        "batsman": "Mohammed Shami",
                        "dismissal-info": "not out",
                        "R": 8,
                        "B": 7,
                        "4s": 0,
                        "6s": 1,
                        "SR": 114,
                        "dismissal": "not out"
                      }
                    ]
                  },
                  {
                    "title": "England 2nd Innings",
                    "scores": [
                      {
                        "pid": "11728",
                        "batsman": "AN Cook (c)",
                        "dismissal-info": "c Jadeja b Ashwin",
                        "R": 130,
                        "B": 243,
                        "4s": 13,
                        "6s": 0,
                        "SR": 53,
                        "dismissal": "catch",
                        "dismissal-by": {
                          "pid": "234675",
                          "name": "RA Jadeja"
                        }
                      },
                      {
                        "pid": "632172",
                        "batsman": "H Hameed",
                        "dismissal-info": "c & b Mishra",
                        "R": 82,
                        "B": 177,
                        "4s": 7,
                        "6s": 1,
                        "SR": 46,
                        "dismissal": "catch & bowled",
                        "dismissal-by": {
                          "pid": "31107",
                          "name": "A Mishra"
                        }
                      },
                      {
                        "pid": "303669",
                        "batsman": "JE Root",
                        "dismissal-info": "c †Saha b Mishra",
                        "R": 4,
                        "B": 5,
                        "4s": 0,
                        "6s": 0,
                        "SR": 80,
                        "dismissal": "catch",
                        "dismissal-by": {
                          "pid": "279810",
                          "name": "WP Saha"
                        }
                      },
                      {
                        "pid": "311158",
                        "batsman": "BA Stokes",
                        "dismissal-info": "not out",
                        "R": 29,
                        "B": 29,
                        "4s": 5,
                        "6s": 0,
                        "SR": 100,
                        "dismissal": "not out"
                      }
                    ]
                  },
                  {
                    "title": "India 2nd Innings",
                    "scores": [
                      {
                        "pid": "237095",
                        "batsman": "M Vijay",
                        "dismissal-info": "c Hameed b Rashid",
                        "R": 31,
                        "B": 71,
                        "4s": 6,
                        "6s": 0,
                        "SR": 43,
                        "dismissal": "catch",
                        "dismissal-by": {
                          "pid": "632172",
                          "name": "H Hameed"
                        }
                      },
                      {
                        "pid": "28763",
                        "batsman": "G Gambhir",
                        "dismissal-info": "c Root b Woakes",
                        "R": 0,
                        "B": 6,
                        "4s": 0,
                        "6s": 0,
                        "SR": 0,
                        "dismissal": "catch",
                        "dismissal-by": {
                          "pid": "303669",
                          "name": "JE Root"
                        }
                      },
                      {
                        "pid": "32540",
                        "batsman": "CA Pujara",
                        "dismissal-info": "lbw b Rashid",
                        "R": 18,
                        "B": 36,
                        "4s": 2,
                        "6s": 0,
                        "SR": 50,
                        "dismissal": "lbw",
                        "dismissal-by": {
                          "pid": "244497",
                          "name": "AU Rashid"
                        }
                      },
                      {
                        "pid": "253802",
                        "batsman": "V Kohli (c)",
                        "dismissal-info": "not out",
                        "R": 49,
                        "B": 98,
                        "4s": 6,
                        "6s": 0,
                        "SR": 50,
                        "dismissal": "not out"
                      },
                      {
                        "pid": "277916",
                        "batsman": "AM Rahane",
                        "dismissal-info": " b Ali",
                        "R": 1,
                        "B": 5,
                        "4s": 0,
                        "6s": 0,
                        "SR": 20,
                        "dismissal": "bowled",
                        "dismissal-by": {
                          "pid": "8917",
                          "name": "MM Ali"
                        }
                      },
                      {
                        "pid": "26421",
                        "batsman": "R Ashwin",
                        "dismissal-info": "c Root b Ansari",
                        "R": 32,
                        "B": 53,
                        "4s": 6,
                        "6s": 0,
                        "SR": 60,
                        "dismissal": "catch",
                        "dismissal-by": {
                          "pid": "303669",
                          "name": "JE Root"
                        }
                      },
                      {
                        "pid": "279810",
                        "batsman": "WP Saha †",
                        "dismissal-info": "c & b Rashid",
                        "R": 9,
                        "B": 13,
                        "4s": 2,
                        "6s": 0,
                        "SR": 69,
                        "dismissal": "catch & bowled",
                        "dismissal-by": {
                          "pid": "244497",
                          "name": "AU Rashid"
                        }
                      },
                      {
                        "pid": "234675",
                        "batsman": "RA Jadeja",
                        "dismissal-info": "not out",
                        "R": 32,
                        "B": 33,
                        "4s": 6,
                        "6s": 0,
                        "SR": 96,
                        "dismissal": "not out"
                      }
                    ]
                  }
                ],
                "bowling": [
                  {
                    "title": "Bowling To England 1st Innings",
                    "scores": [
                      {
                        "pid": "481896",
                        "bowler": "Mohammed Shami",
                        "O": "28.1",
                        "M": "5",
                        "R": "65",
                        "W": "2",
                        "Econ": "2.30",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                      },
                      {
                        "pid": "376116",
                        "bowler": "UT Yadav",
                        "O": "31.5",
                        "M": "3",
                        "R": "112",
                        "W": "2",
                        "Econ": "3.51",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                      },
                      {
                        "pid": "26421",
                        "bowler": "R Ashwin",
                        "O": "46.0",
                        "M": "3",
                        "R": "167",
                        "W": "2",
                        "Econ": "3.63",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                      },
                      {
                        "pid": "234675",
                        "bowler": "RA Jadeja",
                        "O": "30.0",
                        "M": "4",
                        "R": "86",
                        "W": "3",
                        "Econ": "2.86",
                        "0s": 0,
                        "4s": 1,
                        "6s": 0
                      },
                      {
                        "pid": "31107",
                        "bowler": "A Mishra",
                        "O": "23.3",
                        "M": "3",
                        "R": "98",
                        "W": "1",
                        "Econ": "4.17",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                      }
                    ]
                  },
                  {
                    "title": "Bowling To India 1st Innings",
                    "scores": [
                      {
                        "pid": "10617",
                        "bowler": "SCJ Broad",
                        "O": "29.0",
                        "M": "9",
                        "R": "78",
                        "W": "1",
                        "Econ": "2.68",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                      },
                      {
                        "pid": "247235",
                        "bowler": "CR Woakes",
                        "O": "31.0",
                        "M": "6",
                        "R": "57",
                        "W": "0",
                        "Econ": "1.83",
                        "0s": 1,
                        "4s": 0,
                        "6s": 0
                      },
                      {
                        "pid": "8917",
                        "bowler": "MM Ali",
                        "O": "31.0",
                        "M": "7",
                        "R": "85",
                        "W": "2",
                        "Econ": "2.74",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                      },
                      {
                        "pid": "349853",
                        "bowler": "ZS Ansari",
                        "O": "23.0",
                        "M": "1",
                        "R": "77",
                        "W": "2",
                        "Econ": "3.34",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                      },
                      {
                        "pid": "244497",
                        "bowler": "AU Rashid",
                        "O": "31.0",
                        "M": "1",
                        "R": "114",
                        "W": "4",
                        "Econ": "3.67",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                      },
                      {
                        "pid": "311158",
                        "bowler": "BA Stokes",
                        "O": "17.0",
                        "M": "2",
                        "R": "52",
                        "W": "1",
                        "Econ": "3.05",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                      }
                    ]
                  },
                  {
                    "title": "Bowling To England 2nd Innings",
                    "scores": [
                      {
                        "pid": "481896",
                        "bowler": "Mohammed Shami",
                        "O": "11.0",
                        "M": "1",
                        "R": "29",
                        "W": "0",
                        "Econ": "2.63",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                      },
                      {
                        "pid": "234675",
                        "bowler": "RA Jadeja",
                        "O": "15.0",
                        "M": "1",
                        "R": "47",
                        "W": "0",
                        "Econ": "3.13",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                      },
                      {
                        "pid": "26421",
                        "bowler": "R Ashwin",
                        "O": "23.3",
                        "M": "4",
                        "R": "63",
                        "W": "1",
                        "Econ": "2.68",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                      },
                      {
                        "pid": "376116",
                        "bowler": "UT Yadav",
                        "O": "13.0",
                        "M": "2",
                        "R": "47",
                        "W": "0",
                        "Econ": "3.61",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                      },
                      {
                        "pid": "31107",
                        "bowler": "A Mishra",
                        "O": "13.0",
                        "M": "0",
                        "R": "60",
                        "W": "2",
                        "Econ": "4.61",
                        "0s": 0,
                        "4s": 1,
                        "6s": 0
                      }
                    ]
                  },
                  {
                    "title": "Bowling To India 2nd Innings",
                    "scores": [
                      {
                        "pid": "10617",
                        "bowler": "SCJ Broad",
                        "O": "3.0",
                        "M": "2",
                        "R": "8",
                        "W": "0",
                        "Econ": "2.66",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                      },
                      {
                        "pid": "247235",
                        "bowler": "CR Woakes",
                        "O": "4.0",
                        "M": "1",
                        "R": "6",
                        "W": "1",
                        "Econ": "1.50",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                      },
                      {
                        "pid": "349853",
                        "bowler": "ZS Ansari",
                        "O": "8.0",
                        "M": "1",
                        "R": "41",
                        "W": "1",
                        "Econ": "5.12",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                      },
                      {
                        "pid": "8917",
                        "bowler": "MM Ali",
                        "O": "19.0",
                        "M": "5",
                        "R": "47",
                        "W": "1",
                        "Econ": "2.47",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                      },
                      {
                        "pid": "244497",
                        "bowler": "AU Rashid",
                        "O": "14.3",
                        "M": "1",
                        "R": "64",
                        "W": "3",
                        "Econ": "4.41",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                      },
                      {
                        "pid": "311158",
                        "bowler": "BA Stokes",
                        "O": "2.0",
                        "M": "1",
                        "R": "1",
                        "W": "0",
                        "Econ": "0.50",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                      },
                      {
                        "pid": "303669",
                        "bowler": "JE Root",
                        "O": "2.0",
                        "M": "0",
                        "R": "5",
                        "W": "0",
                        "Econ": "2.50",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                      }
                    ]
                  }
                ],
                
                  }
                ],
                "toss_winner_team": "England",
                "matchStarted": true
              }
        };*/
        let sqd="";
        for (let key in data.data['team']) {
            sqd+='<div id="s1"><h3>'+data.data['team'][key].name+'</h3>';
            for(let key1 in data.data['team'][key].players){
                sqd+='<span>'+data.data['team'][key]['players'][key1].name+'</span><br>'
            }
        }
        sqd+='</div>';
        Squad.innerHTML=sqd;
        let scard="";
        scard+='<div><hr>Winner Team:'+data.data['winner_team'] +'<br>Man of the Match:'+ data.data['man-of-the-match'].name+'</div>';
        let ar=['batsman','R','B','4s','6s','SR'];
        let ar1=['bowler','O','M','R','W','Econ'];
        for(let key in data.data['batting']){
            scard+='<div id="sc1"><h3>'+data.data['batting'][key].title+'</h3>';
            scard+='<div class="table"><table><thead><tr><th>Batsman</th><th>Runs</th><th>Balls</th><th>4s</th><th>6s</th><th>SR</th><th>Dismissal by</th></tr></thead><tbody>';
            for(let key1 in data.data['batting'][key].scores){
                scard+='<tr>';
                for (let i = 0; i < ar.length; i++) {
                    if (typeof data.data['batting'][key]['scores'][key1][ar[i]]!=="undefined" && data.data['batting'][key]['scores'][key1][ar[i]]!==null) {
                        scard+='<td>'+data.data['batting'][key]['scores'][key1][ar[i]]+'</td>';
                        
                    }
                    else{
                        scard+='<td>0</td>';
                    }
                }
                scard+='<td colspan="6">'+data.data['batting'][key]['scores'][key1]['dismissal-info']+'</td></tr>';
            }
            scard+='</tbody></table></div><br>';
            scard+='<div class="table"><table><thead><tr><th>Bowling</th><th>Overs</th><th>Maidens</th><th>R</th><th>W</th><th>Econ</th></tr></thead><tbody>';
            for(let key1 in data.data['bowling'][key].scores){
                scard+='<tr>';
                for (let i = 0; i < ar.length; i++) {
                    if (typeof data.data['bowling'][key]['scores'][key1][ar1[i]]!=="undefined" && data.data['bowling'][key]['scores'][key1][ar1[i]]!==null) {
                        scard+='<td>'+data.data['bowling'][key]['scores'][key1][ar1[i]]+'</td>';
                    }
                    else{
                        scard+='<td>0</td>';
                    }
                }
                scard+='</tr>';
            }
            scard+='</tbody></table></div></div>';
        }
        Scorecard.innerHTML=scard;
    })
	.catch((err) =>{ console.log("the error:"+err);});
}