window.onload = function(){
    
    // 현재 나의 위치를 확인하고 mapX, mapY 요소에  value 값에 세팅하기
    if ("geolocation" in navigator) {
        /* 위치정보 사용 가능 */
        
        // getCurrentPosition(성공콜백, 오류콜백)
        navigator.geolocation.getCurrentPosition(function(position){
        doSomething(position.coords.latitude, position.coords.longitude);
      });
      } else {
        /* 위치정보 사용 불가능 */
        alert('geolocation 지원 불가 - 현재 위치를 알 수 없음');
      } 
    
    let btn = document.querySelector('#btnCampInfo');
    
    btn.addEventListener('click',function(e){
        e.preventDefault();

        let campForm = document.querySelector('#campForm');
        let formData = new FormData(campForm);
        let url = 'https://apis.data.go.kr/B551011/GoCamping/locationBasedList?';
        let parms = '';
        // key/value pairs 반환
        for(let pair of formData.entries()){
            // console.log('pair[0]',pair[0]);
            // console.log('pair[1]',pair[1]);

            parms += `${pair[0]}=${pair[1]}&`;
        }
        url += parms;
        console.log('url',url);

        // ES6에서
        // url요청 결과를 받아 옵니다
        fetch(url)
        // 요청결과가 성공이라면
        // 화살표함수에서 한줄인경우 return문과 {}가 생략 가능
        // res.json() : javascript object로 반환
        .then(res => res.json())
        .then((json)=>{
            console.log('json',json);
            // 캠핑장 리스트를 매개변수로 넣어준다.
            printCampInfo(json.response.body.items.item);
        })
        .catch((err)=> console.log(err));

        
    });

    // 캠핑장 정보 출력
    // 배열을 매개변수로 받아서 배열에 입력된 정보를 화면에 출력
    function printCampInfo(itemArr){
        // let itemArr = jsObj.response.body.items.item;

        let box = document.querySelector('#result');
        
        // div 초기화
        box.innerHTML = '';
        
        box.innerHTML += '<ul>'

        for(item of itemArr){
                        
             box.innerHTML += `
            <li>
                <h1>${item.facltNm}</h1>
                <p><img src="${item.firstImageUrl}" alt=''></p>
                <p>${item.intro}</p>
            </li>
            `;
        } 
        box.innerHTML += '</ul>'
    };

    // 현재위치를 받아서 mapX, mapY에 출력
    function doSomething(latitude, longitude){
        console.log(latitude);  // 경도
        console.log(longitude); // 위도
        let mapX = document.querySelector('input[name=mapX]');
        let mapY = document.querySelector('input[name=mapY]');

        mapX.value = longitude;
        mapY.value = latitude;
        };
}