function intloop() {
    for(let i = 1; i != 11; i++) {
        alert(i);
    }
}

function question() {
   let res1 = prompt('Али гей?', 'Нет');
      if ( res1 == 'Нет') 
      {
         alert ("Влада ответ!" )
      } else if (res1== 'Да')
      {
         alert ('Лох')
      } else {
           alert ('Ошибка природы')
      }
}

function intloopseven() {
   
    for ( let i = 0; i<=10; i++)
    {
        if (i==7) {
            continue;
        }
        alert (i); 

    }
}
function intloopatob() {
    var a = +prompt("первое число");
    var b = +prompt("второе число");
    var sum = 0;
    while(a != b + 1) {
        sum += a;
        a += 1;
        alert(sum);
    }
    alert(sum);
}