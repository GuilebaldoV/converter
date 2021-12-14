export class UI{
    constructor(){
        this.$container=document.getElementById("container-bases")
        this.html=document.getElementById("container-bases").innerHTML
        this.$decimal=document.getElementById("divDec")
        this.$binary=document.getElementById("divBin")
        this.$octal=document.getElementById("divOct")
        this.$hexa=document.getElementById("divHex")
    }

    configureCombos(combo,combo2){




      for (let index = 0; index < combo2.options.length; index++) {
        if (combo2.options[index].value==combo.options[combo.selectedIndex].value){
          combo2.options[index].disabled="True"
        }
        else{
          
          combo2.options[index].removeAttribute("disabled")
        }
      }
      combo2.options[0].disabled="True"

    }

    decimalToBinary(divisores,divisor,inicial,result){
        this.$container.innerHTML=""
        this.$container.appendChild(this.$decimal)
        this.$container.appendChild(this.$binary)
        const $Explication=document.createElement("p")
        // <h3>Solucion</>
        $Explication.innerHTML=`
        <h3>
        
        Solucion.
        
        </h3>


        Para resolver este tipo de conversiones utilizaremos la división, donde nuestro divisor fijo es el número 2.
        El dividendo de la primera división será el número a convertir inicialmente, posterior a ese, el dividendo será el cociente de la divisón anterior.
        Dejarás de dividir el dividendo ya no sea divisible por el 2.


        `;
        this.$container.appendChild($Explication)

        this.insertDivisions(divisores,divisor,inicial)

        const $Explication2=document.createElement("result")
        $Explication2.innerHTML=`
        <p>
        
        Para escribir el resultado de la conversión, utilizaremos solo el residuo, recuerda que los números se ordenan del ultimo al primero.
        
        <p/>
            <h3 class="center-title">${result}</h3>
        `;

        this.$container.appendChild($Explication2)


    }

    decimalToOctal(divisores,divisor,inicial,result){
        this.$container.innerHTML=""
        this.$container.appendChild(this.$decimal)
        this.$container.appendChild(this.$octal)
        const $Explication=document.createElement("p")

        $Explication.innerHTML=`
        <h3>Solucion.</h3>
        
        Para resolver este tipo de conversiones utilizaremos la división, donde nuestro divisor fijo es el número 8.
        El dividendo de la primera división será el número a convertir inicialmente, posterior a ese, el dividendo será el cociente de la divisón anterior.
        Dejarás de dividir el dividendo ya no sea divisible por el 8.
        
        `;
        this.$container.appendChild($Explication)

        this.insertDivisions(divisores,divisor,inicial)

        const $Explication2=document.createElement("result")
        $Explication2.innerHTML=`
        <p>
        
        Para escribir el resultado de la conversión, utilizaremos solo el residuo, recuerda que los números se ordenan del ultimo al primero.
        
        <p/>
            <h3 class="center-title">${result}</h3>
        `;

        this.$container.appendChild($Explication2)
    }

    decimalToHexadecimal(divisores,divisoreshexa,divisor,inicial,result){
        this.$container.innerHTML=""
        this.$container.appendChild(this.$decimal)
        this.$container.appendChild(this.$hexa)
        const $Explication=document.createElement("p")

        $Explication.innerHTML=`
        <h3>
        
        Solucion.
        
        </h3>
        
        Primera tengamos en cuenta la siguiente tabla de equivalencia entre numeros decimal y hexadecimales, pues la usaremos para pasar los residuos en digitos decimales a digitos hexadecimales
        
        `;
        this.$container.appendChild($Explication)

        this.$container.appendChild(this.insertTableDecimalHexa())

        const $Explication2=document.createElement("p")
        $Explication2.innerHTML=`
        <p>
        
        Utilizaremos divisiones iteradas, donde nuestro divisor fijo es el número 16.
        El dividendo de la primera división será el número a convertir inicialmente, posterior a ese, el dividendo será el cociente de la divisón anterior.
        Dejarás de dividir el dividendo ya no sea divisible por el 8.        <p/>
        
        `;

        this.$container.appendChild($Explication2)
        this.insertDivisions(divisores,divisor,inicial)

        const $Explication3=document.createElement("p")
        $Explication3.innerHTML=`
        <p>
        
        Ahora asociamos cada residuo en decimal con su respectivo hexadecimal, de arriba hacia abajo, formamos nuestro numero hexadecimal.
        
        <p/>
        `;
        this.$container.appendChild($Explication3)
        this.relacionalTable(divisoreshexa,"Decimal","Hexadecimal")
        this.$container.innerHTML+=`
        <p>
        
        Teniendo como resultado el numero:
        
        <h3 class="center-title">
        ${result}
        <h3/>
        <p/>
        `
    }

    binaryToDecimal(data){
      this.$container.innerHTML=""
      this.$container.appendChild(this.$binary)
      this.$container.appendChild(this.$decimal)
      this.$container.innerHTML+=`
      <h3 class="center-title">
      
      Solucion.
      
      </h3>
      <p>
      
      Para hacer la conversión solo trabajaremos con sumas, multiplicaciones y potencias de base 2. Cada digito que compone el número a convertir se multiplicará con una potencia de base 2, y se sumaran entre ellas. Las potencias se ordenaran comenzando en 0 y terminando en n, como se muestra a continuación.
      
      <p/>
      <h4 class="center-title">
      ${data}
      </h4>
      `;


    }

    binaryToOctal(data){
      this.$container.innerHTML=""
      this.$container.appendChild(this.$binary)
      this.$container.appendChild(this.$octal)
      this.$container.innerHTML+=`
      <h3 class="center-title">Solucion</h3>
      <p>
      
      Tendremos una regla para resolver estas conversiones:
      Por cada dígito octal se representa mediante un binario de tres dígitos.
      
      <p/>
      `
      this.$container.appendChild(this.insertTableOctalAndBinary())
      this.$container.innerHTML+=`
      <p>
      
      Dividimos nuestro numero binario en grupos de 3 digitos y asociamos estros grupos con su correspondiente representacion octal, con la representaciones en octal formamos nuestro numero, de arriba hacia abajo.
      
      <p/>
      `
      this.relacionalTable(data[1],"Octal","Binario")
      
      this.$container.innerHTML+=`
      <p>
      
      Formando el numero:
      
      </p>
      <h3 class="center-title">
        ${data[0]}
      <h3/>
      `
    }

    binaryToHexa(data){
      this.$container.innerHTML=""
      this.$container.appendChild(this.$binary)
      this.$container.appendChild(this.$hexa)
      this.$container.innerHTML+=`
      <h3 class="center-title">
      
      Solucion.
      
      </h3>
      <p>
      
      Tendremos una regla para resolver estas conversiones:
      Un grupo de cuatro dígitos binarios se representan mediante un digito hexadecimal, como se muestra en la tabla.
      
      </p>
      `
      this.$container.appendChild(this.insertTableHexasAndBinary())

      this.$container.innerHTML+=`
      <p>
      
      Agrupamos los digitos del numero binario en grupos de 4 y asociamos el digito hexadecimal correspondiente.
      
      </p>
      `

      this.relacionalTable(data[1],"Hexadecimal","Binario")
      this.$container.innerHTML+=`
      <p>
      
      Por ultimo escribmos el numero en digito hexadecimales siguiendo el orden de arriba hacia abajo      </p>
      
      </p>

      <h3 class="center-title">${data[0]}</h3>
      `
    }

    octalToDecimal(data){
      this.$container.innerHTML=""
      this.$container.appendChild(this.$octal)
      this.$container.appendChild(this.$decimal)
      this.$container.innerHTML+=`
      <h3 class="center-title">Solucion.</h3>
      <p>
      
      Para hacer la conversión solo trabajaremos con sumas, multiplicaciones y potencias de base 8.
      Cada digito que compone el número a convertir se multiplicará con una potencia de base 8, y se sumaran entre ellas.
      Las potencias se ordenaran comenzando en 0 y terminando en n, como se muestra a continuación.
      
      </p>
      `
      this.$container.innerHTML+=`
      <h4 class="center-title">${data}</h4>    
      
      `
    }

    octalToBinary(data){
      this.$container.innerHTML=""
      this.$container.appendChild(this.$octal)
      this.$container.appendChild(this.$binary)
      this.$container.innerHTML+=`
      <h3 class="center-title">Solucion.</h3>
      <p>
      
      Tendremos una regla para resolver estas conversiones:
      Por cada dígito octal se representa mediante un binario de tres dígitos.
      
      </p>
      `

      this.$container.appendChild(this.insertTableOctalAndBinary())
      this.$container.innerHTML+=`
      <p>
      
      Escribiremos los digitos del número octal y lo relacionaremos con su binario.
      
      </p>
      `
      this.relacionalTable(data[1],"Binario","Octal")
      this.$container.innerHTML+=`
      <p>
      
      Ordena los números iniciando con el que esta en la parte superior y terminando con el que esta en la parte inferior de la tabla.</p>
      
      <h3 class="center-title">${data[0]}</h3>
      `


    }


    octalToHexadecimal(data,data2){
      this.$container.innerHTML=""
      this.$container.appendChild(this.$octal)
      this.$container.appendChild(this.$hexa)
      this.$container.innerHTML+=`
      <h3 class="center-title">Solucion</h3>
      <p>
      
      Para pasar de numeros octales a hexadecimales, primero tenemos que pasar de numeros octales a numeros binarios.
      
      </p>
      `
      this.$container.innerHTML+=`
      <p>
      
      Para pasar de octal a binario tendremos la siguiente tabla que relaciona cada digito octal mediante tres digitos binarios.
      
      </p>
      `
      this.$container.appendChild(this.insertTableOctalAndBinary())
      
      this.$container.innerHTML+=`
      <p>
      
      Escribiremos los digitos del número octal y lo relacionaremos con su binario. 
      
      </p>
      `
      this.relacionalTable(data[1],"Binario","Octal")
      this.$container.innerHTML+=`
      <p>
      
      Ordena los números iniciando con el que esta en la parte superior y terminando con el que esta en la parte inferior de la tabla.</p>
      
      <h3 class="center-title">${data[0]}</h3>
      `
      this.$container.innerHTML+=`
      <p>
      
      Ahora pasamos nuestro nuevo numero binario a un numero hexadecimal.
      Tendremos la siguiente tabla que relaciona cada digito hexadecimal con cuatro de nuestros numeros binarios.

      </p>
      `
      this.$container.appendChild(this.insertTableHexasAndBinary())
      this.$container.innerHTML+=`
      <p>
      
      Dividimos nuestro numero binario en grupos de 4 digitos para asociarlos a un digito hexadecimal.
      
      </p>
      `
      this.relacionalTable(data2[1],"Hexadecimal","Binario")
      this.$container.innerHTML+=`
      <p>
      
      Con estos digitos formamos de arriba hacia abajo formamos nuestro nuevo numero hexadecimal.
      
      </p>
      <h3 class="center-title">${data2[0]}</h3>
      `
    }
    

    hexalTodecimal(data){
      this.$container.innerHTML=""
      this.$container.appendChild(this.$hexa)
      this.$container.appendChild(this.$decimal)
      this.$container.innerHTML+=`
      <h3 class="center-title">Solucion.</h3>
        <p>
      
        Para hacer esta conversion lo primero que tenemos que tener en cuesta es la siguiente correspondencia entre digitos hexadecimales y decimales
      
        </p>
      `

      this.$container.appendChild(this.insertTableDecimalHexa())
      this.$container.innerHTML+=`
        <p>
      
        Para hacer la conversión solo trabajaremos con sumas, multiplicaciones y potencias de base 16.
        Por cada digito de nuestro numero, multiplicaremos el digito en su representacion decimal con una potencia del numero 16 empezando en la potencia 0, estas multiplicaciones, las sumamos y la suma sera nuestro nuevo numero.
      
        </p>
      `

      this.$container.innerHTML+=`
      <h4 class="center-title">
      ${data[1]}
      </h4>
      `
    }

    hexalToBinary(data){
      this.$container.innerHTML=""
      this.$container.appendChild(this.$hexa)
      this.$container.appendChild(this.$binary)
      this.$container.innerHTML+=`
      <h3 class="center-title">Solucion.</h3>
        <p>
      
        Tendremos una regla para resolver estas conversiones:
        Un grupo de cuatro dígitos binariosl se representan mediante un digito hexadecimal, como se muestra en la tabla.
      
        </p>
      `

      this.$container.appendChild(this.insertTableHexasAndBinary())

      this.$container.innerHTML+=`
        <p>
          Por cada digito hexadecimal le asociamos sus cuatro digitos binarios correspondientes
        </p>
      `
      this.relacionalTable(data[1],"Hexadecimal","Binario")
      this.$container.innerHTML+=`
      <p>
      
      Por ultimo escribmos el numero el numero en binario en el orden de arriba hacia abajo
      
      </p>
      <h3 class="center-title">${data[0]}</h3>
      `
    }

  hexalToOctal(data,data2){ 


  this.$container.innerHTML=""
  this.$container.appendChild(this.$hexa)
  this.$container.appendChild(this.$binary)
  this.$container.innerHTML+=`
  <h3 class="center-title">Solucion.</h3>
    <p>
   
    Para resolver esta conversion primero tenemos que pasar nuestro numero hexadecimal a un numero octal.
    Recordemos pues la relacion entre digitos hexadecimales con digitos octales con la siguiente tabla.
   
    </p>
  `
  this.$container.appendChild(this.insertTableHexasAndBinary())

  this.$container.innerHTML+=`
    <p>
   
    Por cada digito de nuestro numero hexadecimal, tomamos 4 digitos binarios, estos digitos binarios los tomamos y formamos de arriba hacia abajo nuestro
    nuevo numero binario.
   
    </p>
  `

  this.relacionalTable(data[1],"Binario","Hexadecimal")
  this.$container.innerHTML+=`
    <p>
   
    Teniendo asi el numero binario:
   
    </p>

    <p>
    <h3 class="center-title">${data[0]}</h3>
    
    Ahora pasamos nuestro numero binario, usando la siguiente tabla que relaciona 3 digitos del numero binario con 1 digito octal
    
    </p>
    `

    this.$container.appendChild(this.insertTableOctalAndBinary())

    this.$container.innerHTML+=`
    <p>
   
    Por cada 3 digitos de nuestro numero binario a octal, tomamos 1 digito octal, estos digitos octales los tomamos y formamos de arriba hacia abajo nuestro
    nuevo numero octal.
    </p>
  `

    this.relacionalTable(data2[1],"Octal","Binario")


    this.$container.innerHTML+=`
    <p>
    Obteniendo asi el numero octal:
    </p>
    <h3 class="center-title"center-title>${data2[0]}</h3>

  `



  }





    insertTableDecimalHexa(){
        let $tablehexa=document.createElement("div")
        $tablehexa.classList.add("div-table");

        $tablehexa.innerHTML=`
        <table border="1" class="table-comparation">
        <tr>
            <td>Decimal</td>
            <td>Hexadecimal</td>    
        </tr>
    
      <tr>
        <td>1</td>
        <td>1</td>    
      </tr>
      <tr>
        <td>2</td>
        <td>2</td>    
      </tr>
      <tr>
        <td>3</td>
        <td>3</td>    
      </tr>
      <tr>
        <td>4</td>
        <td>4</td>    
      </tr>
      <tr>
        <td>5</td>
        <td>5</td>    
      </tr>
      <tr>
        <td>6</td>
        <td>6</td>    
      </tr>
      <tr>
        <td>7</td>
        <td>7</td>    
      </tr>
      <tr>
        <td>8</td>
        <td>8</td>    
      </tr>
      <tr>
        <td>9</td>
        <td>9</td>    
      </tr>
      <tr>
        <td>10</td>
        <td>A</td>    
      </tr>
      <tr>
        <td>11</td>
        <td>B</td>    
      </tr>
      <tr>
        <td>12</td>
        <td>C</td>    
      </tr>
      <tr>
        <td>13</td>
        <td>D</td>    
      </tr>
      <tr>
        <td>14</td>
        <td>E</td>    
      </tr>
      <tr>
        <td>15</td>
        <td>F</td>    
      </tr>

    </table>
    `
        return $tablehexa
    }



    insertTableHexasAndBinary(){
      let $tablebinary=document.createElement("div")
      $tablebinary.classList.add("div-table");
      $tablebinary.innerHTML=`
      <table border="1" class="table-comparation">
      <tr>
        <td>Hexadecimal</td>
        <td>Binario</td>    
      </tr>

      <tr>
        <td>0</td>
        <td>0000</td>    
      </tr>
      <tr>
        <td>1</td>
        <td>0001</td>    
      </tr>
      <tr>
        <td>2</td>
        <td>0010</td>    
      </tr>
      <tr>
        <td>3</td>
        <td>0011</td>    
      </tr>
      <tr>
        <td>4</td>
        <td>0100</td>    
      </tr>
      <tr>
        <td>5</td>
        <td>0101</td>    
      </tr>
      <tr>
        <td>6</td>
        <td>0110</td>    
      </tr>
      <tr>
        <td>7</td>
        <td>0111</td>    
      </tr>
      <tr>
        <td>8</td>
        <td>1000</td>    
      </tr>
      <tr>
        <td>9</td>
        <td>1001</td>    
      </tr>
      <tr>
        <td>A</td>
        <td>1010</td>    
      </tr>
      <tr>
        <td>B</td>
        <td>1011</td>    
      </tr>
      <tr>
        <td>C</td>
        <td>1100</td>    
      </tr>
      <tr>
        <td>D</td>
        <td>1101</td>    
      </tr>
      <tr>
        <td>E</td>
        <td>1110</td>    
      </tr>
      <tr>
        <td>F</td>
        <td>1111</td>    
      </tr>



      </table>
      `
      return $tablebinary

    }



    insertTableOctalAndBinary(){
        let $tableoctal=document.createElement("div")
        $tableoctal.classList.add("div-table");
        $tableoctal.innerHTML=`
        <table border="1" class="table-comparation">
        <tr>
          <td>Octal</td>
          <td>Binario</td>    
        </tr>

        <tr>
          <td>0</td>
          <td>000</td>    
        </tr>
        <tr>
          <td>1</td>
          <td>001</td>    
        </tr>
        <tr>
          <td>2</td>
          <td>010</td>    
        </tr>
        <tr>
          <td>3</td>
          <td>011</td>    
        </tr>
        <tr>
          <td>4</td>
          <td>100</td>    
        </tr>
        <tr>
          <td>5</td>
          <td>101</td>    
        </tr>
        <tr>
          <td>6</td>
          <td>110</td>    
        </tr>
        <tr>
          <td>7</td>
          <td>111</td>    
        </tr>
        
        </table>
        `
        return $tableoctal
  }

    insertDivisions(divisiones,divisor,initial){
        let dividendo=initial
        const $containerDivs=document.createElement("div")
        $containerDivs.classList.add("container-divisions");
        
        for (let index = 0; index < divisiones.length; index++) {
            // console.log(divisiones[index]);        
            const $table=document.createElement("div")
            $table.classList.add("divisions");

            $table.innerHTML=`
            <table class="table-divisions">

            <tr>
                <td></td>
                <td>${divisiones[index][0]}</td>
            </tr>

            <tr>
                <td  class="border-right">${divisor}</td>
                <td class="border-top">${dividendo}</td>
            </tr>
            
            <tr>
                <td></td>
                <td class="residuo">${divisiones[index][1]}</td>
            </tr>

            <br>
            </table>      
            `

            $containerDivs.appendChild($table)
            dividendo=divisiones[index][0]
            
        }

        this.$container.appendChild($containerDivs)
    }

    relacionalTable(list,name,name2){

        let $divtable=document.createElement("div")
        $divtable.classList.add("div-table");
        let $table=document.createElement("table")
        $table.classList.add("table-comparation");
        $table.border="1"
        $table.innerHTML=`
        
        <tr>
            <td>${name}</td>
            <td>${name2}</td>    
        </tr>   

        `
        list.forEach(element => {
          $table.innerHTML+=`
        
          <tr>
          <td>${element[1]}</td>    
              <td>${element[0]}</td>
          </tr>   
  
          `
        });
        $divtable.appendChild($table)

        this.$container.appendChild($divtable)
    

    }
















}