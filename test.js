

document.querySelector('button').addEventListener('click',() =>{
   

}) 

function data(){
    var login = document.getElementById("input").value;
    var query = `query get_details($login: String!) {
                    user(login: $login) {
                        login
                        name
                        avatarUrl
                        bio
                    }
                }`
    fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer 3f140fa1be7c988c3fccb1c87437c824150d5c78',                     
        },
        body: JSON.stringify({
            query,
            variables: { login },
        })
    }).then(r => r.json()).then(data => {   
        console.log(data)                       
                    document.getElementById("Avatar").src = data.data.user.avatarUrl;
                    document.getElementById("Username").innerHTML = data.data.user.login;                             
                    document.getElementById("Identicon").src = "https://identicons.github.com/"+document.getElementById("input").value+".png";
                    document.getElementById("Name").innerHTML= data.data.user.name
                    document.getElementById("Bio").innerHTML= data.data.user.bio
        }
        )
        .catch(function(err){
            alert('Error No account Found')
            
        });
}