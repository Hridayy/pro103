
Webcam.set({
    width:340,
    height:300,
    image_format:'png',
    png_quality:90
    })
    camera=document.getElementById("camera")
    Webcam.attach("#camera")
    
    function take_snapshot(){
    Webcam.snap(
        function (data_uri){
    document.getElementById("result").innerHTML='<img id="capture" src="'+ data_uri +'"/>'
    }
    )
    }
    
    console.log("ml5 version:",ml5.version)
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/GjLbSpCI6/model.json',modelloaded)
    
    function modelloaded(){
        console.log("modelloaded")
    }

    function cheak(){
        img=document.getElementById("capture");
        classifier.classify(img,got_result)
        }
        function got_result(error,results){
        if(error){
        console.log(error);}
        else{
        console.log(results)
        label=results[0].label;
        confidence=results[0].confidence.toFixed(3);
        document.getElementById("result_object_name").innerHTML=label;
        document.getElementById("result_object_accuracy").innerHTML=confidence;
        }
        
        }