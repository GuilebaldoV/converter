

export class Operations{
    iteratedDivisiones(numero,div){
        
        let cociente=1; 
        let num=parseFloat(numero)
        let numArray=[]
        let residuo;
        while (cociente>0) {
            cociente=Math.floor(num/div)
            residuo=num%div;
            num=cociente;
            numArray.push([cociente,residuo])
        }
    
        let Num=""
        numArray.reverse().forEach(element => {
            Num+=element[1]
        });
        return [Num,numArray]


    }

    iteratedMultiplications(numero,base){
        let Num=0;
        let counter=0
        let numString=""
        for (let i =numero.length-1; i > -1; i--) {
            Num+=numero[i]*(base**counter)
            numString+=`(${numero[i]}x${base**counter}) + `
            counter++
            
        }
        
        numString=numString.substring(0,numString.length-2)
        numString+=`= ${Num}`
    
        return [Num,numString]

    }


    hexasAndDecimals(numero,base){
        let hexa=""
        
        
        const dec=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        const hex=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
        
        if(base===10){
            let divisiones=this.iteratedDivisiones(numero,16)
            // console.log(divisiones,"chechar")
            
            divisiones[1].forEach(element => {
                    if(element[1]>9){
                        hexa+=hex[element[1]]
                        element[0]=hex[element[1]]
                    }else{
                        hexa+=element[1]
                        element[0]=hex[element[1]]

                    }            
                });
            divisiones[0]=hexa
            return divisiones
        }
    
    
        if(base==16){
            let newNum=""
            let auxArray=[]
            for (let i = 0; i < numero.length; i++) {
                if((numero[i].match(/^[abcdef]+$/))){
                    auxArray.push(dec[hex.indexOf(numero[i].toUpperCase())])
                    
                }else{                    
                    auxArray.push(dec[hex.indexOf(numero[i])])
                }

            }
            let data=this.iteratedMultiplications(auxArray,16)
        
            return data
        
        
        }
    }


    binaryAndHexas(numero,base){
        const Hexas=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
        const Binarys=["0000","0001","0010","0011","0100","0101","0110","0111","1000","1001","1010","1011","1100","1101","1110","1111"];
        let auxArray=[]
        let auxString=""
        
        if(base===2){
            while(!(numero.length%4===0))numero="0".concat(numero)
            let counter=0;
        
            for (let i = 0; i < numero.length; i++) {
                auxString+=`${numero[i]}`
                counter++;
                if(counter===4){
                    auxArray.push(auxString)
                    auxString=""
                    counter=0;
                }
        
            }
            let NumHex="";
            let returnArray=[]
            for (let index = 0; index   < auxArray.length; index++) {
                    NumHex+=`${Hexas[Binarys.indexOf(auxArray[index])]}`
                    returnArray.push([auxArray[index],Hexas[Binarys.indexOf(auxArray[index])]])
                }
        
            return [NumHex,returnArray]
    
        }
    
        if(base===16){
          for (let i = 0; i < numero.length; i++) {
            if((numero[i].match(/^[abcdef]+$/))){
                auxString+=Binarys[Hexas.indexOf(numero[i].toUpperCase())]
                auxArray.push([numero[i],Binarys[Hexas.indexOf(numero[i].toUpperCase())]])            
            }else{
                auxString+=Binarys[Hexas.indexOf(numero[i])]
                auxArray.push([numero[i],Binarys[Hexas.indexOf(numero[i])]])
            }
    
          }
          return [auxString,auxArray]
        }
    



    }


    binaryAndOctals(numero,base){
        const hash_table={
            0:"000",
            1:"001",
            2:"010",
            3:"011",
            4:"100",
            5:"101",
            6:"110",
            7:"111"
        }
        if(base===8){
            let numBinary=""
            let numArray=[]
            for (let i = 0; i <numero.length; i++) {
                numBinary+=`${hash_table[numero[i]]}`
                numArray.push( [ numero[i],hash_table[numero[i]] ] )
            
            
                }
            return [numBinary,numArray]
            }
        
        let auxArray=[]
        
        
        if(base===2){
            while(!(numero.length%3===0))numero="0".concat(numero)
    
    
            let auxString=""    
            let counter=0;
        
    
            for (let i = 0; i < numero.length; i++) {
                auxString+=`${numero[i]}`
                counter++;
                if(counter===3){
                    auxArray.push(auxString)
                    auxString=""
                    counter=0;
                }
        
            }
            let octal=""
            let numArray=[]
            auxArray.forEach(element => {
                for (const key in hash_table) {
                    if(hash_table[key]===element){
                        octal+=`${key}`
                        numArray.push([element,key])
                    }
                
                }
            });
    
            return [octal,numArray]
    
            }
    }

    
    






    
    }


