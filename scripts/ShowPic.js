function showpic(whichpic) {
    // 1.点击文字链接，显示相应的照片
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    // placeholder.src = source;

    // 2.点击文字链接，同时在图片下方显示对应的文字描述
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    // 打印 description的文本节点的值“Choose an image”
    // alert(description.childNodes[0].nodeValue);
    // 将TEXT的值赋给description的文本
    description.firstChild.nodeValue = text;
}
function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    var count_element = body_element.childNodes.length;
    // 打印BODY元素下的子元素的数量
    // alert(body_element.childNodes.length);
    // 打印所有BODY元素下的子元素的类型名称和代码
    var str_nodestype = '';
    for (var i = 0; i < count_element; i++) {
        str_nodestype += body_element.childNodes[i].nodeName + " " + body_element.childNodes[i].nodeType +"\n";
    }
    alert(str_nodestype);
}