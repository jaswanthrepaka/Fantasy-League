<?php
session_start();
/*echo '<pre>';
print_r($_SESSION);
echo '</pre>';*/
$_SESSION['team1']=$_POST['team1'];
$_SESSION['team2']=$_POST['team2'];
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="Mystyle.css">
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
        <script src="sports.js" async=""></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    </head>
    <body style="background-color:rgb(223, 223, 247);">
        <div class="fant">
            <h1 style="text-align: center; color: red;">Squads</h1>
            <div class="teams">
                
            </div>
        </div>
        <script>
            var teams={
                0:{
        'img':1111,
        'tmname':'CSK',
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
        'img':1112,
        'tmname':'DC',
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
        'img':1113,
        'tmname':'KKR',
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
        'img':1114,
        'tmname':'KXIP',
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
        'img':1115,
        'tmname':'MI',
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
        'img':1116,
        'tmname':'RCB',
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
        'img':1117,
        'tmname':'RR',
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
        'img':1118,
        'tmname':'SRH',
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
            var con=['Wicket-Keeper','Batsmans','All-Rounders','Bowlers'];
            let fntsy=fantasy();
            document.querySelector('.teams').innerHTML=fntsy;

            function fantasy(){
                var s1=sessionStorage.getItem('team1');
                var s2=sessionStorage.getItem('team2');
                var t1,t2;
                for (let key in teams) {
                                if(teams[key].img==s1){
                                    t1=teams[key].tmname;
                                }
                                if(teams[key].img==s2){
                                    t2=teams[key].tmname;
                                }
                            }
                console.log(t1,t2);
            $.ajax({
            url:'fantasy.php',
            type:'POST',
            data:{
                team1 : t1,
                team2 : t2,
            },
            success:function(data){
                console.log('data:'+data);
            },
            error:function(error){
                console.log('Error:'+error);
            }
        });
                let fntsy='<div id="err" style="background-color:red;"></div><div id="#"><form  action="fantasy1.php" method="post">';
                    for(let i in con){
                        if(con[i]=='Wicket-Keeper'){
                            fntsy+='<div id="Hcreate"><h2 style="text-align:center;">Wicket-Keeper</h2>';
                            for (let key in teams) {
                                if(teams[key].img==s1 || teams[key].img==s2){
                                    fntsy+='<div id="create"><label for="p">'+teams[key].p1+'</label><div id="Btn"><span><input type="checkbox" name="p[]" onclick="return myfun()" value="'+teams[key].p1 +'"><label>SELECT</label></span></div><br><label for="tmname">'+teams[key].tmname+'</label><br></div>';
                                }
                            }
                            fntsy+='</div>';
                        }
        if(con[i]=='Batsmans'){
            fntsy+='<div id="Hcreate"><h2 style="text-align:center;">Batsmans</h2>';
            for (let key in teams) {
                if(teams[key].img==s1 || teams[key].img==s2){
                    fntsy+='<div id="create"><label for="p">'+teams[key].p2+'</label><div id="Btn"><span><input type="checkbox" name="p[]" onclick="return myfun()" value="'+teams[key].p2 +'"><label>SELECT</label></span></div><br><label for="tmname">'+teams[key].tmname+'</label><br></div>';
                     
                    fntsy+='<div id="create"><label for="p">'+teams[key].p3+'</label><div id="Btn"><span><input type="checkbox" name="p[]" onclick="return myfun()" value="'+teams[key].p3 +'"><label>SELECT</label></span></div><br><label for="tmname">'+teams[key].tmname+'</label><br></div>';
                    
                    fntsy+='<div id="create"><label for="p">'+teams[key].p4+'</label><div id="Btn"><span><input type="checkbox" name="p[]" onclick="return myfun()" value="'+teams[key].p4 +'"><label>SELECT</label></span></div><br><label for="tmname">'+teams[key].tmname+'</label><br></div>';
                    
                    fntsy+='<div id="create"><label for="p">'+teams[key].p5+'</label><div id="Btn"><span><input type="checkbox" name="p[]" onclick="return myfun()" value="'+teams[key].p5 +'"><label>SELECT</label></span></div><br><label for="tmname">'+teams[key].tmname+'</label><br></div>';
                    
                }
                
            }
            fntsy+='</div>';
        }
        if(con[i]=='All-Rounders'){
            fntsy+='<div id="Hcreate"><h2 style="text-align:center;">All-Rounders</h2>';
            for (let key in teams) {
                if(teams[key].img==s1 || teams[key].img==s2){
                    fntsy+='<div id="create"><label for="p">'+teams[key].p6+'</label><div id="Btn"><span><input type="checkbox" name="p[]" onclick="return myfun()" value="'+teams[key].p6 +'"><label>SELECT</label></span></div><br><label for="tmname">'+teams[key].tmname+'</label><br></div>';
                    
                    fntsy+='<div id="create"><label for="p">'+teams[key].p7+'</label><div id="Btn"><span><input type="checkbox" name="p[]" onclick="return myfun()" value="'+teams[key].p7 +'"><label>SELECT</label></span></div><br><label for="tmname">'+teams[key].tmname+'</label><br></div>';
                    
                }   
            }
            fntsy+='</div>';
        }
        if(con[i]=='Bowlers'){
            fntsy+='<div id="Hcreate"><h2 style="text-align:center;">Bowlers</h2>';
            for (let key in teams) {
                if(teams[key].img==s1 || teams[key].img==s2){
                    fntsy+='<div id="create"><label for="p">'+teams[key].p8+'</label><div id="Btn"><span><input type="checkbox" name="p[]" onclick="return myfun()" value="'+teams[key].p8 +'"><label>SELECT</label></span></div><br><label for="tmname">'+teams[key].tmname+'</label><br></div>';
                    
                    fntsy+='<div id="create"><label for="p">'+teams[key].p9+'</label><div id="Btn"><span><input type="checkbox" name="p[]" onclick="return myfun()" value="'+teams[key].p9 +'"><label>SELECT</label></span></div><br><label for="tmname">'+teams[key].tmname+'</label><br></div>';
                    
                    fntsy+='<div id="create"><label for="p">'+teams[key].p10+'</label><div id="Btn"><span><input type="checkbox" name="p[]" onclick="return myfun()" value="'+teams[key].p10 +'"><label>SELECT</label></span></div><br><label for="tmname">'+teams[key].tmname+'</label><br></div>';
                    
                    fntsy+='<div id="create"><label for="p">'+teams[key].p11+'</label><div id="Btn"><span><input type="checkbox" name="p[]" onclick="return myfun()" value="'+teams[key].p11+'"><label>SELECT</label></span></div><br><label for="tmname">'+teams[key].tmname+'</label><br></div>';
                    
                }
            }
            fntsy+='</div>';
        }
    }
    fntsy+='<div id="su"><input type="Submit" name="submit" class="Submit" value="Submit"></div></form></div>';
    return fntsy;
    
}
        function myfun(){
            var pl=document.getElementsByName('p[]');
            var c=0;
            for (let i = 0; i < pl.length; i++) {
                if (pl[i].checked==true) {
                    c+=1;
                }
            }
            if(c<11){
                document.getElementById('err').innerHTML="You are allowed to select only 11 players!";
                document.getElementById('err').style.display="block";
            }
            if(c==11){
                document.getElementById('err').style.display="none";
            }
            if (c>11){
                document.getElementById('err').style.display="block";
                document.getElementById('err').innerHTML="You are allowed to select only 11 players!";
                return false;
            }
        }
    </script>
    </body>
</html>