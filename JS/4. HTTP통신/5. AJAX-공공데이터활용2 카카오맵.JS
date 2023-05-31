var map;
window.onload = function(){
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 12 // 지도의 확대 레벨
    };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    map = new kakao.maps.Map(mapContainer, mapOption); 


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

            if(json.response.body.items == ''){
                alert('주변에 캠핑장이 없습니다. 반경을 확대해보세요');
                return;
            }
            // 캠핑장 리스트를 매개변수로 넣어준다.
            printCampInfo(json.response.body.items.item);
        })
        .catch((err)=> console.log(err));

        
    });
}
     // 현재위치를 받아서 mapX, mapY에 출력
     function doSomething(latitude, longitude){
        console.log('latitude',latitude);  // 경도
        console.log('longitude',longitude); // 위도
        let mapX = document.querySelector('input[name=mapX]');
        let mapY = document.querySelector('input[name=mapY]');

        mapX.value = longitude;
        mapY.value = latitude;

        // 현재 위치를 받아온 후 지도의 중심좌표를 변경하고
        // 접속위치에 마커를  표시
        
        // 지도의 중심위치를 변경
        var locPosition = new kakao.maps.LatLng(latitude, longitude);
        // 지도 중심좌표를 접속위치로 변경
        map.setCenter(locPosition);  
        
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({  
            map: map, 
            position: locPosition
        }); 
    }

    // 캠핑장 정보 출력
    // 배열을 매개변수로 받아서 배열에 입력된 캠핑장 정보를 화면에 출력 합니다.
    function printCampInfo(itemArr){

    // let itemArr = jsObj.response.body.items.item;

    let resDiv = document.querySelector('#result');

    // div 초기화
    resDiv.innerHTML = '';
    
    resDiv.innerHTML += '<ul>';
    
    // 마커를 여러개 생성하기 위해서
    // 위치배열을 생성
    let positions = [];

    for(item of itemArr){
        resDiv.innerHTML += `
            <li>
                <h1>${item.facltNm}</h1>
                <p><img src="${item.firstImageUrl}" alt="캠핑장 이미지"></p>
                <p>${item.intro}</p>   
                <p>${item.mapX}, ${item.mapY}</p>    
            </li>
        `;

        // 포지션 객체를 생성
        let position = {
            title: item.facltNm, 
            latlng: new kakao.maps.LatLng(item.mapY, item.mapX)
        };
        positions.push(position);
    }
    for (var i = 0; i < positions.length; i ++) {
    
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커를 표시할 위치
            title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        });
    }

    resDiv.innerHTML += '</ul>';
}


