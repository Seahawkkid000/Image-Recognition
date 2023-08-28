Webcam.set({
width:350,
height:250,
image_format:"jpg",
jpg_quality:90,
})
Webcam.attach("#camera")
camera=document.getElementById("camera")
var image
function take_snapshot(){
    Webcam.snap(function(data_uri){
       document.getElementById("selfie_image").src=data_uri
        
    })

}
console.log("ml5 version=",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/lXSYF0DuG/model.json",modelReady)
function modelReady(){
    console.log("Model Is Ready")
}
function check(){
    img=document.getElementById("selfie_image")
    classifier.classify(img,gotResult)
}
function gotResult(error,results){
    if (error){
        console.log(error)
    }
    else {
        console.log(results)
        document.getElementById("result_object_name").innerHTML=results[0].label
        document.getElementById("result_object_accuracy").innerHTML=(results[0].confidence*100).toFixed(2)+"%"
    }
}