$(window).load(function(){
    $(document).ready(function(){

        $(document).scroll(function() {

            var top = $(document).scrollTop();

            if (top > 149) {
              $('.top_text').css({'position': 'fixed', 'top': '0', 'padding-top': '0', 'background': 'url("../img/top.jpg")'});
              $('.body').css({'margin-top': '253px'});
          	}

            else {
              $('.top_text').css({'position': 'relative', 'padding-top': '151px', 'background': 'none'});
              $('.body').css({'margin-top': '0'});
            }
          	
          	return false;
        });
    });
});