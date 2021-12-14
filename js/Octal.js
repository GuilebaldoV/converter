;

import { Interface } from "./index.js";
import { Operations } from "./operations.js";

const d=document;

export class Octal{
    constructor(num,id,base){
        this.base=base
        this.$inputAnswer=d.getElementById(id);
        this.numero=d.getElementById(num).value;
        this.data;
        this.data2;
        this.operation=new Operations()
        this.ui=Interface
    }

    validations(){
    if(this.numero.length===0)return alert("Introduce un número.")
    if(!(this.numero.match(/^[0-7]+$/))) return alert("Introduce un número octal válido.")
    if(this.base==="dec")this.toDec()
    if(this.base==="byn")this.toBinary()
    if(this.base==="hex")this.toHex()
    
}

    toDec(){
        this.data=this.operation.iteratedMultiplications(this.numero,8)
        this.$inputAnswer.value=this.data[0]
        this.ui.octalToDecimal(this.data[1])
    
    }

    toBinary(){
        this.data=this.operation.binaryAndOctals(this.numero,8)
        this.$inputAnswer.value=this.data[0]
        this.ui.octalToBinary(this.data)
    }
    
    toHex(){
        this.data=this.operation.binaryAndOctals(this.numero,8)
        this.data2=this.operation.binaryAndHexas(this.data[0],2)
        this.$inputAnswer.value=this.data2[0]
        this.ui.octalToHexadecimal(this.data,this.data2)

    }


}
