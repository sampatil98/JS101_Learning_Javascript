//Given stored username and password and input username and password, Print if the user can login or not.

let server_id="sam@123";
let server_pass="1234567"
let id="sam@123";
let pass="123456";
if (server_id==id){
  if (server_pass==pass) {
    console.log("user can login");
  } else {
    console.log("invalid passward");
  }
} else {
  console.log("invalid id")
}