

function ClearAll() {
    document.getElementById("bb-number").innerHTML = '';
    document.getElementById("LoopingNumber").value = '';
    document.getElementById("BishNumber").value = '';
    document.getElementById("BoshNumber").value = '';
};

function BishBosh() {
    document.getElementById("bb-number").innerHTML = '';
    var x = document.getElementById("bbovn");
    var text = "";
    var runtest = true;
    for (var i = 0; i < x.length; i++) {
        text += x.elements[i].value + ' ';
        if (x.elements[i].id == "LoopingNumber") {
            var inputLoop = x.elements[i].value;
        }
        if (x.elements[i].id == "BishNumber") {
            var inputbish = x.elements[i].value;
        }
        if (x.elements[i].id == "BoshNumber") {
            var inputbosh = x.elements[i].value;
        }
    }


    if (isNaN(inputLoop) || inputLoop == '') {
        alert("Ange ett numeriskt för antal loopar!");
        document.getElementById("LoopingNumber").value = '';
        document.getElementById("LoopingNumber").style.backgroundColor = "red";
        runtest = false;
    };
    if (isNaN(inputbish) || inputbish == '') {
        alert("Ange ett numeriskt för Bish!");
        document.getElementById("BishNumber").value = '';
        document.getElementById("BishNumber").style.backgroundColor = "red";

        runtest = false;
    };
    if (isNaN(inputbosh) || inputbosh == '') {
        alert("Ange ett numeriskt för Bosh!");
        document.getElementById("BoshNumber").value = '';
        document.getElementById("BoshNumber").style.backgroundColor = "red";

        runtest = false;
    };


    if (!isNaN(inputLoop) && !isNaN(inputbish) && !isNaN(inputbosh) && runtest) {
        document.getElementById("LoopingNumber").style.backgroundColor = "white";
        document.getElementById("BishNumber").style.backgroundColor = "white";
        document.getElementById("BoshNumber").style.backgroundColor = "white";

        document.getElementById("bb-number").innerHTML += "<b><br />Du har valt " + inputbish + " som Bish och " + inputbosh + " som Bosh</b><br /><br />"
        for (var i = 1; i <= inputLoop; i++) {
            if (i % inputbish == 0 && i % inputbosh == 0) {
                document.getElementById("bb-number").innerHTML += '<b>Bish-Bosh</b>, ';
            } else if (i % inputbish == 0 && i % inputbosh != 0) {
                document.getElementById("bb-number").innerHTML += 'Bish, ';
            } else if (i % inputbosh == 0 && i % inputbish != 0) {
                document.getElementById("bb-number").innerHTML += 'Bosh, ';
            } else {
                document.getElementById("bb-number").innerHTML += i + ', ';
            }
        };
    };
};

