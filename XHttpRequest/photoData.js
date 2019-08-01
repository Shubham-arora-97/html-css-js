function getUser(){
    var url = "https://jsonplaceholder.typicode.com/photos";
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
        var albumId = document.createElement('p');
        albumId.innerHTML=user.albumId;
        var id = document.createElement('p');
        id.innerHTML=user.id;
        var title = document.createElement('p');
        title.innerHTML=user.title;
        var url = document.createElement('img');
        url.src=user.url;
        var thumbnailUrl = document.createElement('img');
        thumbnailUrl.src=user.thumbnailUrl;
        
        userElement.appendChild(albumId);
        userElement.appendChild(id);
        userElement.appendChild(title);
        userElement.appendChild(url);
        userElement.appendChild(thumbnailUrl);

        document.getElementById('user-list').appendChild(userElement);
    }
    
}