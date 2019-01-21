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
            return $dryerContent.is(":visible") ? "Collapse" : "Expand";
        });
    });

});
