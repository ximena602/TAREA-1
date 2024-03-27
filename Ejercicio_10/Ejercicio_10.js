let sum =0;
let numeros = [86,47,78,20];
function suma(array)
{
    
    for(i=0 ; i< array.length; i++)
    {
        
        sum = sum + array[i] ;  
    }
return sum;
   
}
suma(numeros);
console.log("la suma total es de :",sum);