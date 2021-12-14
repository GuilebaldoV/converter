import { Binary } from "./Binary.js";
import { Decimal } from "./Decinmal.js";
import { Hexadecimal } from "./Hexa.js";
import { Octal } from "./Octal.js";
import { UI } from "./UI.js";

export const Interface=new UI()

const d=document;
let combobox=document.getElementById("bases")
let combobox2=document.getElementById("bases2")
const buttonConverter=d.getElementById("converterbtn");
const buttonReset=d.getElementById("resetbtn");
const input=d.getElementById("first_base")
const input2=d.getElementById("second_base")

d.addEventListener("click",e=>{
    if(e.target===buttonConverter){
        selectConverter()
    }

    if(e.target==buttonReset){
        Interface.reset(combobox,combobox2,input,input2)
    }

})


combobox.addEventListener("change",e=>{
    Interface.configureCombos(combobox,combobox2)

})

combobox2.addEventListener("change",e=>{
    Interface.configureCombos(combobox2,combobox)

})


function selectConverter(){
    const conversion=`${d.getElementById("bases").value} ${d.getElementById("bases2").value}`
    if(conversion.length<5){
        return alert("Por favor selecione ambas bases.")
    }




    const conversiones={
        "dec byn":()=>{
            const decimal= new Decimal("first_base","second_base","byn")
            decimal.validations()
        },
        "dec oct":()=>{
            const decimal= new Decimal("first_base","second_base","oct")
            decimal.validations()
        },
        "dec hex":()=>{
            const decimal= new Decimal("first_base","second_base","hex")
            decimal.validations()
        },
        "byn dec":()=>{
            const binario=new Binary("first_base","second_base","dec")
            binario.validations()

        },
        
        "byn oct":()=>{
            const binario=new Binary("first_base","second_base","oct")
            binario.validations()

        },
        "byn hex":()=>{
            const binario=new Binary("first_base","second_base","hex")
            binario.validations()

        },

        "oct dec":()=>{
            const octal=new Octal("first_base","second_base","dec")
            octal.validations()

        },
        "oct byn":()=>{
            const octal=new Octal("first_base","second_base","byn")
            octal.validations()

        },
        "oct hex":()=>{
            const octal=new Octal("first_base","second_base","hex")
            octal.validations()

        },

        "hex dec":()=>{
            const hexa=new Hexadecimal("first_base","second_base","dec")
            hexa.validations()

        },

        "hex byn":()=>{
            const hexa=new Hexadecimal("first_base","second_base","byn")
            hexa.validations()

        },

        "hex oct":()=>{
            const hexa=new Hexadecimal("first_base","second_base","oct")
            hexa.validations()

        }

    }
    
    conversiones[conversion]()

}
