function startclassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundclassifier('https://teachablemachine.withgoogle.com/models/kOMbqO-4g/model.json', modelloaded);
}

function modelloaded()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
 if(error)
 {
   console.error(error);
 }
 else
 {
    console.log(results);
    random_number_r=Maths.floor(Math.random()*255)+1;
    random_number_g=Maths.floor(Math.random()*255)+1;
    random_number_b=Maths.floor(Math.random()*255)+1;
    document.getElementById("result_lable").innerHTML='I CAN HEAR.....' + results[0].label;
    document.getElementById("result_confidence").innerHTML = 'ACCURACY.....' + (results[0].confidence * 100).toFixed(2) + "%";
    document.getElementById("result_lable").style.color="rgb("+random_number_r +", "+random_number_g+", "+random_number_b+")";
    document.getElementById("result_confidence").style.color="rgb("+random_number_r +", "+random_number_g+", "+random_number_b+")";
    
    img=document.getElementById("animal1");
    img1=document.getElementById("animal2");
    img2=document.getElementById("animal3");
    img3=document.getElementById("animal4");
    if(results[0].label=="Clapping")
    {
      img.src='cat.gif';
      img1.src='dog.webp';
      img2.src='lion.jpg';
    }
 elseif(results[0].label=="Hitting")
 {
   img.src='cat.jpg';
   img1.src='dog.gif';
   img2.src='lion.jpg';
 }
 elseif(results[0].label=="Snapping")
    {
      img.src='cat.jpg';
      img1.src='dog.webp';
      img2.src='lion-gif.gif';

    }else
    {
      img.src='cat.jpg';
      img1.src='dog.webp';
      img2.src='lion.jpg';

    }
 }
}
