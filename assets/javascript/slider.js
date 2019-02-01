//image slider

var index = 1;

function plusIndex(n) {
    index = index + 1;
    showImage(index);
}


showImage (1);

function showImage(n) {
  var i;
  var x = document.getElementsByClassName ("slide"); 

  if (n > x.length) { index = 1};

  if(n < 1) {index = x.length};

  // alert(x.length);

  for(i=0; i<x.length; i++) {
      
      x[i].style.display = "none";
  }

  x[index-1].style.display = "block"; 


}

//slide 2 
var nindex = 1;

function minusIndex(p) {
  nindex = nindex +1;
  imageShow(nindex);
}

function imageShow(p) {
  var y;
  var z = document.getElementsByClassName ("slide2");

  if (p > z.length) {nindex = 1};

  if (p < 1) {nindex = z.length};

  for(y=0; y<z.length; y++) {
    z[y].style.display = "none";
  }

  z[nindex-1].style.display = "block";
}