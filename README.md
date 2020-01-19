# mini-wp
 -->
# REST API DOCUMENTATION
Root URL: http://34.87.49.35/

----
**Obtain One user information(Username Only)**


* **URL**

  users/

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  None

* **Header Params**

  access_token=[string]

* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  
    {
        username: "GabrielTimothy",
    }
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message: "User is no longer valid" }`

  OR

  * **Code:** 403 FORBIDDEN <br />
    **Content:** `{ msg: "Login Required" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    axios({
        method: 'GET',
        url : 'http://34.87.49.35//users/?userId=sadoaskdpkadkp',
        headers: {
            access_token : token
        }
    });
  ```

-------------------------------------------
**Sign in with Google OAuth**
----

* **URL**

  /users/google-sign-in

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  None

* **Header Params**


* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  

        {  
            "access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6...."
        }

 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ msg: "Bad Request, wrong syntax" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
        axios({
            method: ('POST'),
            url: `http://34.87.49.35/users/google-sign-in`,
            data : {
                google_token : id_token
            }
        })
  ```

-------------------------------------------
**Sign in**
----

* **URL**

  /users/signin

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**
    email: string,
    password: string
  

* **Header Params**

  none
* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  

        {  
            "access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6...."
        }

 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ msg: "Bad Request, wrong syntax" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
        axios({
            method: ('POST'),
            url: `http://34.87.49.35/users/google-sign-in`,
            data : {
                google_token : id_token
            }
        })
-------------------------------------------

**Register Users**
----

* **URL**

  /users

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  username: string,
  email: string,
  password: string
* **Header Params**


* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  

        {   
            "username": johndoe
            "email": "johndoe@gmail.com",
            "password": "2-302ked0wkdqdww2d"
        }
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    axios({
        method: 'POST',
        url: 'http://34.87.49.35/matches',
        data : {
            username: "johndoe",
            email: "johndoe@gmail.com",
            password: "qwerty12345"
        }}
    })
  ```

-------------------------------------------

**Obtain current user information**


* **URL**

  users/me

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  None

* **Header Params**

  access_token=[string]

* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  
    {
        username: "GabrielTimothy",
        email: "test@gmail.com",
        password: "soadkpasdkawdapw"
    }
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message: "User is no longer valid" }`

  OR

  * **Code:** 403 FORBIDDEN <br />
    **Content:** `{ msg: "Login Required" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    axios({
        method: 'GET',
        url : 'http://34.87.49.35/users/?userId=sadoaskdpkadkp',
        headers: {
            access_token : token
        }
    });
  ```

-------------------------------------------


**Upload images**


* **URL**

  /upload

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  image: file

* **Header Params**

  access_token=[string]

* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  
    {
        status: 200,
        message: 'Your file is successfully uploaded',
        link: https://google.cloudstorage/s9dw0w2j09dw0
    }
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message: "User is no longer valid" }`

  OR

  * **Code:** 403 FORBIDDEN <br />
    **Content:** `{ msg: "Login Required" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    axios({
        method: 'GET',
        url : 'http://34.87.49.35/users/?userId=sadoaskdpkadkp',
        headers: {
            access_token : token
        }
    });
  ```


-------------------------------------------



**Upload images**


* **URL**

  /upload

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  image: file

* **Header Params**

  access_token=[string]

* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  
    {
        status: 200,
        message: 'Your file is successfully uploaded',
        link: https://google.cloudstorage/s9dw0w2j09dw0
    }
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message: "User is no longer valid" }`

  OR

  * **Code:** 403 FORBIDDEN <br />
    **Content:** `{ msg: "Login Required" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    axios({
        method: 'GET',
        url : 'http://34.87.49.35/articles',
        headers: {
            access_token : token
        }
    });
  ```

**Get All current user's draft articles present in DB**


* **URL**

  /articles/drafts

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

    None

* **Header Params**

  access_token: [string]

* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  
    [{
        title: "Jakarta",
        content: "What a lovely place!",
        published: false,
        authorId: sadsa0d029d20w29wdk0,
        featured_image: http://google.cloudstorage.com/saodadkw0a90dk
    }]
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message: "User is no longer valid" }`

  OR

  * **Code:** 403 FORBIDDEN <br />
    **Content:** `{ msg: "Login Required" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    axios({
        method: 'GET',
        url : 'http://34.87.49.35/articles/drafts,
        headers: {
            access_token : token
        }
    });
  ```

-------------------------------------------

**Create New Article**


* **URL**

  /articles

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

    None

* **Header Params**

  None

* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  
    [{
        title: "Jakarta",
        content: "What a lovely place!",
        published: true,
        authorId: sadsa0d029d20w29wdk0,
        featured_image: http://google.cloudstorage.com/saodadkw0a90dk
    }]
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message: "User is no longer valid" }`

  OR

  * **Code:** 403 FORBIDDEN <br />
    **Content:** `{ msg: "Login Required" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    axios({
        method: 'POST',
        url : 'http://34.87.49.35/articles',
        headers: {
            access_token : token
        }
    });
  ```

-------------------------------------------

**Edit an article**


* **URL**

  /articles/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
    :id: [string]

* **Data Params**

    None

* **Header Params**

  access_token: [string]

* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  
    [{
        title: "Jakarta",
        content: "What a lovely place!",
        published: true,
        authorId: sadsa0d029d20w29wdk0,
        featured_image: http://google.cloudstorage.com/saodadkw0a90dk
    }]
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message: "User is no longer valid" }`

  OR

  * **Code:** 403 FORBIDDEN <br />
    **Content:** `{ msg: "Login Required" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    axios({
        method: 'PUT',
        url : 'http://34.87.49.35/articles/asdj98w2jd9jwd2',
        headers: {
            access_token : token
        }
    });
  ```

-------------------------------------------

**Delete an article**


* **URL**

  /articles/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
    :id: [string]

* **Data Params**

    None

* **Header Params**

  access_token: [string]

* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  
    [{
        title: "Jakarta",
        content: "What a lovely place!",
        published: true,
        authorId: sadsa0d029d20w29wdk0,
        featured_image: http://google.cloudstorage.com/saodadkw0a90dk
    }]
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message: "User is no longer valid" }`

  OR

  * **Code:** 403 FORBIDDEN <br />
    **Content:** `{ msg: "Login Required" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    axios({
        method: 'DELETE',
        url : 'http://34.87.49.35/articles/iewdj09j0293d2',
        headers: {
            access_token : token
        }
    });
  ```

-------------------------------------------

**Get One article**


* **URL**

  /articles/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   :id: [string]

* **Data Params**

    None

* **Header Params**

  None

* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  
    [{
        title: "Jakarta",
        content: "What a lovely place!",
        published: true,
        authorId: sadsa0d029d20w29wdk0,
        featured_image: http://google.cloudstorage.com/saodadkw0a90dk
    }]
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message: "User is no longer valid" }`

  OR

  * **Code:** 403 FORBIDDEN <br />
    **Content:** `{ msg: "Login Required" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    axios({
        method: 'GET',
        url : 'http://34.87.49.35/articles/asod0a9dkwkd02wd',
        headers: {
            access_token : token
        }
    });
  ```

-------------------------------------------

**Get All current user's articles**


* **URL**

  /articles/me

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

    None

* **Header Params**

    access_token: [string]

* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  
    [{
        title: "Jakarta",
        content: "What a lovely place!",
        published: true,
        authorId: sadsa0d029d20w29wdk0,
        featured_image: http://google.cloudstorage.com/saodadkw0a90dk
    },
    {
        title: "Bandung",
        content: "What a lovely place!",
        published: true,
        authorId: sadsa0d029d20w29wdk0,
        featured_image: http://google.cloudstorage.com/saodadkw0a90dk
    }]
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message: "User is no longer valid" }`

  OR

  * **Code:** 403 FORBIDDEN <br />
    **Content:** `{ msg: "Login Required" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    axios({
        method: 'GET',
        url : 'http://34.87.49.35/articles/me',
        headers: {
            access_token : token
        }
    });
  ```

-------------------------------------------

**Publish an article**


* **URL**

  /articles/publish

* **Method:**

  `PATCH`
  
*  **URL Params**

   **Required:**
 
    {query}id=[string]

* **Data Params**

    None

* **Header Params**

  access_token: [string]

* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  
    [{
        title: "Jakarta",
        content: "What a lovely place!",
        published: true,
        authorId: sadsa0d029d20w29wdk0,
        featured_image: http://google.cloudstorage.com/saodadkw0a90dk
    }]
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message: "User is no longer valid" }`

  OR

  * **Code:** 403 FORBIDDEN <br />
    **Content:** `{ msg: "Login Required" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    axios({
        method: 'PATCH',
        url : 'http://34.87.49.35/articles/publish/?id=asdasdpak90',
        headers: {
            access_token : token
        }
    });
  ```

-------------------------------------------