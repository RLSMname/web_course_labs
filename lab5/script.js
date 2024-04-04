$(document).ready(
    function(){
        let currentDesktop = 1;
        const totalDesktops = 4;

        $(document).click(function() {
            if (currentDesktop < totalDesktops) {
                currentDesktop++;
                
                $(`#desktop${currentDesktop - 1}`).css('transform', 'translateY(100vh)');
                $(`#desktop${currentDesktop}`).css('transform', 'translateY(0)');
                // $(`#desktop${currentDesktop - 1}`).slideUp();
                // $(`#desktop${currentDesktop}`).css('display', 'flex').hide().slideDown();
            }
        });
    }
);