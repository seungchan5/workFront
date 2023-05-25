window.onload = function(){
    
    // 내부함수 : 외부에서 호출할 수 없음
    // function test(){
    //     console.log('test');
    // }
    
    // 프로필 보기 클릭시 보이기

    // open, close는 window내의 내장 함수
    // 아이디로 참조 불가
    // 직접 변수에 담아줘야한다.
    
    let open = document.getElementById('open');
    let close = document.getElementById('close');

    // 특수문자로 인해 아이디로 참조불가
    let box = document.getElementById('modal-box');

    open.addEventListener('click', function(){
        box.classList.add('active');
    });

    // x버튼 클릭시 다시 사라지기 
    close.addEventListener('click', function(){
        box.classList.remove('active');
    });

    





    
}
