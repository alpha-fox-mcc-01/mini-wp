# mini-wp - API Documentations (USER)

\* = required parameters


---
## Create new Article
URL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;/articles

METHOD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;POST

PARAM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;
[data]
  - title* < string >
  - article* < string >
  - categories [ < string > ]


### SUCCESS RESPONSE :

Code: 201
Response: Obj:
 - _id: ObjectId
 - imgs: [ Strings ]
 - categories: [ Strings ]
 - likes: [ ObjectId ]
 - title: < String >
 - article: < String >
 - author: ObjectId
 - created_at: timestamp
 - comments: [ {userId, comment, published_at} ]


### FAIL RESPONSE  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
-

---
## Remove Article
URL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;/articles

METHOD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;DELETE

PARAM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;
[data]
  - articleId* < ObjectId >

### SUCCESS RESPONSE :
Code: 204


### FAIL RESPONSE  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
CODE: 401 {errmsg: "you are not authorized to do that"}

CODE: 404 {errmsg: "Resource not found"}


---
## Publish Article
URL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;/articles

METHOD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;PATCH

PARAM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;

data:
  - articleId* < ObjectId >

headers:
  - access_token*

### SUCCESS RESPONSE :
Code: 200

response: {message: "article published"} or {message: "article retracted"} 


### FAIL RESPONSE  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
CODE: 401 {errmsg: "you are not authorized to do that"}

CODE: 404 {errmsg: "Resource not found"}


---
## Like an Article
URL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;/articles/like

METHOD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;PATCH

PARAM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;

data:
  - articleId* < ObjectId >

headers:
  - access_token*

### SUCCESS RESPONSE :
Code: 200

response: {message: "article unliked"} or {message: "article liked"} 


### FAIL RESPONSE  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
CODE: 401 {errmsg: "you are not authorized to do that"}

CODE: 404 {errmsg: "Resource not found"}


---
## Comment an Article
URL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;/articles/comment

METHOD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;PATCH

PARAM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;

data:
  - articleId* < ObjectId >
  - comment* < String >

headers:
  - access_token*

### SUCCESS RESPONSE :
Code: 200

response: {message: "comment send"} 


### FAIL RESPONSE  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
CODE: 401 {errmsg: "you are not authorized to do that"}

CODE: 404 {errmsg: "Resource not found"}

---
## Update an Article
URL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;/articles

METHOD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;PUT

PARAM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
&nbsp;&nbsp;

data:
  - articleId* < ObjectId >
  - title < String >
  - article < String >
  - categories < String >

headers:
  - access_token*

### SUCCESS RESPONSE :
Code: 200

response: {message: "Article Updated"} 


### FAIL RESPONSE  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
CODE: 401 {errmsg: "you are not authorized to do that"}

CODE: 404 {errmsg: "Resource not found"}