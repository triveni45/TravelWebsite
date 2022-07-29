let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});
formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});
videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('src');
        document.querySelector('#video-slider').src = src;
    });
});

let nameNode=document.getElementById('name')
let emailNode=document.getElementById('email')
let messageNode=document.getElementById('message')
let subjectNode=document.getElementById('subject')
let errorNode1=document.getElementById('errornode1')
let errorNode2=document.getElementById('errornode2')
let errorNode3=document.getElementById('errornode3')
let errorNode4=document.getElementById('errornode4')
// let array=[errorNode1,errorNode2,errorNode3,errorNode4];
// for(let node of array){
//   node.style.color="red";
// }
function validateForm(){
    let v1=validate1();
    let v2=validate2();
    let v3=validate3();
    let v4=validate4();
   
    return alert("form submitted successfully")
}
function validate1(){
  let fname=nameNode.value;
  let regex=new RegExp("^[A-Za-z]*$");
  errorNode1.innerHTML="";
  if(fname===''){
      errorNode1.innerHTML="<h3> name is required</h3>";
      nameNode.style.border="2px solid red";
      return false;
  }
  else if(regex.test(fname)==false){
      errorNode1.innerHTML="<h3>name must have only letters</h3>";
      nameNode.style.border="2px solid red";
      return false;
  }
  else{
      nameNode.style.border="2px solid green";
      return true;
  }
}
function validate2(){
  let email=emailNode.value;
  errorNode2.innerHTML="";
  if(email===''){
      errorNode2 .innerHTML="<h3>Email is required</h3>";
      emailNode.style.border="2px solid red";
      return false;
  }
  else if(!email.includes('@') || email.endsWith('@')){
      errorNode2.innerHTML="<h3>Please enter valid email</h3>";
      emailNode.style.border="2px solid red";
      return false;
  }
  else{
      emailNode.style.border="2px solid green";
      return true;
  }
}
function validate3(){
  let subject=subjectNode.value;
  errorNode3.innerHTML="";
  if(subject===''){
      errorNode3.innerHTML="<h3>subject is required</h3>";
     subjectNode.style.border="2px solid red";
      return false;
  }
  else if(subject.length<10 ){
      errorNode3.innerHTML="<h3>subject must be 10 characters long</h3>";
      subjectNode.style.border="2px solid red";
      return false;
  }
  else{
      subjectNode.style.border="2px solid green";
      return true;
  }
}
function validate4(){
  let message=messageNode.value;
  errorNode4.innerHTML="";
  if(message===''){
      errorNode4.innerHTML="<h3>message is required</h3>";
      messageNode.style.border="2px solid red";
      return false;
  }
  else if(message.length<=50){
      errorNode4.innerHTML="<h3>message must be 140 characters long</h3>";
      messageNode.style.border="2px solid red";
      return false;
  }
  else{
      messageNode.style.border="2px solid green";
      return true;
  }
}







