img="";
status="";
function  setup()
{
    canvas =  createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "STATUS : Detecting objects";
}

function preload()
{
img = loadImage('dog_cat.jpg');
}

function draw()
{
    image(img,0,0,640,420);
    fill("red");
    text("dog",180,70);
    noFill();
    stroke("red");
    rect(150,40,300,350);

    fill("red");
    text("cat",360,110);
    noFill();
    stroke("red");
    rect(300,90,270,320);
    
}

function modelLoaded()
{
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img,gotResults);
}

function gotResults(error,results)
{
if(error)
{
 console.log(error);   
}
console.log(results);
}