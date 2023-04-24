//Your JavaScript goes in here
var sw1 = false
var sw2 = false
var sw3 = false
s1count = 0;
s2count = 0;
s3count = 0;
v1coun = 0;
v2count = 0;
function getVoltage(id) {
    if (id === 'voltage1') {
        voltage1 = document.getElementById(id).value;
        document.getElementById("voltage-1-display").innerText = voltage1;
        volt_1 = document.getElementById('V_1').innerHTML = voltage1 + " volts";
    }

    else {
        voltage2 = document.getElementById(id).value;
        document.getElementById("voltage-2-display").innerText = voltage2;
        volt_2 = document.getElementById('V_2').innerHTML = voltage2 + " volts";
    }
}
function rswitch1() {
    // if(s1count!=1){
    //     document.getElementById("bar_s1").style.transform = "rotate(30deg)";
    //     document.getElementById("bar_s1").style.transformOrigin = "131.51px 268.36px";
    //     document.getElementById("bar_s1").style.transition = 'transform 0.5s';
    //     switch_1color = document.getElementById('s1').style.fill = 'green';
    //     sw1 = true;
    // }
    // if (sw1 === false) {

    // }
    // else {
    //     document.getElementById("bar_s1").style.transform = "rotate(0deg)";
    //     switch_1color = document.getElementById('s1').style.fill = '#ff0000';
    //     sw1 = false;
    // }
    if (sw1 === false) {
        if (s1count != 1) {
            document.getElementById("bar_s1").style.transform = "rotate(30deg)";
            document.getElementById("bar_s1").style.transformOrigin = "131.51px 268.36px";
            document.getElementById("bar_s1").style.transition = 'transform 0.5s';
            sw1 = true;
        }
    }
}

function rswitch2() {
    if (s2count != 1) {
        if (sw2 === false) {
            document.getElementById("bar_s2").style.transform = "rotate(-35deg)";
            document.getElementById("bar_s2").style.transformOrigin = "161.8px 285.4px";
            document.getElementById("bar_s2").style.transition = 'transform 0.5s';
            switch_2color = document.getElementById('srpo').style.fill = 'green';
            sw2 = true
        }
        else {
            document.getElementById("bar_s2").style.transform = "rotate(0deg)";
            switch_2color = document.getElementById('srpo').style.fill = '#ff0000';
            sw2 = false;
        }
    }

}

function rswitch3() {
    if (sw3 === false) {
        switch_3color = document.getElementById('s3').style.fill = 'green';
        sw3 = true;
    }
    else {
        switch_3color = document.getElementById('s3').style.fill = '#ff0000';
        sw3 = false;
    }
}

function alertfunc(id) {
    if (id === "CommonMode") {
        but1 = document.getElementById('CommonMode').style.backgroundColor = 'green';
        but2 = document.getElementById('DifferentialMode').style.backgroundColor = '#2f85ee';
        but3 = document.getElementById('CMRR').style.backgroundColor = '#2f85ee';
        but4 = document.getElementById('SlewRate').style.backgroundColor = '#2f85ee';
        alert('Switch1 (S1), Switch3 (S3) is Open where-as Switch2(S2) is Closed. V1 source is active V2 source is not active ')
        s2count = 1;
        console.log(s2count);
        document.getElementById("voltage1").disabled = false;
        document.getElementById("voltage2").disabled = true;

    }
    else if (id === "DifferentialMode") {
        but1 = document.getElementById('CommonMode').style.backgroundColor = '#2f85ee';
        but2 = document.getElementById('DifferentialMode').style.backgroundColor = 'green';
        but3 = document.getElementById('CMRR').style.backgroundColor = '#2f85ee';
        but4 = document.getElementById('SlewRate').style.backgroundColor = '#2f85ee';
        alert('Switch1 (S1) is closed  where-as Switch3 (S3),Switch2(S2) is Open. V1,V2 source is active')
        s1count = 1;
        document.getElementById("voltage1").disabled = false;
        document.getElementById("voltage2").disabled = false;
    }
    else if (id === "CMRR") {
        but1 = document.getElementById('CommonMode').style.backgroundColor = '#2f85ee';
        but2 = document.getElementById('DifferentialMode').style.backgroundColor = '#2f85ee';
        but3 = document.getElementById('CMRR').style.backgroundColor = 'green';
        but4 = document.getElementById('SlewRate').style.backgroundColor = '#2f85ee';
        alert("CMRR")
    }
    else if (id === "SlewRate") {
        but1 = document.getElementById('CommonMode').style.backgroundColor = '#2f85ee';
        but2 = document.getElementById('DifferentialMode').style.backgroundColor = '#2f85ee';
        but3 = document.getElementById('CMRR').style.backgroundColor = '#2f85ee';
        but4 = document.getElementById('SlewRate').style.backgroundColor = 'green';
        alert('Switch1 (S1) is open  where-as Switch3 (S3),Switch2(S2) is Closed. V1,V2 source is active')
    }
}

function openNav() {
    document.getElementById("mySidepanel").style.width = "500px";
    document.getElementById("mySidepanel").style.height = "100%";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}
