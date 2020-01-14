# mini-wp - API Documentations (USER)

\* = required parameters

## DESCRIPTION
URL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;/users/signin

METHOD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;POST

PARAM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;
[data]
  - 1

  - 

RESPONSE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;
* success &nbsp;:
* fail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:

---
## Signup, mendaftarkan user kedalam sistem

URL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;/users/signup

METHOD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;POST

PARAM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;
[data]
  - email* < String >
  - password* < String >
  - name* < String >

RESPONSE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;

success &nbsp;: 
Code: 201

{</br>
&nbsp;&nbsp;  "googleAuth": false,</br>
&nbsp;&nbsp;	"_id": "5e1d7850c10b8f225de976d2",</br>
&nbsp;&nbsp;  "email": "ha12211111",</br>
&nbsp;&nbsp;  "password": "$2a$05$W9ROTDmyf6P7vHaNl5JXAOz7bTK6RJ9aSr4Fc3w7Lo5UBQbgg2Zqi",</br>
&nbsp;&nbsp;  "name": "jelangramadhan",</br>
&nbsp;&nbsp;  "__v": 0</br>
}

fail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:

{</br>
&nbsp;&nbsp;  "code": 403,<br>
&nbsp;&nbsp;  "errmsg": "Username and Password does not match"<br>
}

---
## Signin, Masuk kedalam sistem

URL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;/users/signin

METHOD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;POST

PARAM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;
[data]
  - email* < String >
  - password* < String >


RESPONSE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;
* success &nbsp;:
* fail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
