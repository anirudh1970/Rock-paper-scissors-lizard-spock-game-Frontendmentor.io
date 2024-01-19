/**
 0 scissors
 1 spock
 2 paper
 3 lizard
 4 rock
 */
document.addEventListener("DOMContentLoaded",function(){
    var overlay=document.getElementById('rules-overlay');
    var openbtn=document.getElementById('display-rules-button');
    var closebtn=document.getElementById('close-rules-button')
    openbtn.addEventListener("click",function(){
        overlay.style.display="block";
        document.body.style.overflow='hidden';
    });

    closebtn.addEventListener("click",function(){
        overlay.style.display='none';
        document.body.style.overflow='auto';
    });
});
function getCookieValue(cookieName){
    var name=cookieName+"=";

    var decodedCookie=decodeURIComponent(document.cookie);
    var cookieArray=decodedCookie.split("=");
    if(cookieArray[0]==='score')
        return cookieArray[1];
    return 0;
}
var page1=document.getElementById('page-1');
var page2=document.getElementById('page-2');


var r_p_s_user=-1,r_p_s_computer=-1,score=getCookieValue("score");
document.getElementById('score-value').innerText=score;
const choices=[0,1,2,3,4];
function setDiv(val){
    r_p_s_user=val;
    displayPage(2);
}
displayPage(1);
function displayPage(page_no){
    if(page_no==1){
        page2.style.display='none';
        page1.style.display='block';
    }
    else if(page_no==2){
        page1.style.display='none';
        const random_choice=Math.floor(Math.random()*choices.length);
        r_p_s_computer=random_choice;
        page2.style.display='block';
        animate(r_p_s_user,r_p_s_computer);
    }
}
function playAgain(){
    displayPage(1);
    r_p_s_computer=-1;
    r_p_s_user=-1;
    displayUserIcon(5);
    displayComputerIcon(5);
    document.getElementById('lose-or-win').style.display='none';
    var your_res=document.getElementById('your-result-heading-with-icon');
    your_res.style.transform='translateX(0px)';
    var comp_res=document.getElementById('computer-result-heading-with-icon');
    comp_res.style.transform='translateX(0px)';
}
function displayUserIcon(x){
    var paperu=document.getElementById('paper-icon-page-2-container');
    var rocku=document.getElementById('rock-icon-page-2-container');
    var scissorsu=document.getElementById('scissors-icon-page-2-container');
    var spocku=document.getElementById('spock-icon-page-2-container');
    var lizardu=document.getElementById('lizard-icon-page-2-container');

    if(x==0){
        paperu.style.display='none';
        rocku.style.display='none';
        spocku.style.display='none';
        lizardu.style.display='none';
        scissorsu.style.display='block';
    }
    else if(x==1){
        paperu.style.display='none';
        rocku.style.display='none';
        scissorsu.style.display='none';
        lizardu.style.display='none';
        spocku.style.display='block';
    }
    else if(x==2){
        rocku.style.display='none';
        scissorsu.style.display='none';
        spocku.style.display='none';
        lizardu.style.display='none';
        paperu.style.display='block';
    }
    else if(x==3){
        paperu.style.display='none';
        rocku.style.display='none';
        scissorsu.style.display='none';
        spocku.style.display='none';
        lizardu.style.display='block';
    }
    else if(x==4){
        paperu.style.display='none';
        scissorsu.style.display='none';
        spocku.style.display='none';
        lizardu.style.display='none';
        rocku.style.display='block';
    }
    else{
        paperu.style.display='none';
        rocku.style.display='none';
        scissorsu.style.display='none';
        spocku.style.display='none';
        lizardu.style.display='none';
    }
}
function displayComputerIcon(x){
    var paper_c=document.getElementById('paper-icon-page-2-container-computer');
    var scissors_c=document.getElementById('scissors-icon-page-2-container-computer');
    var rock_c=document.getElementById('rock-icon-page-2-container-computer');
    var spock_c=document.getElementById('spock-icon-page-2-container-computer');
    var lizard_c=document.getElementById('lizard-icon-page-2-container-computer');

    if(x==0){
        paper_c.style.display='none';
        rock_c.style.display='none';
        spock_c.style.display='none';
        lizard_c.style.display='none';
        scissors_c.style.display='block';
    }
    else if(x==1){
        paper_c.style.display='none';
        rock_c.style.display='none';
        scissors_c.style.display='none';
        lizard_c.style.display='none';
        spock_c.style.display='block';
    }
    else if(x==2){
        rock_c.style.display='none';
        scissors_c.style.display='none';
        spock_c.style.display='none';
        lizard_c.style.display='none';
        paper_c.style.display='block';
    }
    else if(x==3){
        paper_c.style.display='none';
        rock_c.style.display='none';
        scissors_c.style.display='none';
        spock_c.style.display='none';
        lizard_c.style.display='block';
    }
    else if(x==4){
        paper_c.style.display='none';
        scissors_c.style.display='none';
        spock_c.style.display='none';
        lizard_c.style.display='none';
        rock_c.style.display='block';
    }
    else{
        paper_c.style.display='none';
        rock_c.style.display='none';
        scissors_c.style.display='none';
        spock_c.style.display='none';
        lizard_c.style.display='none';
    }
}
function updateScore(score_val){
    var score_b=document.getElementById('score-value');
    score_b.innerText=score_val;
    document.cookie="score="+score_val;
}
function decideWINORLOSE(v1,v2){
    var win=false,tie=false;
    var txt=document.getElementById('lose-or-win-text');
    if(v1==0){
        if(v2==0)
            tie=true;
        else if(v2==1){
            win=false;
        }
        else if(v2==2){
            win=true;
        }
        else if(v2==3){
            win=true;
        }
        else if(v2==4){
            win=false;
        }
    }
    else if(v1==1){
        if(v2==1)
            tie=true;
        else if(v2==2){
            win=false;
        }
        else if(v2==0){
            win=true;
        }
        else if(v2==3){
            win=false;
        }
        else if(v2==4){
            win=true;
        }
    }
    else if(v1==2){
        if(v2==2)
            tie=true;
        else if(v2==0){
            win=false;
        }
        else if(v2==1){
            win=true;
        }
        else if(v2==3){
            win=false;
        }
        else if(v2==4){
            win=true;
        }
    }
    else if(v1==3){
        if(v2==3)
            tie=true;
        else if(v2==0){
            win=false;
        }
        else if(v2==1){
            win=true;
        }
        else if(v2==3){
            win=false;
        }
        else if(v2==2){
            win=true;
        }
    }
    else if(v1==4){
        if(v2==4)
            tie=true;
        else if(v2==1){
            win=false;
        }
        else if(v2==0){
            win=true;
        }
        else if(v2==2){
            win=false;
        }
        else if(v2==3){
            win=true;
        }
    }
    if(tie){
        txt.innerText='TIE';
    }
    else if(win){
        txt.innerText='YOU WIN';
        score++;
    }
    else if(!win){
        txt.innerText='YOU LOSE';
        score--;
    }
    updateScore(score);
}
function moveUpandDown(element){
    setTimeout(function(){
        element.style.transform='translateY(-50px)';
        setTimeout(function(){
            element.style.transform='translateY(0px)';
            setTimeout(function(){
                element.style.transform='translateY(-50px)';
                setTimeout(function(){
                    element.style.transform='translateY(0px)';
                },1000);
            },1000);
        },1000);
    },1000);
}
function animate(user_val,random_val){
    setTimeout(function(){
        var your_res=document.getElementById('your-chosen-icon-here');
        displayUserIcon(user_val);
        moveUpandDown(your_res);
        setTimeout(function(){
            setTimeout(function(){
                displayComputerIcon(random_val);
                setTimeout(function(){
                    if(window.innerWidth>375){
                        var your_r=document.getElementById('your-result-heading-with-icon');
                        your_r.style.transform='translateX(-90px)';
                        var comp_res=document.getElementById('computer-result-heading-with-icon');
                        comp_res.style.transform='translateX(90px)';
                    }
                    decideWINORLOSE(user_val,random_val);
                    document.getElementById('lose-or-win').style.display='block';
                },1000);
            },1000);
        },5000);
    },1000);
}
