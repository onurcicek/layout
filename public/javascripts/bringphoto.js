var bringPhoto=function(){
$(document).ready(function () {

    $.ajax({
        url: '/index/getphoto',
        method: 'GET',
        contentType: 'application/JSON',
        success: function (response) {
            console.log(response);


            const containerDiv = document.querySelector(".ftg-items");
            containerDiv.innerHTML = " ";
            response.Bedirhan.forEach(element => {
                containerDiv.innerHTML += `
          <div class="tile">
              <a class="tile-inner" href="${element.fileway}.jpg">
                <img class="item"  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  data-src="${element.fileway}.jpg" />
              </a>
          </div>
          `;
            });
        } //success
    }); //ajax
}); //ready


    $(document).ready(function () {
        $('.final-tiles-gallery').finalTilesGallery({
            autoLoadURL: "/index/getphoto",
            margin: 15,
            gridSize: 20,
            layout: 'final',
            imageSizeFactor: [[4000, .9], [1024, .8], [800, .7], [600, .6], [480, .5]],

        });
    });



    $('#loadMore').on('click',function(){

        var start=0;
        var limit=6;
        $.ajax({

            url: '/index/getphoto',
            method: 'POST',
            data:{start:start,limit:limit},
            contentType: 'application/JSON',
            success: function (response) { 


            }

        });
        
    });

};