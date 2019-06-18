console.log('hello dongdong');

document.onmouseup = function (){
    var selecStr = window.getSelection().toString().trim()
    if (selecStr === '') return

    fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh&dt=t&q=${selecStr}`)
    .then(res => res.json())
    .then(result => {
        console.log(result[0][0][1] + '翻译为：' + result[0][0][0])
    })
};