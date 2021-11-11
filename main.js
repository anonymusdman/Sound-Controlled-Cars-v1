function startClassifying(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/0hrOUaUzN/model.json", modelReady);

    function modelReady(){
        classifier.classify(gotResults);
    }

    function gotResults(error, results){
        console.log("got results");
        if(error){
            console.error("There was an error");
        }
        else{
            console.log(results);
            random_number_r = Math.floor(Math.random()*255) + 1;
            random_number_g = Math.floor(Math.random()*255) + 1;
            random_number_b = Math.floor(Math.random()*255) + 1;

            document.getElementById("result_label").innerHTML = "What I hear - " + results[0].label;
            document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence*100).toFixed(2) + "%";

            document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
            document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

            if(results[0].label == "2 finger clap"){
                car1.src = "braap rx7.gif";
                car2.src = "dis silvia.jpeg";
                car3.src = "motul skyline gtr r34 gran turismo.jpeg";
                car4.src = "dis supra.jpeg";
            }
            else if(results[0].label == "Whistle"){
                car1.src = "braap rx7.jpeg";
                car2.src = "dis silvia.gif";
                car3.src = "motul skyline gtr r34 gran turismo.jpeg";
                car4.src = "dis supra.jpeg";
            }
            else if(results[0].label == "clap"){
                car1.src = "braap rx7.jpeg";
                car2.src = "dis silvia.jpeg";
                car3.src = "dis skyline gtr.gif";
                car4.src = "dis supra.jpeg";
            }
            else if(results[0].label == "Background Noise"){
                car1.src = "braap rx7.jpeg";
                car2.src = "dis silvia.jpeg";
                car3.src = "motul skyline gtr r34 gran turismo.jpeg";
                car4.src = "dis supra.gif";
            }
        }
    }
}