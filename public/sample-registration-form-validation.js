function formValidation()
{
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var uemail = document.registration.email;
var uzip = document.registration.zip;
var ucountry = document.registration.country;
var pass = document.registration.pass;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex;



if(userid_validation(uid,4,10))
{
if(passid_validation(passid,4,10))
{
if(allLetter(uname,6,20))
{
if(ValidateEmail(uemail))
{ 
	if(allnumeric(uzip))
	{
		if(countryselect(ucountry))
			{
			if(alphanumeric(pass,6,10))	
			{			
				if(validsex(umsex,ufsex))
				{
				}
			}	 
}
} 
}
}
}
}
return false;

}



function userid_validation(uid,mx,my)
{	//                            4,10
	var uid_len = uid.value.length;//4
	if (uid_len==0||uid_len<mx||uid_len>my)
	{
		alert("First name should not be empty / length be between "+mx+" to  12");
		uid.focus();
		return false;
	}
	return true;
}



function passid_validation(passid,mx,my)
{
		var passid_len = passid.value.length;

return true;
}



function allLetter(uname,mx,my)
{ 
var letters = /[A-Za-z]+$/;
var len=uname.value.length;
if (len >= mx && uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters 6 to 20');
uname.focus();
return false;
}
}


function ValidateEmail(uemail)
{
var mailformat = /^\s*\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}




function allnumeric(uzip)
{ 
var n=uzip.value.length;
if(n>=10&& n<=13)
{
return true;
}
else
{
alert('phone no should be 10 to 13 digits only');
uzip.focus();
return false;
}
}





function countryselect(ucountry)
{
if(ucountry.value == "Default")
{
alert('Select your country from the list');
ucountry.focus();
return false;
}
else
{
return true;
}
}


 
function alphanumeric(pass,mx,my)
{ 

var len=pass.value.length;
if(len>=mx && len<=10)
{

return true;
}
else
{
alert('Invalid password');
pass.focus();
return false;
}
}





function validsex(umsex,ufsex)
{
x=0;

if(umsex.checked) 
{

} if(ufsex.checked)
{
x++; 
}
if(x==0)
{
alert('Select Male/Female');
umsex.focus();
return false;
}
else
{
alert('Form Succesfully Submitted');
window.location.reload()
return true;
}
}
