var c=document.querySelector(".Mycanvas");
var ctx=c.getContext("2d");

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
function animate(x,y,t)
{
    requestAnimationFrame(animate);
    if(x<=t){
    ctx.clearRect(x-20.5, y-1 ,30, 30);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+10,y+20);
    ctx.lineTo(x-10, y+20);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.fill();   
    x=x+dx;
    }
}
export default {create_arr, fill_text, fill_index, point, yellow, green, red,animate}