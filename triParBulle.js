
 //tri par bulle
 let table = [3,5,7,1,0,2,9,8] ;
 let temp ='';

 for (j= 0 ; j<table.length ; j++){
 for (i=0 ; i<table.length -j -1 ; i++){
 if(table[i] > table[i+1]){
     temp= table[i];
     table[i] = table[i+1] ;
     table[i+1] = temp ;
    
 }
 }
 }
console.log(table);