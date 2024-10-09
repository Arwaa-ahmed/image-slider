let array=Array.from(document.querySelectorAll('.container img'));
//console.log(array);
var numimg=array.length;
let indx=0;
let prev=document.getElementById('prev');
let next=document.getElementById('next');
let slidenum=document.getElementById('slidenum');
prev.onclick=prevbtn;
next.onclick=nextbtn;
var ulelement=document.createElement('ul');
ulelement.setAttribute('id','listele');
for(let i=1;i<=numimg;i++){
    let list=document.createElement('li');
    list.setAttribute('setdata',i);
    list.appendChild(document.createTextNode(i));
    ulelement.appendChild(list);
}
let nums=document.getElementById('nums');
nums.appendChild(ulelement);
let arrlist=Array.from(document.querySelectorAll('#listele li'));
arrlist.forEach(function(ele){
    ele.onclick=function(){
        indx=parseInt(this.getAttribute('setdata'))-1
        ;
        console.log(indx);
        changes(); 
    }
   })
console.log(arrlist);
var newul=document.getElementById('listele');
function prevbtn(){
    indx--;
    if(indx>=0){
        changes();
    }
    else{
        indx=0;
    }
}
function nextbtn(){
    if(indx<numimg){
        changes();
        indx++;
    }
    else{
        indx=numimg-1;
    }
  
}

function changes(){
    remove();
        slidenum.innerHTML='slide #'+(indx+1) +' of '+(numimg);
        array[indx].classList.add('active');
        newul.children[indx].classList.add('active');
    if(indx==0){
        prev.style.cursor='no-drop';
    }
    else{
        prev.style.cursor='pointer';
    }
    if(indx==numimg-1){
        next.style.cursor='no-drop'
    }
    else{
        next.style.cursor='pointer';
    }
}
//remove();
function remove(){
   array.forEach(function(image){
    image.classList.remove('active');
   })
   arrlist.forEach(function(ele){
    ele.classList.remove('active');
   })
}
