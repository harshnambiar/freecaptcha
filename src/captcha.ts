import { Captcha } from './types'; 

export function createCaptcha(canvas: HTMLCanvasElement): string {
    const ctx=canvas.getContext('2d')!;
    ctx.fillStyle= 'black';// make screen black
    ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight);
    canvas.innerHTML = "";
    var charsArray =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lengthOtp = 9;
    var captcha = "";
    for (var i = 0; i < lengthOtp; i++) {
        var index = Math.floor(Math.random() * charsArray.length); //get the next character from the array
        captcha = captcha.concat(charsArray[index]);
    }

    
    addTextToImage('https://5.imimg.com/data5/GL/TG/MY-45342195/wall-textures.jpg', captcha, canvas);
    return captcha;
}


function addTextToImage(imagePath: string, text: string, circle_canvas: HTMLCanvasElement) {
    var context = circle_canvas.getContext("2d")!;

    console.log(text);
    var order = Math.floor(Math.random() * 6);
    var img = new Image();
    img.src = imagePath;
    img.height = 600;
    img.width = 600;
    var shift1 = 55 + Math.floor(Math.random() * 5);
    var shift2 = 35 + shift1 - Math.floor(Math.random() * 5);
    if (order == 0) {
        var text1 = text.substring(0, 3);
        var text2 = text.substring(3, 6);
        var text3 = text.substring(6, 9);
        img.onload = function () {
            context.drawImage(img, 0, 0);
            context.lineWidth = 1;
            context.fillStyle = "#FFFFFF";
            context.font = "25px bold courier";
            context.fillText(text1, 5, 35);
            context.fillStyle = "indigo";
            context.font = "25px bold courier";
            context.fillText(text2, 70, shift1);
            context.fillStyle = "#FF0000";
            context.font = "25px bold courier";
            context.fillText(text3, 140, shift2);
        };
    }

    
    else if (order == 1) {
        var text1 = text.substring(0, 3);
        var text2 = text.substring(3, 6);
        var text3 = text.substring(6, 9);
        img.onload = function () {
            context.drawImage(img, 0, 0);
            context.lineWidth = 1;
            context.fillStyle = "#FFFFFF";
            context.font = "25px bold courier";
            context.fillText(text1, 5, 35);
            context.fillStyle = "#FF0000";
            context.font = "25px bold courier";
            context.fillText(text3, 70, shift1);
            context.fillStyle = "indigo";
            context.font = "25px bold courier";
            context.fillText(text2, 140, shift2);
        };

    }
    else if (order == 2) {
        var text1 = text.substring(0, 3);
        var text2 = text.substring(3, 6);
        var text3 = text.substring(6, 9);
        img.onload = function () {
            context.drawImage(img, 0, 0);
            context.lineWidth = 1;
            context.fillStyle = "#FF0000";
            context.font = "25px bold courier";
            context.fillText(text3, 5, 35);
            context.fillStyle = "#FFFFFF";
            context.font = "25px bold courier";
            context.fillText(text1, 70, shift1);
            context.fillStyle = "indigo";
            context.font = "25px bold courier";
            context.fillText(text2, 140, shift2);
        };

    }
    else if (order == 3) {
        var text1 = text.substring(0, 3);
        var text2 = text.substring(3, 6);
        var text3 = text.substring(6, 9);
        img.onload = function () {
            context.drawImage(img, 0, 0);
            context.lineWidth = 1;
            context.fillStyle = "indigo";
            context.font = "25px bold courier";
            context.fillText(text2, 5, 35);
            context.fillStyle = "#FFFFFF";
            context.font = "25px bold courier";
            context.fillText(text1, 70, shift1);
            context.fillStyle = "#FF0000";
            context.font = "25px bold courier";
            context.fillText(text3, 140, shift2);
        };

    }
    else if (order == 4) {
        var text1 = text.substring(0, 3);
        var text2 = text.substring(3, 6);
        var text3 = text.substring(6, 9);
        img.onload = function () {
            context.drawImage(img, 0, 0);
            context.lineWidth = 1;
            context.fillStyle = "indigo";
            context.font = "25px bold courier";
            context.fillText(text2, 5, 35);
            context.fillStyle = "#FF0000";
            context.font = "25px bold courier";
            context.fillText(text3, 70, shift1);
            context.fillStyle = "#FFFFFF";
            context.font = "25px bold courier";
            context.fillText(text1, 140, shift2);
        };

    }
    else {
        var text1 = text.substring(0, 3);
        var text2 = text.substring(3, 6);
        var text3 = text.substring(6, 9);
        img.onload = function () {
            context.drawImage(img, 0, 0);
            context.lineWidth = 1;
            context.fillStyle = "#FF0000";
            context.font = "25px bold courier";
            context.fillText(text3, 5, 35);
            context.fillStyle = "indigo";
            context.font = "25px bold courier";
            context.fillText(text2, 70, shift1);
            context.fillStyle = "#FFFFFF";
            context.font = "25px bold courier";
            context.fillText(text1, 140, shift2);
        };

    }
}