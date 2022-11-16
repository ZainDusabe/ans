
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
let loginemail=document.getElementById("email");
let loginpwd=document.getElementById("pwd");


signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
function credentials(){
	let person={
		firstName:"Ramazani",
		lastName:"DUSABE",
		email:"zain@gmail.com",
		password:"zain",
	}
	if(loginemail == person.email && loginpwd == person.password){
		// alert("waooo");
		window.open("Dashboard.html");
		
	}
	else{
		// mesaje="Shyiramo imeyili yanyayo n'ijambo banga"
		// alert("dsfghjhgfdsd");
		// window.reload();

		document.getElementById("mesaje").innerHTML=mesaje;

		// return false;
	}
}