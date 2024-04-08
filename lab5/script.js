$(document).ready(
    function(){
        let currentDesktop = 1;
        const totalDesktops = 4;
        
        $("#desktop2, #desktop3, #desktop4").hide().css('transform', 'translateY(-100vh)');
        
        $(document).click(function() {
            if (currentDesktop < totalDesktops) {
                currentDesktop++;
                $(`#desktop${currentDesktop}`).show().css('transform', 'translateY(0)');
                $(`#desktop${currentDesktop - 1}`).css('transform', 'translateY(100vh)');
                
            }
        });
    }
);