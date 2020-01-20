# mini-wp

\* = required parameters

* **USER**
Root URL: http://35.197.145.19/

## DESCRIPTION
URL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;/users/login

METHOD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;POST

PARAM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;
[data]
  - email < String >
  - password < String >

RESPONSE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;
success &nbsp;: 
Code: 201

{</br>
&nbsp;&nbsp; 
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMjQ3MzdjY2Y4NGJlMmJhYjkxZmU2YSIsImlhdCI6MTU3OTQ4MzE0N30.6ZmPwWv-KoUu9H0mlkN5Bix3ba1JscErV2WNOzBk62Q",
    "name": "Lumpy Space Princess"
 </br>
}
* fail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
{ {</br>

"message": {
        "name": "Bad request",
        "statusCode": "400",
        "message": "Email/Password wrong"
    }
    {</br>
}

---
## Register

URL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;/users/register

METHOD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;POST

PARAM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;
[data]
  - email* < String >
  - password* < String >
  - username* < String >

RESPONSE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;

success &nbsp;: 
Code: 201

{
    </br>
    "message": "Registration success!"
    </br>
}

fail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:

{ </br>
    "message": "User validation failed: email: Please fill a valid email address"
  </br>
}


* **ARTICLES**


## CREATE AN ARTICLE 

URL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;/articles
METHOD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;POST

DATA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;
{ headers : access_token }
{
                title: '',
                category: '',
                content: '',
}

RESPONSE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;


success &nbsp;: 
Code: 200

{
    message: 'Article successfully created'
}

fail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:

{ </br>
    "status": 500,
    "message": Internal Server Error
  </br>
}


## GET ALL PUBLISHED ARTICLES

URL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;/articles
METHOD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;GET


RESPONSE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;

success &nbsp;: 
Code: 200

{
    result: [
        {
            "_id": "5e247b02cf84be2bab91fe6f",
            "title": "Conversation with Friends",
            "content": "<p id><em>Conversations with Friends</em></a>&nbsp;author Sally Rooney. </p>",
            "category": "health",
            "published": true,
            "userId": {
                "_id": "5e24737ccf84be2bab91fe6a",
                "username": "Lumpy Space Princess"
            },
            "created_at": "2020-01-19T15:51:30.588Z",
            "updatedAt": "2020-01-19T15:53:17.837Z",
            "__v": 0,
            "image": "https://storage.googleapis.com/"
        }
    ]
}

fail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:

{ </br>
    "status": 500,
    "message": Internal Server Error
  </br>
}


## GET DRAFTS (unpublished articles)

URL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;/articles/drafts
METHOD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;GET

DATA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;
{ headers : access_token }

RESPONSE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;


success &nbsp;: 
Code: 200

{
    result: [
        {
            "_id": "5e247b02cf84be2bab91fe6f",
            "title": "Conversation with Friends",
            "content": "<p id><em>Conversations with Friends</em></a>&nbsp;author Sally Rooney. </p>",
            "category": "health",
            "published": true,
            "userId": {
                "_id": "5e24737ccf84be2bab91fe6a",
                "username": "Lumpy Space Princess"
            },
            "created_at": "2020-01-19T15:51:30.588Z",
            "updatedAt": "2020-01-19T15:53:17.837Z",
            "__v": 0,
            "image": "https://storage.googleapis.com/"
        }
    ]
}

fail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:

{ </br>
    "status": 500,
    "message": Internal Server Error
  </br>
}


## GET DRAFTS (unpublished articles)

URL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;/articles/drafts
METHOD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;GET

DATA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;
{ headers : access_token }

RESPONSE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;


success &nbsp;: 
Code: 200

{
    result: [
        {
            "_id": "5e247b02cf84be2bab91fe6f",
            "title": "Conversation with Friends",
            "content": "<p id><em>Conversations with Friends</em></a>&nbsp;author Sally Rooney. </p>",
            "category": "health",
            "published": true,
            "userId": {
                "_id": "5e24737ccf84be2bab91fe6a",
                "username": "Lumpy Space Princess"
            },
            "created_at": "2020-01-19T15:51:30.588Z",
            "updatedAt": "2020-01-19T15:53:17.837Z",
            "__v": 0,
            "image": "https://storage.googleapis.com/"
        }
    ]
}

fail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:

{ </br>
    "status": 500,
    "message": Internal Server Error
  </br>
}



## READ AN ARTICLE 

URL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;/articles/:id

URL PARAMS
  **Required:**
  `article id:  _id=[integer]`
METHOD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;GET

DATA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;
{ headers : access_token }

RESPONSE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;


success &nbsp;: 
Code: 200

{
        {
            "_id": "5e247b02cf84be2bab91fe6f",
            "title": "Conversation with Friends",
            "content": "<p id><em>Conversations with Friends</em></a>&nbsp;author Sally Rooney. </p>",
            "category": "health",
            "published": true,
            "userId": {
                "_id": "5e24737ccf84be2bab91fe6a",
                "username": "Lumpy Space Princess"
            },
            "created_at": "2020-01-19T15:51:30.588Z",
            "updatedAt": "2020-01-19T15:53:17.837Z",
            "__v": 0,
            "image": "https://storage.googleapis.com/"
        }
}

fail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:

{ </br>
    "status": 500,
    "message": Internal Server Error
  </br>
}

## DELETE AN ARTICLE 

URL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;/articles/:id

URL PARAMS
  **Required:**
  `article id:  _id=[integer]`
METHOD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;GET

DATA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;
{ headers : access_token }

RESPONSE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;


success &nbsp;: 
Code: 200

{
       {message: 'Article successfully deleted'}
}

fail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:

{ </br>
    "status": 500,
    "message": Internal Server Error
  </br>
}

## PUBLISH AN ARTICLE 

URL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;/articles/:id

URL PARAMS
  **Required:**
  `article id:  _id=[integer]`
METHOD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;GET

DATA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;
{ headers : access_token }

RESPONSE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;


success &nbsp;: 
Code: 200

{
       {message: 'Article successfully published'}
}

fail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:

{ </br>
    "status": 500,
    "message": Internal Server Error
  </br>
}

## UPLOAD IMAGE TO AN ARTICLE 

URL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;/articles/upload/:id

URL PARAMS
  **Required:**
  `article id:  _id=[integer]`
METHOD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;GET

DATA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;
{ headers : access_token}
{data: formdata, content: formdata }

RESPONSE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;


success &nbsp;: 
Code: 200

{
       {message: 'Uploaded'}
}

fail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:

{ </br>
    "status": 500,
    "message": Internal Server Error
  </br>
}







