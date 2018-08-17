window.onload = function(){
    /**
     * upload image
     */
    var input = document.getElementById('upload_image');

    input.onchange = function () {
        var file = input.files[0];
        var fr = new FileReader();
        fr.onload = function () {
            var img = document.getElementById("imgSource"),
                canvas = document.getElementById('canvas');

            img.src = fr.result;
            canvas.width = img.width;
            canvas.height = img.height;

            var context = canvas.getContext("2d");
            context.drawImage(img, 0, 0);

            var canvasData = context.getImageData(0, 0, canvas.width, canvas.height);

            // 开始
            var startTime = +new Date();

            var grayVal = grayAverage(canvasData);

            console.log(grayVal);
            $.ajax({
                type: 'post',
                dataType: 'json',
                url: 'http://1.imgprocess.sinaapp.com/index.php?id=1'
            }).success(function (data) {
                alert(data);
            });

            var endTime = +new Date();
            console.log(" 一共经历时间：" + (endTime - startTime) + "ms");
        };
        fr.readAsDataURL(file);
    };

};

// @garyAverage求图像的平均灰度值
function grayAverage (imgData) {
    var pixes = imgData.data,
        width = imgData.width,
        height = imgData.height;

    var length = width * height,
        sum = 0;
    for (var i = 0; i < length; i++) {

        sum += pixes[i] + pixes[i + 1] + pixes[i + 2];
    }

    return (sum / (3 * width * height));
}