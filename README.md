# FreeCaptcha
Hey there! We created this free, easy to use Captcha package so you can add additional Proof of Humanity (PoH) to your javascript apps to keep bots away.

# Tutorial  
1. npm install freecaptcha
2. have a <canvas> element on your HTML page where your want FreeCaptcha to place the Captcha
3. in your index.js, import freecaptcha
4. call its createCaptcha function which needs the HTMLCanvasElement from Step 2 as its sole argument
5. var captcha_val = createCaptcha(canvas_el)
6. check if the user entered value equates to captcha_val to qualify or disqualify them


# Resources
For a direct look at how to embed FreeCaptcha, take a look at our test repository:  
https://github.com/harshnambiar/freecaptcha_test

The NPM package can be found here:  
https://www.npmjs.com/package/freecaptcha
