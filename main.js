canvas=document.getElementById("canvas1");
ctx=canvas.getContext("2d");

rover_x=10;
rover_y=10;
rover_width=100;
rover_height=95;

background_array=["mars_1.jpg", "mars_2.jpg", "mars_3.jpg", "mars.jpg"];
random_number=Math.floor(Math.random()*4)

background_image= background_array[random_number];
rover_image="rover.png";

function add(){
    background_imageTag=new Image();
    background_imageTag.onload=uploadBackground;
    background_imageTag.src=background_image;

    rover_imageTag=new Image();
    rover_imageTag.onload=uploadrover;
    rover_imageTag.src=rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imageTag, rover_x, rover_y, rover_width, rover_height);}

    window.addEventListener("keydown" , my_keydown);

    function my_keydown(e){
        keyPressed=e.keyCode;
        console.log(keyPressed);

        if(keyPressed=="37"){
         left();
         console.log("left");
        }

        if(keyPressed=="38"){
            up();
            console.log("up");
           }
          
           if(keyPressed=="39"){
            right();
            console.log("right");
           }

           if(keyPressed=="40"){
            down();
            console.log("down");
           }
    }

    function up(){
        if(rover_y >= 0){
            rover_y=rover_y-10;
            console.log("when up arrow key is pressed , x="+rover_x +", y="+rover_y);
            uploadBackground();
            uploadrover();
        }
    }

    function down(){
        if(rover_y <= 300){
            rover_y=rover_y+10;
            console.log("when down arrow key is pressed , x="+rover_x +", y="+rover_y);
            uploadBackground();
            uploadrover();
        }
    }

    function left(){
        if(rover_x >= 0){
            rover_x=rover_x-10;
            console.log("when left arrow key is pressed , x="+rover_x +", y="+rover_y);
            uploadBackground();
            uploadrover();
        }
    }

    function right(){
        if(rover_x <= 500){
            rover_x=rover_x+10;
            console.log("when right arrow key is pressed , x="+rover_x +", y="+rover_y);
            uploadBackground();
            uploadrover();
        }
    }