// 이미지 배열 만들기
pics = ['pic-1.jpg','pic-2.jpg','pic-3.jpg','pic-4.jpg','pic-5.jpg'];

window.onload = function(){
// 컨테이너 박스의 배경화면
// 배열의 0번째 인덱스 값을 넣기

// 1. 컨테이너 박스 선택
// id로 접근
    index = 0;

    // 컨테이너 박스의 백그라운드
    // 배열의 0번째 이미지를 보여줌
    container.style.backgroundImage = 'url(images/'+pics[index]+')';
    // 왼쪽 버튼이 클릭 되었을때
    // 0보다 작은가
    left.addEventListener('click', function(){
        index--;

        if(index < 0){
            // 마지막 그림으로 이동
            index = pics.length-1; 
        }
        container.style.backgroundImage='url(images/'+pics[index]+')';

    });
    // 오른쪽 버튼이 클릭 되었을때
    // 배열의 총 길이보다 크거나 같은가
    right.addEventListener('click', function(){
        index++;

        //마지막 인덱스인 경우 0으로 초기화
        if(index >= pics.length){
            index = 0;
        }
        container.style.backgroundImage='url(images/'+pics[index]+')';
    });
}

// 일정 간격으로 반복적으로 콜백 함수를 실행
// setInterval(콜백함수, 대기시간(밀리초), (콜백함수의 인자 나열));
var i=0;
var interval = setInterval(function(){
    // i++;
    // console.log('setInterval'+i);
    imgChange();
   

}, 3000);

function imgChange(){
    index++;

    // index, pics를 함수외부에서 참조할 수 있도록 전역변수로 생성
    //마지막 인덱스인 경우 0으로 초기화
    if(index >= pics.length){
        index = 0;
    }
    container.style.backgroundImage='url(images/'+pics[index]+')';
};

function stop(){
    console.log('setInterval 중지');
    clearInterval(interval);
};