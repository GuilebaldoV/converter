
import { Interface } from "./index.js";
import { Operations } from "./operations.js";

const d=document;



export  class Decimal{
    constructor(num,id,base){
        this.base=base
        this.$inputAnswer=d.getElementById(id);
        this.numero=d.getElementById(num).value;
        this.data;
        this.ui=Interface
    }

    validations(){
    if(this.numero.length===0)return alert("Introduce un numero")
    if(!(this.numero.match(/^[0-9]+$/))) return alert("Escribe solo numeros enteros postivos")
    if(this.base==="byn")this.toBinary()
    if(this.base==="oct")this.toOctal()
    if(this.base==="hex")this.toHex()
    

    
    }

    toBinary(){
        const operation=new Operations()
        this.data=operation.iteratedDivisiones(this.numero,2)
        this.$inputAnswer.value=this.data[0]
        console.log(this.data)
        this.ui.decimalToBinary(this.data[1].reverse(),2,this.numero,this.data[0])
        
    }

    toOctal(){
        const operation=new Operations()
        this.data=operation.iteratedDivisiones(this.numero,8)
        this.$inputAnswer.value=this.data[0]
        this.ui.decimalToOctal(this.data[1].reverse(),8,this.numero,this.data[0])

    }

    toHex(){
        const operation=new Operations()
        this.data=operation.hexasAndDecimals(this.numero,10)
        this.data2=operation.iteratedDivisiones(this.numero,16)
        this.$inputAnswer.value=this.data[0]
        this.ui.decimalToHexadecimal(this.data2[1].reverse(),this.data[1].reverse(),16,this.numero,this.data[0],)
    }



}