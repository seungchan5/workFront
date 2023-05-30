window.onload = function(){
    let container = document.querySelector('#container');
    let img = document.createElement('img');
    

    img.setAttribute('width','150px');
    img.setAttribute('height','100px');

    let date = new Date();
    let hour = date.getHours();
    
    // if(date.getHours()<12){
    //     img.src='images/morning.jpg';
    // } else{
    //     img.src='images/afternoon.jpg';
    // }

    let imgSrc = (hour<12)?'images/morning.jpg' : 'images/afternoon.jpg';
    img.src = imgSrc;
    
    container.appendChild(img);


    
    
}