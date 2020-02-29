var html = document.querySelector('html');
changeRem();
window.addEventListener('resize', changeRem);

function changeRem() {
    var width = html.getBoundingClientRect().width;
    if (width == 375) {
        html.style.fontSize = width / 375 * 50 + 'px';
    }
     html.style.fontSize = width / 375 * 50 + 'px';
}

// $(function () {
//     initFontSize()
// })
//
// function initFontSize() {
//     const cw = document.documentElement.clientWidth
//     // width: 667px -> fontSize:16px
//     if (cw == 375) {
//         document.documentElement.style.fontSize = '50px'
//     } else {
//         document.documentElement.style.fontSize = cw / 375 * 50 + 'px'
//     }
// }