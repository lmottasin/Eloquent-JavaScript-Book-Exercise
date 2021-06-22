let count = 1, string= '' , size =8 ; // this works only with even number to input with O(n)
for ( let i =1 ; i <= (size* size) + size ; i++)
{  
    if (count % (size +1) == 0 )
    {
        string += "\n";
        count += 1
        
        continue;
    }
    if ( i % 2 ==0 )
    {
        string += "#"
    }
    else 
    {
        string += " "
    }
    
   
    /*console.log("Count = "+ count )
    console.log("String: "+ string)
    console.log("i value: "+i) */
    count++;
}
console.log(string, string.length)
