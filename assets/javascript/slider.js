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



// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {

//     showDivs(slideIndex += n);
// }

// function showDivs(n) {
// var i;
// var x = document.getElementsByClassName("mySlides");
//     if (n > x.length) {slideIndex = 1}

//     if (n < 1) {slideIndex = x.length}

//     for (i = 0; i < x.length; i++) {

//     x[i].style.display = "none";  
// }

// x[slideIndex-1].style.display = "block";  
// }


