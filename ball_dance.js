var ball = $('#ball');
var div1 = $('#d1');
var div2 = $('#d2');
var div3 = $('#d3');
var div4 = $('#d4');
var div5 = $('#d5');
var div6 = $('#d6');
var section1 = $('#section-one');
var section2 = $('#section-two');
var section3 = $('#section-three');
var section4 = $('#section-four');
var section5 = $('#section-five');
var section6 = $('#section-six');
var colorArray = ['#80ADD7','#0e4675','#9ae1d4','#f9d4db','#ff9690','#f9545b'];

var blocksCoordinates = {
    div1 : {
        left : div1.offset().left,
        right : div1.offset().left + div1.width(),
        top : div1.offset().top,
        bottom : div1.offset().top + div1.height()
    },
    div2 : {
        left : div2.offset().left,
        right : div2.offset().left + div2.width(),
        top : div2.offset().top,
        bottom : div2.offset().top + div2.height()
    },
    div3 : {
        left : div3.offset().left,
        right : div3.offset().left + div3.width(),
        top : div3.offset().top,
        bottom : div3.offset().top + div3.height()
    },
    div4 : {
        left : div4.offset().left,
        right : div4.offset().left + div4.width(),
        top : div4.offset().top,
        bottom : div4.offset().top + div4.height()
    },
    div5 : {
        left : div5.offset().left,
        right : div5.offset().left + div5.width(),
        top : div5.offset().top,
        bottom : div5.offset().top + div5.height()
    },
    div6 : {
        left : div6.offset().left,
        right : div6.offset().left + div6.width(),
        top : div6.offset().top,
        bottom : div6.offset().top + div6.height()
    }
}


$(document).mousemove(function(event){
    
    let ballCoordinates = { 
        left : ball.offset().left,
        right : ball.offset().left + ball.width(),
        top : ball.offset().top, 
        bottom : ball.offset().top + ball.height()
    };

    $('#ball').offset({
        left:(event.pageX - ball.innerHeight()/2),
        top:(event.pageY - ball.innerHeight()/2)
    });

    //to check if part of a circle is in block 1
    if(enterdiv1(ballCoordinates)){
        //console.log('enter div1');
        let pos = getPosition(div1,ballCoordinates);
        section1.width(getWidth(div1,ballCoordinates));
        section1.height(getHeight(div1,ballCoordinates));
        section1.css({
            top : pos.top,
            left : pos.left,
            backgroundColor : colorArray[0]
        });
    
        ball.append(section1);
    }
    else{
        section1.detach();
    }

    //to check if part of a circle is in block 2
    if(enterdiv2(ballCoordinates)){
        //console.log('enter div2');
       let pos = getPosition(div2,ballCoordinates);
        section2.width(getWidth(div2,ballCoordinates));
        section2.height(getHeight(div2,ballCoordinates));
        section2.css({
            top : pos.top,
            left : pos.left,
            backgroundColor : colorArray[1]
        });
      
        ball.append(section2);
    }
    else{
        section2.detach();
    }

    //to check if part of a circle is in block 3
    if(enterdiv3(ballCoordinates)){
        //console.log('enter div3');
        let pos = getPosition(div3,ballCoordinates);
        section3.width(getWidth(div3,ballCoordinates));
        section3.height(getHeight(div3,ballCoordinates));
        section3.css({
            top : pos.top,
            left : pos.left,
            backgroundColor : colorArray[2]
        });
        
        ball.append(section3);
    }
    else{
        section3.detach();
    }

    //to check if part of a circle is in block 4
    if(enterdiv4(ballCoordinates)){
       //console.log('enter div4');
       let pos = getPosition(div4,ballCoordinates);
       section4.width(getWidth(div4,ballCoordinates));
       section4.height(getHeight(div4,ballCoordinates));
       section4.css({
           top : pos.top,
           left : pos.left,
           backgroundColor : colorArray[3]
       });
       
       ball.append(section4);
    }
    else{
        section4.detach();
    }

    //to check if part of a circle is in block 5
    if(enterdiv5(ballCoordinates)){
      //  console.log('enter div5')
        let pos = getPosition(div5,ballCoordinates);
        section5.width(getWidth(div5,ballCoordinates));
        section5.height(getHeight(div5,ballCoordinates));
        section5.css({
            top : pos.top,
            left : pos.left,
            backgroundColor : colorArray[4]
        });
        
        ball.append(section5);
    }
    else{
        section5.detach();
    }

    //to check if part of a circle is in block 6
    if(enterdiv6(ballCoordinates)){
       // console.log('enter div6');
        let pos = getPosition(div6,ballCoordinates);
        section6.width(getWidth(div6,ballCoordinates));
        section6.height(getHeight(div6,ballCoordinates));
        section6.css({
            top : pos.top,
            left : pos.left,
            backgroundColor : colorArray[5]
        });
        ball.append(section6);
    }
    else{
        section6.detach();
    }

});

function enterdiv1(ball_coord){
    
    if((ball_coord.left > blocksCoordinates.div1.right) || (ball_coord.top > blocksCoordinates.div1.bottom)){
        return false;
    }
    else{
        return true;
    }
}

function enterdiv2(ball_coord){
     
    if((ball_coord.right < blocksCoordinates.div2.left) || (ball_coord.left > blocksCoordinates.div2.right)  || (ball_coord.top > blocksCoordinates.div2.bottom )){
        return false;
    }
    else{
        return true;
    }
}

function enterdiv3(ball_coord){
    
   if((ball_coord.right < blocksCoordinates.div3.left) || (ball_coord.top > blocksCoordinates.div3.bottom)){
       return false;
   }
   else{
       return true;
   }
}

function enterdiv4(ball_coord){
    
    if((ball_coord.left > blocksCoordinates.div4.right) || (ball_coord.bottom < blocksCoordinates.div4.top)){
        return false;
    }
    else{
        return true;
    }
}

function enterdiv5(ball_coord){
    
    if((ball_coord.left > blocksCoordinates.div5.right) || (ball_coord.bottom < blocksCoordinates.div5.top) || (ball_coord.right < blocksCoordinates.div5.left)){
        return false;
    }
    else{
        return true;
    }
}

function enterdiv6(ball_coord){
    
    if((ball_coord.bottom < blocksCoordinates.div6.top) || (ball_coord.right < blocksCoordinates.div6.left)){
        return false;
    }
    else{
        return true;
    }
}

//function to return width of the portion that has entered a box
function getWidth(div,ballCoordinates){

    let temp = div.offset().left+div.width();
    let newWidth = 0;
        if(ballCoordinates.left > div.offset().left && ballCoordinates.right > temp){

            newWidth = temp - ballCoordinates.left;
            
            //console.log(section1.width());
        }
        else if(ballCoordinates.left < div.offset().left){
            newWidth = ballCoordinates.right - div.offset().left;
        }
        else {
            newWidth = ball.width();
            //console.log(section1.width());
        }
   return newWidth+1; 
}

function getPosition(div,ballCoordinates){
    let topPos = 0;
    let leftPos = 0;

    if(ballCoordinates.top < div.offset().top){
        topPos = div.offset().top;
    }
    else{
        topPos = ballCoordinates.top;
    }

    if(ballCoordinates.left > div.offset().left){
        leftPos = ballCoordinates.left;
    }
    else{
        leftPos = div.offset().left;
    }

    return {
        left : leftPos,
        top : topPos
    };
}

//function to return height of the portion that has entered a box
function getHeight(div,ballCoordinates){
    let temp = div.offset().top + div.height();
    let newHeight = 0;

    if(ballCoordinates.top > div.offset().top && ballCoordinates.bottom > temp){
      
        newHeight = temp - ballCoordinates.top;
        
    }
    else if(ballCoordinates.top < div.offset().top ){
        newHeight = ballCoordinates.bottom - div.offset().top;
    }
    else{
        newHeight = ball.height();
    }

   
  return newHeight+1;
}

