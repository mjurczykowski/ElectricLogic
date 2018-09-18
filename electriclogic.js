//Initialize the variables below to what you want: either true or false.
let outlet = true;
let electricity = false;
let plug = false;
let powerSwitch = true;




//These variables should never change.
const on = true;
const off = !on;
let c;



/*
*
*  The section below here is where you will develop new boolean expresions.
*  For some examples delete the variable c below and fill it with some of the other
*  variables from the top.
*/


// 1. Your electronic device is ready if it is PLUGGED into an OUTLET with ELECTRICITY AND the POWERSWITCH is ON. Replace all of the c's with the correct variables.

let ready = electricity && outlet && plug && powerSwitch;

// 2. You forget to pay your elecrtic bill.  This means you have no electrity, set the variable unPaid equal to electrity AND false;

let unPaid = electricity && false; 

// 3. Old people just don't understand electronics.  Fill in the variable oldPeople to be equal to powerSwitch AND the opposite of powerSwitch

let oldPeople = powerSwitch && !powerSwitch;

// 4. You are unsure if your device is plugged in or turned on.  Set the variable unsure to the OPPOSITE of POWERSWITCH AND the group - aka parentheses - of the OPPOSITE of PLUG OR the OPPOSITE of OUTLET.

let unsure = !powerSwitch && (!plug || !outlet);

// 5. Something is broken.  You are not sure if it is your power cord or the wall.  Set the variable broken equal to the OUTLET OR the PLUG OR the POWERSWITCH

let broken = outlet || plug || powerSwitch;





/*
*
*  This section is what prints out the the terminal so you can see the results.
*
*/

function reportResults(){
    const message =
        `
        The variable outlet: ${outlet},
        The variable electricty: ${electricity},
        The variable plug: ${plug},
        The variable powerSwitch: ${powerSwitch}
        `;
    console.log(message);

    const result =
        `
        The output of ready = ${ready},
        The output of unPaid = ${unPaid},
        The output of oldPeople = ${oldPeople},
        The output of unsure = ${unsure},
        The output of broken = ${broken},
        `;
    console.log(result);
}
reportResults();