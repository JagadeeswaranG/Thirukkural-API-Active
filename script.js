// creat container for RWD
let container=document.createElement("div");
container.setAttribute("class","container");
let row=document.createElement("div");
row.setAttribute("class","row");
let col=document.createElement("div");
col.setAttribute("class","col-md-12");
col.style.textAlign="center";

//Creat input element
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","num");

//Creation of Event for the button 
var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="search";
button.addEventListener("click",kural);

//append input & button to column for RWD
col.append(input,button);
row.append(col);
container.append(row);

//async,await and try & catch methods 
async function kural(){
    try {      
        
    let enterNum=document.getElementById("num").value;
    console.log(enterNum);
    let url=`https://api-thirukkural.vercel.app/api?num=${enterNum}`;
    let res= await fetch(url);
    let res1= await res.json();
    console.log(res1);//returns data in console
   
//creat list group item of Bootstrap by DOM for output  
    let ul=document.createElement("ul");
    ul.setAttribute("class","list-group");
    ul.style.textAlign="center";

    let active=document.createElement("li")
    active.classList.add("list-group-item","list-group-item-primary");
    active.innerHTML=`${res1.sect_tam}-${res1.chap_tam}`

    let line=document.createElement("li")
    line.classList.add("list-group-item","list-group-item-success");
    line.innerHTML=`<div>${res1.line1}<br>${res1.line2}</div>`
    

    let english=document.createElement("li")
    english.classList.add("list-group-item","list-group-item-danger");
    english.innerHTML=`${res1.eng}`
   
//append all list items in column for RWD
    ul.append(active,line,english);
    col.append(ul);   
  
    } catch (error) {
        let ul=document.createElement("ul");
        ul.setAttribute("class","list-group");

        let err=document.createElement("li");
        err.classList.add("list-group-item","list-group-item-danger");
        err.style.textAlign="center";
        err.innerHTML=`Data Not Found !!!`//if userinput number is not between 1-1330
        ul.append(err);
        col.append(ul);
    }
}
document.body.append(container);//append container to get result in the document
