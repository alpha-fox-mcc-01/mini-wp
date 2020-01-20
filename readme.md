# mini-wp


* **mini-wp.hylrd.site**

  
**Title**
----
registration


* **URL**

  /user/regis

* **Method:**

  `POST`
  
*  **URL Params**


   **Required:**
 
   `none`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": {
            token: "2kb4khb24bgk4h2bkhf2bofhb2odbbsojnomdkvnofv",
            name: username
        } 
    }`
 
* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`
    

**Title**
----
  login

* **URL**

  /user/login

* **Method:**

  `POST`
  
*  **URL Params**


   **Required:**
 
   `none`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": {
            token: "2kb4khb24bgk4h2bkhf2bofhb2odbbsojnomdkvnofv",
            name: username
        } 
    }`
 
* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`
    

**Title**
----
  googleSignIn

* **URL**

  /user/googlesingin

  * **Method:**

  `POST`
  
*  **URL Params**


   **Required:**
 
   `none`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": {
            token: "2kb4khb24bgk4h2bkhf2bofhb2odbbsojnomdkvnofv",
            name: username
        } 
    }`
 
* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`


**Title**
----
  addArticle

* **URL**

  /article/add

  * **Method:**

  `POST`
  
*  **URL Params**


   **Required:**
 
    `headers: access_token`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": { _id: 5e24e6d51958d53112bc7da3,
        title: 'adadd`',
        desc: 'dqdwqd',
        author: { name: 'eq' },
        paragraf: '<p>wawd</p>',
        publish: true,
        createdAt: 2020-01-19T23:31:33.925Z,
        __v: 0 },
    }`
 
* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`


**Title**
----
  delete

* **URL**

  /article/delete

  * **Method:**

  `delete`
  
*  **URL Params**


   **Required:**
 
   `headers: access_token`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": { n: 1, ndeleted: 1, ok: 1 }
    }`
 
* **Code:** 400 user unautorizhed <br />
    **Content:** `{ 
       msg : unauthorized
        }`


**Title**
----
  update

* **URL**

  /article/update/:id

  * **Method:**

  `update`
  
*  **URL Params**


   **Required:**
 
   `headers: access_token`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": { n: 1, nmodified: 1, ok: 1 }
    }`
 
* **Code:** 400 user unautorizhed <br />
    **Content:** `{ 
       msg : unauthorized
        }`

**Title**
----
  showArticle

* **URL**

  /article/

  * **Method:**

  `get`
  
*  **URL Params**


   **Required:**
 
   `headers: access_token`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": [list or articles that are published]
    }`
 
* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`

**Title**
----
  readmyArticle

* **URL**

  /article/myarticle

  * **Method:**

  `get`
  
*  **URL Params**


   **Required:**
 
   `headers: access_token`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": [list or articles with the same userid]
    }`
 
* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`

**Title**
----
  readOneArticle

* **URL**

  /article/read/:id

  * **Method:**

  `get`
  
*  **URL Params**


   **Required:**
 
   `headers: access_token`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": { _id: 5e23d4f221f83f211e49cbd6,
    title: 'tets upload',
    desc: 'image',
    img: '5e229fee6463a774b645fe8f',
    author: { name: 'eq' },
    paragraf: 'test upload image',
    publish: true,
    createdAt: 2020-01-19T04:02:58.789Z,
    __v: 0 },
    }`
 
 * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`