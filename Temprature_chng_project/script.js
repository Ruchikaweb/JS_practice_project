const calculatortemp = () =>{
    const numbertemp = document.getElementById('temp').value ;
    console.log(numbertemp)
    const tempselected = document.getElementById('seltemp') ;
    const valuetemp = seltemp.options[tempselected.selectedIndex].value ;
    console.log(valuetemp)

    const celToFah = (celc) => {
        let Fahrenheit = Math.round((celc * 9/5) +32) ;
        console.log(Fahrenheit)
        return Fahrenheit ;
    }

    const fahtocel = (fehr) => {
        let Celcious = Math.round((fehr - 32) * 5/9) ;
        console.log(Celcious)
        return Celcious ;
    }

    let resultt ;

    if(valuetemp == 'cel'){
        resultt = celToFah(numbertemp);
        document.getElementById('result').innerHTML = `= ${resultt} Fahrenheit `;
    } else{
        resultt = fahtocel(numbertemp);
        document.getElementById('result').innerHTML = `= ${resultt} Celsius `;
    }
} 

