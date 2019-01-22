//burger menu function
(function () {
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('#'+burger.dataset.target);

    console.log(burger);
    console.log(nav);

    burger.addEventListener('click', function(){
        burger.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });
})();

//jquery for hiding content

$(".serviceList").click(function () {

    $serviceList = $(this);
    //getting the next element
    $dryerContent = $serviceList.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $dryerContent.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of s$serviceList based on visibility of content div
        $serviceList.text(function () {
            //change text based on condition
            // return $dryerContent.is(":visible") ? "Collapse" : "Expand";
        });
    });

});

//duct repair hidden content
$(".ductList").click(function () {

    $ductList = $(this);
    
    $ductContent = $ductList.next();
    
    $ductContent.slideToggle(500, function () {
        
        $ductList.text(function () {
            //change text based on condition
            // return $ductContent.is(":visible") ? "Collapse" : "Expand";
        });
    });

});

//hvac cleaning hidden content
$(".hvacCleaningList").click(function () {

    $hvacCleaningList = $(this);
    
    $hvacCleaningContent = $hvacCleaningList.next();
    
    $hvacCleaningContent.slideToggle(500, function () {
        
        $hvacCleaningList.text(function () {
            //change text based on condition
            // return $hvacCleaningContent.is(":visible") ? "Collapse" : "Expand";
        });
    });

});

//hvac repair hidden content

$(".hvacList").click(function () {

    $.hvacList = $(this);
    
    $hvacContent = $.hvacList.next();
    
    $hvacContent.slideToggle(500, function () {
       
        $.hvacList.text(function () {
           
            // return $hvacContent.is(":visible") ? "Collapse" : "Expand";
        });
    });

});

$(".mouldRemediation").click(function () {

    $.mouldRemediation = $(this);
    
    mouldContent = $.mouldRemediation.next();
    
    mouldContent.slideToggle(500, function () {
        
        $.mouldRemediation.text(function () {
            //change text based on condition
            // return mouldContent.is(":visible") ? "Collapse" : "Expand";
        });
    });

});