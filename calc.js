var valstack = [];
var x='';
function number(value) {
    document.cal.result.value += value;
    x+=value;
    if(value=='+') {
        valstack.push(x);
        x = '';
    }
    else if (value == '-') {
        valstack.push(x);
        x = '';
    }
    else if (value == '*') {
        valstack.push(x);
        x = '';
    }
    else if (value == '/') {
        valstack.push(x);
        x = '';
    }
    else if(value == '!') {
        x = factorial(x);
        valstack.push(x);
        x = '';
    }
}

function cle(value) {
    document.cal.result.value = value;
    x = '';
}

function evalua(value) {
    var exp='';
    valstack.push(x);
    for(var i=0;i<valstack.length;i++) {
        exp+=valstack[i];
    }
    document.cal.result.value = eval(exp);
    while (valstack.length!=0) {
        valstack.pop();
    }
}

function factorial(value) {
    var fact=1;
    for(var i=1;i<=parseInt(value);i++) {
        fact*=i;
    }
    return fact;
}
