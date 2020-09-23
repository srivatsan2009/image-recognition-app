Webcam.set({
width:350,
height:250,
image_format:'png',
png_quality:100
}); 

camera=document.getElementById("camera");
Webcam.attach(camera);

function takephoto() {
Webcam.snap(function(data_url){
document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_url+'">';
});
}

console.log("ml5.version-",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/q4rV8XqYw/model.json",model_loaded);
function model_loaded() {
console.log("model loaded!");
}

function identify() {
img=document.getElementById("captured_image");
classifier.classify(img,gotresult);
}


function gotresult(error,results) {
if (error) {
console.log(error);
}
else {
console.log(results);
document.getElementById("result_object_name").innerHTML=results[0].label;
document.getElementById("result_accuracy_name").innerHTML=results[0].confidence.toFixed(5);
}
}