# mini-wp

**Register User**
----
  Returns json data about a single user.

* **URL**

  /user/register

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  `firstName, lastName, email, password`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ userName : "Michael Bloom" }`
 
* **Error Response:**

  * **Code:** 400 MONGO ERROR <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 400 VALIDATION ERROR <br />
    **Content:** `{ type : "Validation Error", messages: ["Email is required"] }`

* **Sample Call:**

  ```javascript
    axios({
      method: "POST",
      url: 'http://mini-wp.ivantjendra.xyz/user/register',
      data: {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        password: this.user.password
      }
    })
  ```

**Login User**
----
  Returns json data with access_token inside.

* **URL**

  /user/login

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  `email, password`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ access_token, userName }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Email or password is wrong" }`

* **Sample Call:**

  ```javascript
    axios({
      method: "POST",
      url: 'http://mini-wp.ivantjendra.xyz/user/login',
      data: {
        email: this.user.email,
        password: this.user.password
      }
    })
  ```

**Show Article**
----
  Returns json data about articles.

* **URL**

  /article/showPublicArticle

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[ articles ]`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Articles not found" }`


* **Sample Call:**

  ```javascript
    axios({
      method: "GET",
      url: 'http://mini-wp.ivantjendra.xyz/article/showPublicArticle',
      headers: {
        token: localStorage.getItem('access_token')
      }
    })
  ```

**Add Article**
----
  Returns json data about a single article.

* **URL**

  /article/addArticle

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  `title, content`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ title: "Article", content: "Article content" }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : [ "Title is required", "Content is required" ] }`

  
* **Sample Call:**

  ```javascript
    axios({
      method: "POST",
      url: 'http://mini-wp.ivantjendra.xyz/article/addArticle',
      data: {
        title: this.article.title,
        content: this.article.content
      },
      headers: {
        token: localStorage.getItem('access_token')
      }
    })
  ```

**Delete Article**
----
  Returns message delete article success.

* **URL**

  /article/deleteArticle

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ message: "Delete success" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Article doesn't exist" }`


* **Sample Call:**

  ```javascript
    axios({
      method: "DELETE",
      url: `http://mini-wp.ivantjendra.xyz/article/deleteArticle/${id}`,
      headers: {
        token: localStorage.getItem('access_token')
      }
    })
  ```