import { Captcha } from './types'; 


// prompt the use to only enter White -> Blue -> Red text in that order
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

    
    addTextToImage('https://img.freepik.com/premium-photo/gray-gradient-wall-blank-studio-room-plain-studio-background_570543-5927.jpg', captcha, canvas);
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

    var charsArray =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lengthRnd = 6;
    var rnd = "";
    for (var i = 0; i < lengthRnd; i++) {
        var index = Math.floor(Math.random() * charsArray.length); //get the next character from the array
        rnd = rnd.concat(charsArray[index]);
    }
    var rtext1 = rnd.substring(0, 3);
    var rtext2 = rnd.substring(3, 6);
    var colArr = ["#00FF00","#FFFF00","cyan","aqua","black","#FF1493","#808000","#8B4513","#708090","#40E0D0","#FF00FF","#FFC300", "#FF5733", "#DAF7A6 ", "#581845", "#900C3F", "#c281fa", "#12de42", "#97bf0e", "#f78c19"];
    var dcol1 = Math.floor(Math.random() * colArr.length);
    var dcol2 = Math.floor(Math.random() * colArr.length);

    var text1 = text.substring(0, 3);
    var text2 = text.substring(3, 6);
    var text3 = text.substring(6, 9);

    var t = [["",""]];
    var used = [false, false, false, false, false];

    var k = 0;
    while (k < 5){

        var rpos = Math.floor(Math.random() * 10);
        if (((rpos == 0) || (rpos == 9)) && (!used[0])){
            t.push([text1, "#FFFFFF"]);
            used[0] = true;
            k++;
        }
        else if (((rpos == 1) || (rpos == 8)) && (!used[1])){
            t.push([text2, "indigo"]);
            used[1] = true;
            k++;
        }
        else if (((rpos == 2) || (rpos == 7)) && (!used[2])){
            t.push([text3, "#FF0000"]);
            used[2] = true;
            k++;
        }
        else if (((rpos == 3) || (rpos == 6)) && (!used[3])){
            t.push([rtext1, colArr[dcol1]]);
            used[3] = true;
            k++;
        }
        else if (((rpos == 4) || (rpos == 5)) && (!used[4])){
            t.push([rtext2, colArr[dcol2]]);
            used[4] = true;
            k++;
        }
        else {}

    }


    img.onload = function () {
        context.drawImage(img, 0, 0);
        context.lineWidth = 1;
        context.fillStyle = t[1][1];
        context.font = "25px bold courier";
        context.fillText(t[1][0], 5, 35);
        context.fillStyle = t[2][1];
        context.font = "25px bold courier";
        context.fillText(t[2][0], 70, shift1);
        context.fillStyle = t[3][1];
        context.font = "25px bold courier";
        context.fillText(t[3][0], 140, shift2);
        context.fillStyle = t[4][1];
        context.font = "25px bold courier";
        context.fillText(t[4][0], 10, shift2);
        context.fillStyle = t[5][1];
        context.font = "25px bold courier";
        context.fillText(t[5][0], 140, 40);
    };


}
