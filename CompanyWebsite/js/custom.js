
var images=document.getElementsByTagName('img');
console.log(images);

var anchors=document.getElementsByTagName('a');
console.log(anchors);

var head=document.getElementById('heading');
console.log(head.innerHTML);
console.log(head.nodeType);

var main_conent=document.getElementById('main_content');
main_conent.setAttribute('align','center');

head.innerHTML="Welcome to Our Website..!"

var new_head=document.createElement('h1');
var new_text=document.createElement('p');
new_head.innerHTML="Read the above text once again";
new_text.innerHTML="Understood the content if so ThankYou.."
main_conent.appendChild(new_head);
main_conent.appendChild(new_text)

/*var find=document.getElementById('find');
find.onclick=function(){
    alert('Welcome....! :)');
    alert('Bye Bye... :(');
}*/

function runMe(){
    alert('want to see me..!');
}
setTimeout(runMe,3000); 

var s=document.myform.s;

var u_name="susheel";
function run() {
    if(s.value==u_name){
        alert('Submitted Sucessfully');
    }
    else{
        alert('Email doesn\'t match');
    }
};

