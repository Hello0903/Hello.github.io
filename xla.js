readfiles();
var datatable ;
 function readfiles(){
  const input = document.querySelector('input[type="File"]');
  input.addEventListener('change',function(e){
      console.log(input.files);
      const reader = new FileReader();
      reader.onload = function(){
        
       const lines = reader.result.split('\n').map(function(line){
          
          return line.split('\t');
        });
       // const line = reader.result.split('\n');
        console.log(lines);
       handeldata(lines);
       }
   
   reader.readAsText(input.files[0])},false);
 
 }
 var mGarr = new Array();
 var max = 0;
 function handeldata(data){
  var n = data.length;
  var m = data[0].length;
   //console.log(data);
 var map = new Map();
 for(let i = 0 ; i < data.length ; i++){
    for(let j = 0 ; j < data[i].length; j++)
    {  var id = parseInt(data[i][j]);
       //console.log(id);
       if(map.has(id)){
         var count = parseInt(map.get(id));
         map.set(id,(count+1));
       }
       else{
        map.set(id,1);
       }
    }
 }

 console.log(map);
var mG =0;

for(let i = 0 ; i < 256 ; i++){
  if(map.has(i)){
     mG += i*parseInt(map.get(i));
       }
}
mG = parseFloat((mG/256).toFixed(3))  ;
//console.log(mG);

// tinh toan  
var str = '';
for(let i = 0 ; i < 256 ; i++){
 //------------------------------------------
 if(map.has(i)){

  var p1 = 0;
  for(let j = i ; j <=256 ; j++){
      if(map.has(j)){
     p1 += parseInt(map.get(j));
       }
     }
  
// tinh m1
var m1 = 0;
var fq = 0;
 for(let j = i ; j < 256 ; j++){
     if(map.has(j)){
       m1 += parseInt(map.get(j))*j;
       fq += parseInt(map.get(j));
        }
 }
// tinh m2
//----------------------------------------------
var m2 = 0;
var fqm2 = 0;
for(let j = (i-1) ; j >= 0; j-- ){
  if(map.has(j)){
       m2 += parseInt(map.get(j))*j;
       fqm2 += parseInt(map.get(j));
        }
}


  var P1 = parseFloat((p1/256).toFixed(3));
  var P2 = parseFloat((1- P1).toFixed(3));
  var M1 = parseFloat((m1/fq).toFixed(3));
  var M2 = 0;
  if(fqm2 == 0)M2 =0;
  else M2 = parseFloat((m2/fqm2).toFixed(3));
  // do lech

 var dolech = (P1*(M1-mG)*(M1-mG) + P2*(M2-mG)*(M2-mG)).toFixed(3);
 if(max < parseFloat(dolech))
  max = parseFloat(dolech);
 //console.log(p1);
  //mGarr.push(parseFloat(dolech));
  if(fqm2 == 0) M2 = 0;
  else M2 = (m2/fqm2).toFixed(3);
   str = "<tr><td>"+i+"</td><td>"+P1+"</td><td>"
   +P2+"</td><td>"
   +M1+"</td><td>"+M2+"</td><td>"+dolech+"</td></tr>";
   $('#tabledata').append(str);
   } 
 }

 console.log(max);
 alert("Ngưỡng otsu: "+max);
 }
 
