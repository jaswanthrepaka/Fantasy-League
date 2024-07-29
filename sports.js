var Otp='';
var i,j;
var mymatch;
function get(){
    let phn=document.getElementById("mobile").value;
    var num='1234567890';
    Otp='';
    if(phn.length==10 && phn!=null){
        for(let i=0;i<4;i++){
            Otp+=num[Math.floor(Math.random()*10)];
        }
        //document.getElementById("success").style.display="block"
        //document.getElementById("success").innerHTML="<h3>Your One Time Password is:"+Otp+"</h3>";
        document.innerHTML=alert("Your one time password is:"+Otp);
        document.getElementById("error").style.display="none";
        $.ajax({
            url:'Login.php',
            type:'POST',
            data:{
                phn1 : phn,
            },
            success:function(data){
                console.log('data:'+data);
            },
            error:function(error){
                console.log('Error:'+error);
            }
        });
    }
    else{
        document.getElementById("error").style.display="block"
        document.getElementById("error").innerHTML="<h3>Invalid Mobile Number</h3>";
        //document.getElementById("success").style.display="none"
    }
}

function verify(){
    var otp=document.getElementById("otp").value;
    console.log(Otp);
    console.log(otp);
    if(Otp==otp){
        window.location.href="http://localhost/MiniProject/inside.php";
        document.getElementById("error").style.display="none"
    }
    else{
        document.getElementById("error").style.display="block"
        document.getElementById("error").innerHTML="<h3>Invalid Otp</h3>";
    }
}



function Schedule()
{
    let teams=["Csk.png","Dc.png","KKR.jpg","KXIP.jpg","MI.jpg","Rcb.jpg","RR.png","SRH.jpg"];
    //let team=["Csk","Dc","KKR","KXIP","MI","Rcb","RR","SRH"];
    var team={
        0:{
            "im":1111,
            'p1':'MS DHONI (C)(WK)',
            'p2':'FAF DUPLESIS',
            'p3':'S WATSON',
            'p4':'A RAYUDU',
            'p5':'R GAIKWAD',
            'p6':'S CURRAN',
            'p7':'R JADEJA',
            'p8':'DEEPAK CHAHAR',
            'p9':'LUNGI NGIDI',
            'p10':'SHARDUL THAKUR',
            'p11':'PIYUSH CHAWLA'
        },
1:{
"im":1112,
'p1':'Rishabh Pant(WK)',
'p2':'Shikhar Dhawan ',
'p3':'Ajinkya Rahane',
'p4':'Shreyas Iyer (C)',
'p5':'Shimron Hetmyer',
'p6':'Marcus Stoinis',
'p7':'Axar Patel',
'p8':'Ravichandran Ashwin',
'p9':'Kagiso Rabada',
'p10':'Anrich Nortje',
'p11':'Tushar Deshpande'
},
2:{
"im":1113,
'p1':'Dinesh Karthik (WK)',
'p2':'Shubham Gill',
'p3':'Sunil Narine',
'p4':'Eoin Morgan (C)',
'p5':'Nitish Rana',
'p6':'Andre Russell',
'p7':'Pat Cummins',
'p8':'Kamlesh Nagarkoti',
'p9':'Prasidh Krishna',
'p10':'Shivam Mavi',
'p11':'Varun Chakaravarthy'
},
3:{
"im":1114,
'p1':'KL Rahul (C)(WK)',
'p2':'Mayank Agarwal',
'p3':'Chris Gayle',
'p4':'Nicholas Pooran',
'p5':'Mandeep Singh',
'p6':'Glenn Maxwell',
'p7':'Chris Jordan',
'p8':'Murugan Ashwin',
'p9':'Ravi Bishnoi',
'p10':'Mohammad Shami',
'p11':'Arshdeep Singh'
},
4:{
"im":1115,
'p1':'Quinton de Kock(WK)',
'p2':'Rohit Sharma (C)',
'p3':'Suryakumar Yadav',
'p4':'Ishan Kishan',
'p5':'Krunal Pandya',
'p6':'Hardik Pandya',
'p7':'Kieron Pollard',
'p8':'Jasprit Bumrah',
'p9':'Trent Boult',
'p10':'Nathan Coulter-Nile',
'p11':'Rahul Chahar'
},
5:{
"im":1116,
'p1':'Joshua Philippe(WK)',
'p2':'Devdutt Padikkal',
'p3':'Virat Kohli (C)',
'p4':'AB de Villiers',
'p5':'Gurkeerat Singh',
'p6':'Christopher Morris',
'p7':'Washington Sundar',
'p8':'Yuzvendra Chahal',
'p9':'Navdeep Saini',
'p10':'Mohammed Siraj',
'p11':'Adam Zampa'
},
6:{
"im":1117,
'p1':'Jos Buttler(WK)',
'p2':'Robin Uthappa',
'p3':'Steve Smith (C)',
'p4':'Sanju Samson',
'p5':'Riyan Parag',
'p6':'Ben Stokes',
'p7':'Rahul Tewatia',
'p8':'Jofra Archer',
'p9':'Shreyas Gopal',
'p10':'Kartik Tyagi',
'p11':'Jaydev Unadkat'
},
7:{
"im":1118,
'p1':'Wridhhiman Saha(WK)',
'p2':'Kane Williamson',
'p3':'David Warner (C)',
'p4':'Manish Pandey',
'p5':'Priyam Garg',
'p6':'Jason Holder',
'p7':'Abdul Samad',
'p8':'Rashid Khan',
'p9':'Bhuvaneshwar Kumar',
'p10':'Sandeep Sharma',
'p11':'T Natrajan'
}
    };
    let content="";
    let temp1="",temp2="";
    for(i=0;i<teams.length;i++){
        for(j=i+1;j<teams.length;j++){
            content+='<div id="contest"><a href="#4567"><img id="logo1" src="../MiniProject/images/'+teams[i]+'" alt="'+teams[i]+'" ></a><span id="tm">IPL t20 7:30PM</span><a  href="#4567"><img id="logo2" src="../MiniProject/images/'+teams[j]+'" alt="'+teams[j]+'" ></a><div id="co">Practice Contest<span id="cos"><input type="button" onclick="mtchselected('+team[i].im+','+team[j].im+')" value="Join"></span></div></div>';
            //console.log(teams[i],teams[j]); 
        }
    }
    document.getElementById("Menu1").style.display="block";
    document.getElementById("Menu2").style.display="none";
    document.getElementById("Menu1").innerHTML = content;
}
function Match(){
    document.getElementById("Menu1").style.display="none";
    document.getElementById("Menu2").style.display="block";
}

function mtchselected(t1,t2){
   sessionStorage.setItem('team1',t1);
    sessionStorage.setItem('team2',t2);
	window.location = 'http://localhost/MiniProject/fantasy.php';
	return false;
}

function feedback(){
    //var person = prompt("Please enter your Feedback", "web is not working properly");
    swal("Write something here:", {
        content: "input",
        buttons:["Cancel","Ok!"],
      })
      .then((value) => {
        swal(`You typed: ${value}`);
      });
}
function refer(){
    var random_string='';
    var characters='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
    for(var i=0;i<6;i++){
        random_string+=characters.charAt(Math.floor(Math.random()*characters.length));
    }
    //alert("Your Referral code is:"+random_string);
    swal({
        title: "Referral Code",
        text: "Your Referral code is: "+random_string,
        button:"Ok!",
    });
}