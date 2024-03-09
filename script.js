function Bold() {
    var x = document.getElementsByTagName("textarea")[0];/*[0] is used to refer to the text inside.*/
    if (x.style.fontWeight == "bold") {
        x.style.fontWeight = "";
    }
    else {
        x.style.fontWeight = "bold";
    }
}

function Italic() {
    var x = document.getElementsByTagName("textarea")[0];
    if (x.style.fontStyle == "italic") {
        x.style.fontStyle = "";
    }
    else {
        x.style.fontStyle = "italic";
    }
}

function Left_align() {
    var x = document.getElementsByTagName("textarea")[0];
    if (x.style.textAlign != "left") {
        x.style.textAlign = "left";
    }
}

function Center_align() {
    var x = document.getElementsByTagName("textarea")[0];
    if (x.style.textAlign != "center") {
        x.style.textAlign = "center";
    }
}

function Right_align() {
    var x = document.getElementsByTagName("textarea")[0];
    if (x.style.textAlign != "right") {
        x.style.textAlign = "right";
    }
}

function Upper_case() {
    var x = document.getElementsByTagName("textarea")[0];
    if (x.style.textTransform != "uppercase") {
        x.style.textTransform = "uppercase";
    }
}

function Lower_case() {
    var x = document.getElementsByTagName("textarea")[0];
    if (x.style.textTransform != "lowercase") {
        x.style.textTransform = "lowercase";
    }
}

function Capitalizer() {
    var x = document.getElementsByTagName("textarea")[0];
    if (x.style.textTransform != "capitalize") {
        x.style.textTransform = "capitalize";
    }
}

function Clear_text() {
    var x = document.getElementsByTagName("textarea")[0];
    x.value = "";
}