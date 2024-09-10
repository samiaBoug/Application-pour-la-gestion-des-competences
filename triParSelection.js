
 //tri par selection
 let table = [3 , 9 , 2 , 8, 0 , 1];
 let temp = '';
 for(i=0 ; i< table.length ; i++){
     for (j= i+1 ; j< table.length ; j++){
         if(table[i] > table[j]){
             temp = table[i] ;
             table[i] = table[j];
             table[j] = temp ;
             
 
         }
     }
 }
 
 console.log(table);
 