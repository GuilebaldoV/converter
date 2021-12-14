import { Interface } from "./index.js";
import { Operations } from "./operations.js";

const d=document;


export class Binary{
    constructor(num,id,base){
        this.base=base
        this.$inputAnswer=d.getElementById(id);
        this.numero=d.getElementById(num).value;
        this.data;
        this.operation=new Operations()
        this.ui=Interface
    }

    validations(){
    if(this.numero.length===0)return alert("Introduce un número.")
    if(!(this.numero.match(/^[0-1]+$/))) return alert("El número introducido no es un numero binario.")
    if(this.base==="dec")this.toDec()
    if(this.base==="oct")this.toOctal()
    if(this.base==="hex")this.toHex()
    
}

    toDec(){
        this.data=this.operation.iteratedMultiplications(this.numero,2)
        this.$inputAnswer.value=this.data[0]
        this.ui.binaryToDecimal(this.data[1])
    }

    toOctal(){
        this.data=this.operation.binaryAndOctals(this.numero,2)
        this.$inputAnswer.value=this.data[0]
        this.ui.binaryToOctal(this.data)
        
    }
    
    toHex(){
        this.data=this.operation.binaryAndHexas(this.numero,2)
        this.$inputAnswer.value=this.data[0]
        this.ui.binaryToHexa(this.data)
    }


}