/**
* Created by zhaofengmiao on 15/3/22.
*/
window.onload = function(){
    var img = document.getElementById("imgSource"),
        canvas = document.getElementById('canvas'),
        width = img.width,
        height = img.height;

    // console.log(width);

    canvas.width = width;
    canvas.height = height;

    var context = canvas.getContext("2d");
    context.drawImage(img, 0, 0);

    var canvasData = context.getImageData(0, 0, canvas.width, canvas.height);

    //console.log(canvasData);

    // 开始
    var startTime = +new Date();

    var tempData = gaussBlur(canvasData, 20);


    context.putImageData(tempData,0,0);

    var endTime = +new Date();
    console.log(" 一共经历时间：" + (endTime - startTime) + "ms");
}

/**
 * 此函数为二重循环
 */
function gaussBlur(imgData, radius, sigma) {
    var pixes = imgData.data,
        width = imgData.width,
        height = imgData.height;

    radius = radius || 5;
    sigma = sigma || radius / 3;

    var gaussEdge = radius * 2 + 1;    // 高斯矩阵的边长

    var gaussMatrix = [],
        gaussSum = 0,
        a = 1 / (2 * sigma * sigma * Math.PI),
        b = -a * Math.PI;

    for (var i=-radius; i<=radius; i++) {
        for (var j=-radius; j<=radius; j++) {
            var gxy = a * Math.exp((i * i + j * j) * b);
            gaussMatrix.push(gxy);
            gaussSum += gxy;    // 得到高斯矩阵的和，用来归一化
        }
    }
    var gaussNum = (radius + 1) * (radius + 1);
    for (var i=0; i<gaussNum; i++) {
        gaussMatrix[i] = gaussMatrix[i] / gaussSum;    // 除gaussSum是归一化
    }

    //console.log(gaussMatrix);

    // 循环计算整个图像每个像素高斯处理之后的值
    for (var x=0; x<width;x++) {
        for (var y=0; y<height; y++) {
            var r = 0,
                g = 0,
                b = 0;

            //console.log(1);

            // 计算每个点的高斯处理之后的值
            for (var i=-radius; i<=radius; i++) {
                // 处理边缘
                var m = handleEdge(i, x, width);
                for (var j=-radius; j<=radius; j++) {
                    // 处理边缘
                    var mm = handleEdge(j, y, height);

                    var currentPixId = (mm * width + m) * 4;

                    var jj = j + radius;
                    var ii = i + radius;
                    r += pixes[currentPixId] * gaussMatrix[jj * gaussEdge + ii];
                    g += pixes[currentPixId + 1] * gaussMatrix[jj * gaussEdge + ii];
                    b += pixes[currentPixId + 2] * gaussMatrix[jj * gaussEdge + ii];

                }
            }
            var pixId = (y * width + x) * 4;

            pixes[pixId] = ~~r;
            pixes[pixId + 1] = ~~g;
            pixes[pixId + 2] = ~~b;
        }
    }
    imgData.data = pixes;
    return imgData;
}

function handleEdge(i, x, w) {
    var  m = x + i;
    if (m < 0) {
        m = -m;
    } else if (m >= w) {
        m = w + i - x;
    }
    return m;
}

/**
 * 此函数为分别循环
 */
function gaussBlur1(imgData,radius, sigma) {
    var pixes = imgData.data;
    var width = imgData.width;
    var height = imgData.height;
    var gaussMatrix = [],
        gaussSum = 0,
        x, y,
        r, g, b, a,
        i, j, k, len;


    radius = Math.floor(radius) || 3;
    sigma = sigma || radius / 3;

    a = 1 / (Math.sqrt(2 * Math.PI) * sigma);
    b = -1 / (2 * sigma * sigma);
    //生成高斯矩阵
    for (i = 0, x = -radius; x <= radius; x++, i++){
        g = a * Math.exp(b * x * x);
        gaussMatrix[i] = g;
        gaussSum += g;

    }
    //归一化, 保证高斯矩阵的值在[0,1]之间
    for (i = 0, len = gaussMatrix.length; i < len; i++) {
        gaussMatrix[i] /= gaussSum;
    }
    //x 方向一维高斯运算
    for (y = 0; y < height; y++) {
        for (x = 0; x < width; x++) {
            r = g = b = a = 0;
            gaussSum = 0;
            for(j = -radius; j <= radius; j++){
                k = x + j;
                if(k >= 0 && k < width){//确保 k 没超出 x 的范围
                    //r,g,b,a 四个一组
                    i = (y * width + k) * 4;
                    r += pixes[i] * gaussMatrix[j + radius];
                    g += pixes[i + 1] * gaussMatrix[j + radius];
                    b += pixes[i + 2] * gaussMatrix[j + radius];
                    // a += pixes[i + 3] * gaussMatrix[j];
                    gaussSum += gaussMatrix[j + radius];
                }
            }
            i = (y * width + x) * 4;
            // 除以 gaussSum 是为了消除处于边缘的像素, 高斯运算不足的问题
            // console.log(gaussSum)
            pixes[i] = r / gaussSum;
            pixes[i + 1] = g / gaussSum;
            pixes[i + 2] = b / gaussSum;
            // pixes[i + 3] = a ;
        }
    }
    //y 方向一维高斯运算
    for (x = 0; x < width; x++) {
        for (y = 0; y < height; y++) {
            r = g = b = a = 0;
            gaussSum = 0;
            for(j = -radius; j <= radius; j++){
                k = y + j;
                if(k >= 0 && k < height){//确保 k 没超出 y 的范围
                    i = (k * width + x) * 4;
                    r += pixes[i] * gaussMatrix[j + radius];
                    g += pixes[i + 1] * gaussMatrix[j + radius];
                    b += pixes[i + 2] * gaussMatrix[j + radius];
                    // a += pixes[i + 3] * gaussMatrix[j];
                    gaussSum += gaussMatrix[j + radius];
                }
            }
            i = (y * width + x) * 4;
            pixes[i] = r / gaussSum;
            pixes[i + 1] = g / gaussSum;
            pixes[i + 2] = b / gaussSum;
            // pixes[i] = r ;
            // pixes[i + 1] = g ;
            // pixes[i + 2] = b ;
            // pixes[i + 3] = a ;
        }
    }
    //end
    imgData.data = pixes;
    return imgData;
}