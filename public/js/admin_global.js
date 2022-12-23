function authUser() {
    const token = localStorage.getItem("token")
    const baseUrl = 'http://localhost:5000';
    if(token == null){
        alert("PLease Login")
        window.location.href = '/'
    }
    axios({
        headers: {
            'Authorization': 'Bearer ' + token
        },
        method: 'get',
        url: baseUrl + '/api/user/'
    })
    .then(function(response) {
        console.log(response)
        const role_id = response.data.userdata.role_id
        if(role_id != 1){
            alert("Unauthorized")
        window.location.href = '/'
        }
    })
    .catch((error) => {
        console.dir(error);
    })
}//End AuthUser
authUser();