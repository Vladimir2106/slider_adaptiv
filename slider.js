/* НАЧАЛО АДАПТИВНОГО СЛАЙДЕР + ТЕКСТ НА СЛАЙДЕРЕ
var wii;
var hii;
const h0=document.querySelector('.h0')
const b110=document.querySelector('.b10')
const img0=document.querySelectorAll('.b10 div')
/* функция определния ширины екрана
function unitt (){
    wii=document.querySelector('.h0').offsetWidth; /* функция которая вычисляет размер екрана  автоматом и потом мы записывает автоматом размер в переменную
    console.log(wii);

    hii=document.querySelector('.h0').offsetHeight;
    console.log(hii);
    
    b110.style.width=wii*img0.length+'px';
    console.log(b110)
    for(let i of img0){
        i.style.width=wii+'px';
        i.style.height=hii+'px';}
    }
    unitt();
    window.addEventListener('resize',unitt);/* изменение изображение масштабирование при загрузке страницы 
unitt();
   sldd();
   var timet=0;
   var leftt=0; 
   /* начальное значение ширины 
           function sldd(){
               timet=setTimeout(zdvigg, 4000);
              /* console.log(b11)
           }
           function zdvigg(){
                   leftt=leftt-wii;
                   peree();
                   colord();
                   if(leftt<-img0.length*wii+500){
                    peree();
                    leftt=0;
                       clearTimeout(timet);  
                   }
                   b110.style.left=leftt +"px";
                   sldd();
                   colord();
           }
/* функция которая подгоняет размер картинки под измененный размер екрана при его изменении 
function peree(){
b110.style.transform='translate(-'+leftt*wii+'px)'
        }
/* функция увеличивания текста в на слайдере
function color (){
    const v=document.querySelectorAll('.b10 a')
    console.log(v)
    for (let i of v){
        i.addEventListener('mousemove', function(){
            i.style.fontSize="80px";
            i.style.transition="calc(2s)"
            i.style.borderBottom="2px solid white";
        })
    }
    
}
color();
/*функция приведение к нормальному размеру шрифт и цывет текста на картинке 
function colord (){
    const v=document.querySelectorAll('.b10 a')
    console.log(v)
    for (let i of v){
            i.style.fontSize="55px";
            i.style.transition="calc(2s)"
            i.style.borderBottom="none";
        }
}*/
/* КОНЕЦ АДАПТИВНОГО СЛАЙДЕР + ТЕКСТ НА СЛАЙДЕРЕ*/