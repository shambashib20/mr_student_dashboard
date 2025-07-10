$(document).ready(function () {
    $('.menuBtn button').click(function(){
        $('body').toggleClass('sidebarClose')
        $('.sidebar').toggleClass('sidebarCollapse')
    })
})