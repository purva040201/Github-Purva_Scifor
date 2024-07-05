function f1(){
   
    var request=new XMLHttpRequest();
    request.open('GET','https://dummyjson.com/posts',true)
    
    request.onreadystatechange=function(){

        if(this.readyState==4 && this.status==200){

            var data =JSON.parse(request.responseText);
            displayData(data.posts);
        }else{

            console.error('Request failed with status', request.status);
            console.log(this.responseText);
            //document.getElementById("container").innerHTML=this.responseText;

        }    
    };
    request.send();
}

function f2(){
    fetch('https://dummyjson.com/products/categories').then((res)=>{
        if (!res.ok) {
            throw new Error('Network response was not ok ' + res.statusText);
        }
        return res.json()
    }).then((data)=>{
        console.log(data);
    })
    .catch(error => console.error('Fetch error:', error));
}

function displayData(data) {
    var dataDisplay = document.getElementById('dataDisplay');
    dataDisplay.innerHTML = ''; 
    data.forEach(post => {
        var postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
        dataDisplay.appendChild(postDiv);
    });
}

document.getElementById('ajaxButton').addEventListener('click', f1);
document.getElementById('fetchButton').addEventListener('click', f2);