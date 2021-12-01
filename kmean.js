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
       // console.log(lines);
       handeldata(lines);
       }
   
   reader.readAsText(input.files[0])},false);
 
 }
 class Diem{
   constructor(ten,x,y){
    this.ten = ten
    this.x = x;
    this.y = y;
  }
   getX(){
    return this.x;
  }
   getY(){
    return this.y;
  }
  getten(){
    return this.ten;
  }
  setX(x){
    this.x = x;
  }
  setY(y){
    this.y = y;
  }
 }
var arrcumcu = [];
 function handeldata(data){

   var arrT = [];
   var arrD = [];
   var arrTm = [];
   var sotam = parseInt(data[0]);
   var s = data[1];
   s= s[0].split(" ");
    console.log(s);
  let j = 0;
  for(let i = 1; i < data.length; i++){
    var diem = data[i][0].split(" ");
    //console.log(diem[1]);
   if(i >= data.length-sotam){
     arrT[j] = new Diem(diem[0],parseFloat(diem[1]),parseFloat(diem[2]));
     arrTm[j] = new Diem(diem[0],parseFloat(diem[1]),parseFloat(diem[2]));
      j++;
   }
   else{
   arrD[i-1] = new Diem(diem[0],parseFloat(diem[1]),parseFloat(diem[2]));
   arrcumcu[i-1] = -1; 
   }

  }    
 console.log(arrD);    
 console.log(arrT);
 show(arrD,arrT);
 showmahatan(arrD,arrTm);
 }


var step = 0;
var arrcummoi = [];
 function show(arrD,arrT){
   str = '<table><th>Điểm</th>'
   for(let i = 0 ; i < arrT.length; i++){
    str += "<th>"+arrT[i].getten()+"("+arrT[i].getX()+" , "+arrT[i].getY()+")</th>";
   } 
     str+= "<th>Cụm</th>" 

   for(let i = 0 ; i < arrD.length ; i++){
    // show
    str +="<tr><td>"+arrD[i].getten()+"("+arrD[i].getX()+" , "+arrD[i].getY()+")</td>";

    // caculate euclid
    var k = 0;
    var min = 99999999;
    var T = 0;
    for(let j = 0 ; j < arrT.length; j++){
      T = Math.sqrt(Math.pow(arrT[j].getX()-arrD[i].getX(),2)+Math.pow(arrT[j].getY()-arrD[i].getY(),2));  
     str += "<td>"+T+"</td>";
     if(min > T){
      min = T;
      k = j;
     }

    } 
    arrcummoi[i] = k;

   //
    str+= "<td>"+(k+1)+"</td><tr>";
      
   }
   str+= '</table><br>';
   console.log(str);
  $('#bang').append(str);
  //console.log("this");
 kiemtra(arrD,arrT);
 }

 function kiemtra(arrD,arrT){
  console.log("in kiemtra");
// goi de quy tim kmean
  for(let i = 0 ; i < arrcummoi.length; i++){
   if(arrcummoi[i] == arrcumcu[i]){
      
   }
   else{
    console.log("this");
    if(step > 5){ console.log("KK"); return;};
    step++;
    for(let j = 0 ; j < arrcummoi.length; j++){
      arrcumcu[j] = arrcummoi[j];
    }
    console.log(arrcumcu);
    // tính lại tâm
    for(let j = 0 ; j< arrT.length; j++){
       console.log("in tinh tam");
       var x = 0;
       var y = 0;
       var count = 0;
       for(let z = 0 ; z < arrcummoi.length; z++){
        if(arrcummoi[z] == j){
           x+= arrD[z].getX();
           y+= arrD[z].getY();
           count++;
        }
        arrT[j].setX(x/count);
        arrT[j].setY(y/count);
      console.log("T" + arrT);
      
   // call back
    }
    
    } 
     show(arrD,arrT); 
      break;

    }

 }
}
// mahatan


var step1 = 0;
var arrcummoi1 = [];
 function showmahatan(arrD,arrT){
   str = '<table><th>Điểm</th>'
   for(let i = 0 ; i < arrT.length; i++){
    str += "<th>"+arrT[i].getten()+"("+arrT[i].getX()+" , "+arrT[i].getY()+")</th>";
   } 
     str+= "<th>Cụm</th>" 

   for(let i = 0 ; i < arrD.length ; i++){
    // show
    str +="<tr><td>"+arrD[i].getten()+"("+arrD[i].getX()+" , "+arrD[i].getY()+")</td>";

    // caculate euclid
    var k = 0;
    var min = 99999999;
    var T = 0;
    for(let j = 0 ; j < arrT.length; j++){
      T = Math.abs(arrT[j].getX()-arrD[i].getX())+Math.abs(arrT[j].getY()-arrD[i].getY());  
     str += "<td>"+T+"</td>";
     if(min > T){
      min = T;
      k = j;
     }

    } 
    arrcummoi1[i] = k;

   //
    str+= "<td>"+(k+1)+"</td><tr>";
      
   }
   str+= '</table><br>';
   console.log(str);
  $('#mahatan').append(str);
  //console.log("this");
 kiemtra1(arrD,arrT);
 }

 function kiemtra1(arrD,arrT){
  console.log("in kiemtra");
// goi de quy tim kmean
  for(let i = 0 ; i < arrcummoi1.length; i++){
   if(arrcummoi1[i] == arrcumcu[i]){
      
   }
   else{
    console.log("this");
    if(step1 > 5){ console.log("KK"); return;};
    step1++;
    for(let j = 0 ; j < arrcummoi1.length; j++){
      arrcumcu[j] = arrcummoi1[j];
    }
    console.log(arrcumcu);
    // tính lại tâm
    for(let j = 0 ; j< arrT.length; j++){
       console.log("in tinh tam");
       var x = 0;
       var y = 0;
       var count = 0;
       for(let z = 0 ; z < arrcummoi1.length; z++){
        if(arrcummoi1[z] == j){
           x+= arrD[z].getX();
           y+= arrD[z].getY();
           count++;
        }
        arrT[j].setX(x/count);
        arrT[j].setY(y/count);
      console.log("T" + arrT);
      
   // call back
    }
    
    } 
     showmahatan(arrD,arrT); 
      break;

    }
}}