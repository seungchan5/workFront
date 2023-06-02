window.onload = function(){
    let btn = document.querySelector('#btn');

    btn.addEventListener('click', function testJson(){
        let jsObj = JSON.parse(student);
        console.log(jsObj);
        let jsonStr = JSON.stringify(jsObj);
        console.log(jsonStr);
    });
}


let student = `
[
    {
        "name" : "고경희",
        "major" : "컴퓨터 공학",
        "grade" : 2,
        "phone" : "010-1111-2222"
     },
    {
        "name" : "홍길동",
        "major" : "컴퓨터 공학",
        "grade" : 2,
        "phone" : "010-2222-3333"
    }
]`

