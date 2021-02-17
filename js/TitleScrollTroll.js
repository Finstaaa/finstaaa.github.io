var scrl = " Finstaa ";
function scrollTitle() {
    scrl = scrl.substring(1, scrl.length) + scrl.substring(0, 1);
    document.title = scrl;
    setTimeout("scrollTitle()", 80);
}; scrollTitle();