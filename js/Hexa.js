import { Interface } from "./index.js";
import { Operations } from "./operations.js";

const d=document;


export class Hexadecimal{
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
    if(!(this.numero.match(/^[0-9ABCDEFabcdef]+$/))) return alert("El número introducido no es un número hexadecimal.")
    if(this.base==="dec")this.toDec()
    if(this.base==="byn")this.toBinary()
    if(this.base==="oct")this.toOctal()
    
}

    toDec(){
        this.data=this.operation.hexasAndDecimals(this.numero,16)
        this.$inputAnswer.value=this.data[0]
        this.ui.hexalTodecimal(this.data)
        
    }
    
    toBinary(){
        this.data=this.operation.binaryAndHexas(this.numero,16)
        this.$inputAnswer.value=this.data[0]
        this.ui.hexalToBinary(this.data)
        
    }
    
    toOctal(){
        this.data=this.operation.binaryAndHexas(this.numero,16)
        this.data2=this.operation.binaryAndOctals(this.data[0],2)
        this.$inputAnswer.value=this.data2[0]
        this.ui.hexalToOctal(this.data,this.data2)

    }


}
