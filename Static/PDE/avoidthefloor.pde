void setup(){
    width = 600;
    height = 400;
    
    gameStarted = 0;
    startTime = new Date();
    lastClick = new Date();
    points = 0;

    [x,y] = [295,380];
    [dx,dy] = [0,0];
    
    g = 0;
    coefficient_of_restitution = 0.8;
    b = 0.006;

    ball_diameter = 5;
    stroke(0,0,0);
    strokeWeight(1);
    
}

void draw() {

    background(256,256,256);
    fill(0,0,0);
    ellipse(x,y,ball_diameter,ball_diameter);
    
    if(mousePressed){
        line(x,y,mouseX,mouseY);
    }

    d2x = -b*dx;
    d2y = g - (b*dy);
    dx += d2x; 
    dy += d2y;

    if(x>width-(ball_diameter/2) && dx>0){
        dx = -dx * (coefficient_of_restitution);
    }
    if(x<(ball_diameter/2) && dx<0){
        dx = -dx * (coefficient_of_restitution);
    }
    if(y>height-(ball_diameter/2) && dy>0){
        //dy = -dy * (coefficient_of_restitution);
        gameOver();
    }
    if(y<(ball_diameter/2) && dy<0){
        dy = -dy * (coefficient_of_restitution);
    }

    x += dx;
    y += dy;
    
    
    text("d2x= " + Math.round(d2x*100)/100,170,10);
    text("d2y= " + Math.round(d2y*100)/100,170,30);
    text("dx= " + Math.round(dx*100)/100,90,10);
    text("dy= " + Math.round(dy*100)/100,90,30);
    text("x= " + Math.round(x*100)/100,10,10);
    text("y= " + Math.round(y*100)/100,10,30);
    
    if(gameStarted == 1){
    pointsCounter();
    
    }
}

void mouseReleased(){
    if((new Date()-lastClick)>500){
    g=0.1;
    [dx,dy] = [(mouseX-x)/10,(mouseY-y)/10];
    lastClick = new Date();
    }
    gameStart();
    
    
}

void gameStart(){
 if(gameStarted == 0){
    startTime = new Date();
    gameStarted=1;
 }
}

void pointsCounter(){
    points = Math.round((new Date() - startTime)/1000);
    text(points, 580,20);
}

void gameOver(){
    text("GAME OVER",250,200);
    text("Score = " + points, 250,220);
    
    if(points<20){
    text("Noob!",250,240);
    } else if(points<40){
    text("Nice!",250,240);
    } else {
    text("Awsome!",250,240);
    }
    
    exitLoop();
    
}




