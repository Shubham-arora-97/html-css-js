function getUser(){
    var url = "https://jsonplaceholder.typicode.com/users";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          updateUserData(JSON.parse(this.responseText));
        }
      };
      xhttp.open("GET", url, true);
      xhttp.send();
}

function updateUserData(response){
    for(var i=0;i<response.length;i++){
        var user= response[i];
        var userElement = document.createElement('div');
        userElement.className='user1';
        var name = document.createElement('p');
        name.innerHTML=user.name;
        var email = document.createElement('p');
        email.innerHTML=user.email;
        var phone = document.createElement('p');
        phone.innerHTML=user.phone;
        
        userElement.appendChild(name);
        userElement.appendChild(email);
        userElement.appendChild(phone);

        document.getElementById('user-list').appendChild(userElement);
    }
    
}