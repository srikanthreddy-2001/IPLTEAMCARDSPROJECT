window.onload = function() {

    var pychart = new CanvasJS.Chart("chartContainer", {
        theme: "light2", 
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Wins by Various Teams from 2008-2021"
        },
        data: [{
            type: "pie",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: 35.71, label: "Mumbai Indians" },
                { y: 21.43, label: "Chennai Super Kings" },
                { y: 14.29, label: "Kolkata Knight Riders" },
                { y: 7.14, label: "Rajasthan Royals" },
                { y: 14.29, label: "Sunrisers Hyderabad" },
                { y: 7.14, label: "Royal Challengers Bangalore" }
                
                
            ]
        }]
    });
    pychart.render();
    
    }
$(document).ready(function(){
    var topList=[{
        teamName:"KKR",
        teamIcon:"https://www.kkr.in/static-assets/images/cssimages/default-kkr.jpg",
        playerCount:27,
        topBatsman:"Shubman Gill",
        topBowler:"Andre Russell",
        winningStreak:2
    },
    {
        teamName:"CSK",
        teamIcon:"https://i.pinimg.com/originals/ea/40/fd/ea40fd13fa7d46618c5567146f07ba41.png",
        playerCount:26,
        topBatsman:"Mahendra Singh Dhoni",
        topBowler:"Ravindra Jadeja",
        winningStreak:4
    },
    {
        teamName:"MI",
        teamIcon:"https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png",
        playerCount:24,
        topBatsman:"Rohit Sharma",
        topBowler:"Jasprit bumrah",
        winningStreak:5
    },
    {
        teamName:"DC",
        teamIcon:"https://d1q6kvh8ntrf2h.cloudfront.net/s3fs-public/vendor/ipl_dclogo.png",
        playerCount:26,
        topBatsman:"Rishab pant",
        topBowler:"Kagiso Rabada",
        winningStreak:0
    },
    {
        teamName:"RCB",
        teamIcon:"https://th.bing.com/th/id/R.245d565e5fa3e4fed45bd04d2da6c082?rik=H6zA0PgwW0gw3w&riu=http%3a%2f%2fwww.freelogovectors.net%2fwp-content%2fuploads%2f2020%2f02%2froyal_challengers_bangalore_logo.png&ehk=Shn9XwpnaupWdKZ0vQ90IpiiECYu%2bnlEANzV%2fK%2fGWIE%3d&risl=&pid=ImgRaw",
        playerCount:21,
        topBatsman:"Virat Kohli",
        topBowler:"Josh Hazlewood",
        winningStreak:0
    },
    {
        teamName:"KXIP",
        teamIcon:"https://th.bing.com/th/id/OIP.clSKSkoGpEotIgSpPRriFgHaIX?pid=ImgDet&rs=1",
        playerCount:19,
        topBatsman:"Shikhar Dhawan",
        topBowler:"Arshadeep Singh",
        winningStreak:0
    },
    {
        teamName:"SRH",
        teamIcon:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Medium/SRH.png",
        playerCount:25,
        topBatsman:"Rahul Tripati",
        topBowler:"Bhuvaneswar kumar",
        winningStreak:2
    },
    {
        teamName:"RR",
        teamIcon:"https://play-lh.googleusercontent.com/e8hGFIIRT37wOAJMeAl_BDonthHByFUOwNshFG9ycx30r11CPTchn-fMnUhPIe-esw=w240-h480-rw",
        playerCount:17,
        topBatsman:"Josh Buttler",
        topBowler:"Trent Boult ",
        winningStreak:1
    },
    {
        teamName:"GT",
        teamIcon:"https://img.jagranjosh.com/images/2022/February/2122022/gujarat_titans_team_logo.jpg",
        playerCount:22,
        topBatsman:"Hardik Pandya",
        topBowler:"Rashid Khan",
        winningStreak:0
    },
    {
        teamName:"LSG",
        teamIcon:"https://www.lucknowportal.com/wp-content/uploads/Lucknow-Super-Giants-LSG-IPL-LUCKNOW-LOGO.png",
        playerCount:22,
        topBatsman:"KL RAHUL",
        topBowler:"Mark Wood",
        winningStreak:0
    }];
    $(".card").click(function(){
        for(var i=0;i<topList.length;i++){
            if($(this).find(".card-title").html()==topList[i].teamName){
                localStorage.setItem("tDetails",JSON.stringify(topList[i]));
                location.assign("teams.html");
            }
        }
    })
    $('.search-input-box').on("keyup", function() {
        var val = $(this).val().toUpperCase();
        $(".card").each(function(){
            var guess="false";
            var tit=$(this).children(".card-img-overlay").children(".card-title").html();
            if(tit.indexOf(val)>=0)
            guess="true";
            if(guess=="true")
            $(this).show();
            else
            $(this).hide();
        });
      });
})