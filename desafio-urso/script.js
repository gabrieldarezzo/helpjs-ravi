imagens = new Array("../images/chara-1.png", "../images/chara-2.png", "../images/chara-3.png")
i = 0
m = -10;
function change() {
    i++;
    m += 10;
    i == imagens.length ? i = 0 : "";
    document.view.src = imagens[i];
    m <= window.screen.availWidth ? document.view.style.marginLeft = m + "px" : m = -10;
    setTimeout("change()", 100);
}