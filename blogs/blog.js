

var myButton =  document.getElementById("blogsubmit");
var secElement=document.getElementById("section-blog");
var blogtitle = document.getElementById("blog-title");    
var blogarticle = document.getElementById("blog-article");

   
   
    function addDataLocalt() {
        var input_title = document.getElementById("title").value;
       
        console.log("title"+input_title);
        var blogtitle_store= input_title;
        localStorage.setItem("blog_t",blogtitle_store); 
        console.log("Record stored in local storage"); 

      
    }
    function addDataLocala() {
        

        var input_article = document.getElementById("article").value;
       
        console.log("article"+input_article);
        var blogarticle_store= input_article;
        localStorage.setItem("blog_a",blogarticle_store); 
        console.log("article Record stored in local storage");   
    }
  


function getDataLocal() {
    
    // var row = document.createElement("div");
    // row.setAttribute("class","row");
    // var col4 = document.createElement("div");
    // col4.setAttribute("class","col-4");
    // var b1= row.appendChild(col4);

  
var titlehead = document.createElement("h3"); 
titlehead.setAttribute("id","blog-title");
secElement.appendChild(titlehead);


var article = document.createElement("p"); 
article.setAttribute("id","blog-article");
secElement.appendChild(article);
secElement.style.borderColor="red";
secElement.style.borderWidth="3px";

// b1.appendChild(secElement);


// col4.appendChild(secElement);



   
    console.log("VAlue is "+localStorage.getItem("blog_t"));
    var blogtitle = document.getElementById("blog-title");
    blogtitle.innerHTML=blogtitle.innerHTML+localStorage.getItem("blog_t");

    var blogarticle = document.getElementById("blog-article");
    blogarticle.innerHTML=blogarticle.innerHTML+localStorage.getItem("blog_a");
    if(document.getElementById("title").value==" "||document.getElementById("title").value==null && document.getElementById("article").value==" " ||document.getElementById("article").value==null ){
        alert("pl fill the details")
        blogtitle.innerHTML=" ";
    
        blogarticle.innerHTML=" ";
        secElement.style.borderColor="transparent";
    }
    document.getElementById("title").value=" "; 
    document.getElementById("article").value=" ";
    localStorage.clear();




}

function clearDataLocal(){
    for (var key in localStorage){
        console.log(key)
     }
     var blogtitle = document.getElementById("blog-title");    
var blogarticle = document.getElementById("blog-article");
     blogtitle.innerHTML=" ";
    
     blogarticle.innerHTML=" ";
     secElement.style.borderColor="transparent";
// localStorage.clear();
}