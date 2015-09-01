window.onload = function() {

  var button = document.getElementById('button');

  var takePhoto = function() {
    var photoUrl = prompt("");

    var img = document.createElement("img");
    img.src = photoUrl;

    var master = document.getElementById("header"); 
    master.appendChild(img);
  };

  button.onclick = takePhoto;
};