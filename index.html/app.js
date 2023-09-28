var sname = document.getElementById('name').value;
var semail = document.getElementById('semail').value;
var spassword = document.getElementById('apss').value;


var allusersData  = [];
var users = localStorage.getItem('Users');
if(users !== null){
  allusersData = JSON.parse(users)
};
function signin(){
    
    // var first_Name = document.getElementById('fname').value;
    var email = document.getElementById('semail').value;
    // var password = document.getElementById('spass').value;
    // localStorage.setItem('Email', email);
    // localStorage.setItem('Password', password);
    // localStorage.setItem('FirstName', first_Name);
    var obj = {
        Email : email
    }
    allusersData.push(obj);
    localStorage.setItem('Users',JSON.stringify(allusersData));
    alert('ho gaya')



    // var obj = {
    //     firstName :first_Name,
    //     Email :email,
    //     Password : password,
    // }
    // allusersData.push(obj);
    // localStorage.setItem('Users',JSON.stringify(allusersData));
    // alert('ho gaya')
  
















    // var sname = document.getElementById('name').value;
    // var semail = document.getElementById('semail').value;
    // var spassword = document.getElementById('apss').value;
    // if(sname != null && semail != null && spassword != null){
    // var obj = {
    //     Name : sname,
    //     Email : semail,
    //     Password : spassword
    // }
    // arr.push(obj);
    // localStorage.setItem('Users',JSON.stringify(arr))

//     Swal.fire({
//       icon: 'success',
//       title: '<h3 style="color: #00AD96 ">Great! You are now logged in. Click OK to proceed.</h3>',
//       confirmButtonColor: "#00AD96",
//       iconColor: '#00AD96',
//     }).then(() => {
//       if (true) {
//         location.href = './Login.html';
//       }
//     });
//   }else{
//     Swal.fire({
//       icon: 'error',
//       title: '<h3 style="color: #00AD96 ">Oops...</h3>',
//       text: 'Sorry',
//       confirmButtonColor: "#00AD96",
//       iconColor: '#00AD96',
//     }).then(() =>{
//       if(true){
//         location.href = './signup.html'
//       }
//     }) 
// }
}
function login(){
    var email = document.getElementById('lemail').value;
    var password = document.getElementById('lpass').value;
    var filterdata = arr.filter(function(data){
        return data.Email === email && data.Password === password
    })
    if(filterdata.length){
        alert('milgaya')
    }else{
        alert('nikal ')
    }

}






















// var first_Name = document.getElementById('fname').value;
//   var last_Name = document.getElementById('lname').value;
//   var remail = document.getElementById('rsemail').value;
//   var email = document.getElementById('semail').value;
//   var password = document.getElementById('spass').value;
//   if(first_Name != '' && last_Name != '' && remail != '' && email != '' &&    password !=''){
//       var obj = {
//         firstName :first_Name,
//       LastName : last_Name,
//       Re_Email : remail,
//       Email :email,
//       Password : password,
//      }
//     allusersData.push(obj);
//     localStorage.setItem('Users',JSON.stringify(allusersData));
//     Swal.fire({
//       icon: 'success',
//       title: '<h3 style="color: #00AD96 ">Great! You are now logged in. Click OK to proceed.</h3>',
//       confirmButtonColor: "#00AD96",
//       iconColor: '#00AD96',
//     }).then(() => {
//       if (true) {
//         location.href = './index.html';
//       }
//     });
//     UserName.innerText = first_Name
//   }else{
//         Swal.fire({
//         icon: 'error',
//         title: '<h3 style="color: #00AD96 ">Oops...</h3>',
//         text: 'Sorry',
//         confirmButtonColor: "#00AD96",
//         iconColor: '#00AD96',
//       })
      
  




