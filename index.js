var i=0;
var size=0;
var array_=[];
var r=0;
var co=0;
var rc=0;
var coc=0;
var dx=0.5;
var search=0;
var x=50;
var y=250;
var t=0;
var c=document.querySelector(".Mycanvas");
var ctx=c.getContext("2d");
class data{
    constructor(value,index,x,y){
        this.value=value;
        this.index=index;
        this.x=x;
        this.y=y;
    }
}
function createArray()
{
     size=document.querySelector(".in01").value;
    array_=[size];
    console.log(size);
    if(size>0)
    document.querySelector(".divin01").classList.remove('invs');
    else
    alert("Error:Please enter a positive integer greater than 0!");
    document.querySelector(".inb01").disabled = true;
    r=Math.floor(size/10);
    if(size%10!=0)
    r++;
}
function user_choice(){
    var choice=document.querySelector(".ddc01").value;
    if(choice=="User-Defined")
    {
        document.querySelector(".divin02").classList.remove('invs'); 
    }
    else
    {while(i<size)
        {
            if(rc<r)
            {
                if(coc<=9)
                {
                    array_[i]=new data(Math.round(Math.random()*1001),i,x+(coc*100),y+(rc*200));
                    i++;
                    coc++;
                }
                else{
                    coc=0;
                    rc++;
                }
            }
        }
        console.log(array_);
       
        document.querySelector(".inb04").classList.remove('invs');
    }
    document.querySelector(".inb02").disabled = true;
    i=0;
    coc=0;
    rc=0;
}
function add_ele()
{
    if(i<=size-1)
    {   if(document.querySelector(".in02").value<0||document.querySelector(".in02").value>0||document.querySelector(".in02").value>0!=""){
           
           
        if(coc<=9)
        {
            array_[i]=new data(document.querySelector(".in02").value,i,x+(coc*100),y+(rc*100));
            document.querySelector(".p001").innerHTML = "["+(i+1)+"]";
            coc++;
        }
        else{
            coc=0;
            rc++;
        }
           document.querySelector(".in02").value="";      
        
        console.log(array_);
    }
    else{
        alert("Error:Input is not a number");
    }
    i++;
}
else{
    document.querySelector(".inb04").classList.remove('invs');
    i=0;
}
}
function draw_arr()
{document.querySelector(".divin03").classList.remove('invs'); 
document.querySelector(".Mycanvas").classList.remove('invs');
i=0;
     c.width=1500;
    c.height=400+r*200;
    create_arr(500,2);fill_text("Element Searched",500,130);
    create_arr(700,0);fill_text("Array Element",700,130);
    create_arr(900,0);fill_text("Index",920,130);
    ;
    while(i<size)
    {
        create_arr(array_[i].x,array_[i].y);
        fill_text(array_[i].value,array_[i].x+34,array_[i].y+54);
        fill_index(array_[i].index,array_[i].x+50,array_[i].y+110);
        i++;
    }
}
function serchn()
{ search=document.querySelector(".in03").value;
  document.querySelector(".inb05").disabled = true;
  fill_text(search,530,60)
  

}
function runsearch()
{
    i=0;
     point(array_[0].x+50,array_[0].y+130);
     while(i<size){
         yellow(array_[i].x,array_[i].y);
         redo(i);
         fill_text(array_[i].value,array_[i].x+34,array_[i].y+54);
         if(search==array_[i].value)
         {
            green(array_[i].x,array_[i].y);
            fill_text(array_[i].value,array_[i].x+34,array_[i].y+54);
            return false;
         }
         else{
            red(array_[i].x,array_[i].y);
            fill_text(array_[i].value,array_[i].x+34,array_[i].y+54);
           animate();
        }
         i++;
     }
     
     
}
function create_arr(x,y)
{
    ctx.beginPath();
    ctx.rect(x,y, 100, 100);
    ctx.stroke();
}

function fill_text(a,x,y)
{
    ctx.font = "20px Arial";
ctx.fillText(a, x, y);

}


function fill_index(a,x,y)
{
    ctx.font = "10px Arial";
ctx.fillText(a, x, y);

}


function point(x,y)
{
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+10, y+20);
    ctx.lineTo(x-10, y+20);
    ctx.lineTo(x,y);
    ctx.stroke();
    ctx.fill();

}

function yellow(x,y)
{
    ctx.clearRect(x, y, 100, 100);
    ctx.strokeStyle = "#fddb3a";
    ctx.strokeRect(x, y, 100, 100);

}
function green(x,y)
{
    ctx.clearRect(x, y, 100, 100);
    ctx.strokeStyle = "#206a5d";
    ctx.strokeRect(x, y, 100, 100);

}
function red(x,y){
    ctx.clearRect(x, y, 100, 100);
    ctx.strokeStyle = "#900d0d";
    ctx.strokeRect(x, y, 100, 100);

}
function animate()
{   xs=array_[i].x;
    ys=array_[i].y;
    console.log(array_[i+1].x);
    t=array_[i+1].x;
    requestAnimationFrame(animate);
    if(xs<=t){
    ctx.clearRect(xs+50, ys+130 ,30, 30);
    ctx.beginPath();
    ctx.moveTo(xs+50, ys+130);
    ctx.lineTo(xs+50+10,ys+20+130);
    ctx.lineTo(xs-10+50, ys+20+130);
    ctx.lineTo(xs+50, ys+130);
    ctx.stroke();
    ctx.fill();   
    xs=xs+dx;
    }
}
function redo(a){
    
    ctx.clearRect(700, 2, 100, 98);
    ctx.rect(700,0, 100, 100);
    ctx.fillText(array_[a].value, 730, 60);
    ctx.clearRect(900, 2, 100, 98);
    ctx.rect(900,0, 100, 100);
    ctx.fillText(array_[a].index, 930, 60);



}