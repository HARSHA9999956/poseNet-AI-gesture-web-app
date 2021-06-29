function setup(){
    video=createCapture(VIDEO)
    video.size(550,500)
    
    canvas=createCanvas(500,480)
    canvas.position(570,100)

    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotposes)
}
function modelLoaded(){
    console.log("poseNet is initialized")
}

function draw(){
    background( "#808080")
}

function gotposes(results){
if(results.length>0){
    console.log(results)
}
}