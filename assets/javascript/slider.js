//image slider

// var index = 1;

// function plusIndex(n) {
//     index = index + 1;
//     showImage(index);
// }


// showImage (1);

// function showImage(n) {
//   var i;
//   var x = document.getElementsByClassName ("slide"); 

//   if (n > x.length) { index = 1};

//   if(n < 1) {index = x.length};

//   // alert(x.length);

//   for(i=0; i<x.length; i++) {
      
//       x[i].style.display = "none";
//   }

//   x[index-1].style.display = "block"; 


// }

//image slider for most pages

var slideIndex = 1;
showDivs(slideIndex);

function plusIndex(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndex-1].style.display = "block"; 
}

//bathroom slider only on dryer page


// var slideIndex2 = 1;
// showDivs(slideIndex2);

// function plusIndex(m) {
//   showDivs(slideIndex2 += m);
// }

// function showDivs(m) {
//   var ii;
//   var xp = document.getElementsByClassName("slide2");
//   if (m > xp.length) {slideIndex2 = 1} 
//   if (m < 1) {slideIndex2 = xp.length} ;
//   for (ii = 0; ii < xp.length; ii++) {
//     xp[ii].style.display = "none"; 
//   }
//   xp[slideIndex2-1].style.display = "block"; 
// }