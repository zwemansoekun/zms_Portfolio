$(document).ready(function() {   
    $('#get_jpcv').click(function(e) {
        e.preventDefault();  //stop the browser from following          
        window.location.href = 'upload/JP_CV.zip';      
    });   
    
    $('#get_engcv').click(function(e) {
        e.preventDefault();  //stop the browser from following  
        window.location.href = 'upload/ENG_CV.zip';
    });  
});