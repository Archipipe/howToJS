window.onload =function() {
    let errStatus = false;
    let a = 0;
    userGroup = prompt("Введите название вашей группы", "");
    userName = prompt("Введите ваше имя" , "");

    try{
        if (!isNaN(parseInt(userGroup)) ||  !isNaN(parseInt(userName)) ||  userGroup == null  || userName == null){
            errStatus = true
            throw("этат дом запривачин гнида блядь");

        }
    } catch (e) {
         alert(e)
         alert("Страница будет перезагружена, ебанат, в следующий раз вводи буквы")

        setTimeout( () =>{
            location.reload()
        }, 2000)
    };

    if (errStatus == false) {
     q1 = confirm("Определение заголовка должно содержаться внутри тэга <HTML>?");
     q2 = confirm("Весь остальной HTML-документ, включая весь текст, содержится внутри тэга <BODY>?");
     q3 = confirm("Тэг перевода строки это <BR>?");
     q4 = confirm("Тэг <LINK> предоставляет возможности управления размером, гарнитурой и цветом текста?");
     q5 = confirm("ALIGN – определяет способ выравнивания заголовка по горизонтали?")

    if (q1 == false){
        a += 1;
    }

    if (q2 == true){
        a += 1;
    }

    if (q3 == true){
        a += 1;
    }

    if (q4 == false){
        a += 1;
    }

    if (q5 == true){
        a += 1;
    }

    alert(`${userName} из ${userGroup} группы набрал ${a} баллов из 5, поздравляю, вы ебанат`)
}

}
// Мой аналог

function test(task,correctAnswer,currentScore){
    return (confirm(task) == correctAnswer && currentScore++,currentScore);
}
function lab() {
    var score = 0;
    score = test("Тег <font> может содержать в себе атрибут size?",true,score);
    score = test("Данная строка изменит размер внутри тега <p>? \n <p style=font-stretch:12px >text</p>",false,score);
    score = test("Тег <big> нужно закрывать?",true,score);
    score = test("Данная строка изменит размер внутри тега <p>? \n <p style=font-size:12px >text</p>",true,score);
    
    alert("Фамилия: "+sName+"\nГруппа: "+group+"\nРезультат: "+score);
}