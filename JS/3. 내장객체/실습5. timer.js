window.onload = function(){
    
    const bttn = document.querySelector('#bttn');
    const notiBox = document.querySelector('#noti-box');

    bttn.addEventListener('click', function(){

        // notiBox에 새로운 알림을 추가
        let noti = document.createElement('div');
        noti.classList.add('noti');
        noti.innerHTML = '알림내용 표시';
        
        // 화면에 출력
        // 자식요소로 등록
        notiBox.appendChild(noti);

        // 2초 후 함수 실행
        setTimeout(()=>{
            // 요소삭제
            noti.remove();
        }, 2000);

        

    });
}