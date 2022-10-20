let add = document.getElementById('increment');             //add değişkenine id'si increment olan button'u atıyoruz
let remove = document.getElementById('decrement');          //remove değişkenine id'si decrement olan button'u atıyoruz


let num = document.getElementById('number');                // num değişkenine id'si number olan div'i atıyoruz.
let integer = 0;                                            // başlangıç değeri belirliyoruz.

add.addEventListener('click', function(){                   // click eventi ile oluşturduğumuz add değişkenine function atıyoruz.
    integer += 1;                                           // her click'te artacak değeri belirtiyoruz.        
    num.innerHTML = integer                                 // bunu inner html'ine yazdırıyoruz.    
})

remove.addEventListener('click', function(){                // click eventi ile oluşturduğumuz remove değişkenine function atıyoruz.    
    integer -= 1;                                           // her click'te azalacak değeri belirtiyoruz.
    num.innerHTML = integer                                 // bunu inner html'ine yazdırıyoruz.
})