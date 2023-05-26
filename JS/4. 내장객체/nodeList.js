window.onload = function(){
    
    // btn1.addEventListener('click', function(){
        
    //     let javaNode = document.createElement('p');
    //     let JavaText = document.createTextNode('Java');
    //     let oracleNode = document.createElement('p');
    //     let Oracle = document.createTextNode('Oracle');
        
    //     let jspNode = document.createElement('p');
    //     let JSP = document.createTextNode('JSP/Sevret');
    //     let sprNode = document.createElement('p');
    //     let SPR = document.createTextNode('SPRING');
        
    //     javaNode.appendChild(JavaText);
    //     oracleNode.appendChild(Oracle);
    //     jspNode.appendChild(JSP);
    //     sprNode.appendChild(SPR);
        
    //     let body = document.querySelector('body');

    //     let p = document.querySelector('p');
    
    //     body.insertBefore(javaNode, p);
    //     body.insertBefore(oracleNode, p);
    //     body.appendChild(jspNode);
    //     body.appendChild(sprNode);
    // });

        let javaNode = document.createElement('li');
        let JavaText = document.createTextNode('Java');
        let oracleNode = document.createElement('li');
        let Oracle = document.createTextNode('Oracle');
        
        let jspNode = document.createElement('li');
        let JSP = document.createTextNode('JSP/Sevret');
        let sprNode = document.createElement('li');
        let SPR = document.createTextNode('SPRING');
        
        javaNode.appendChild(JavaText);
        oracleNode.appendChild(Oracle);
        jspNode.appendChild(JSP);
        sprNode.appendChild(SPR);
        
        let body = document.querySelector('#items');
    
        let li = document.querySelector('li');
    
        body.insertBefore(javaNode, li);
        body.insertBefore(oracleNode, li);
        body.appendChild(jspNode);
        body.appendChild(sprNode);
    

}
