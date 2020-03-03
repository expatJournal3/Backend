# Backend
For BACKEND devs

## Introduction
What does your API do?

## Overview
Things that the developers should know about

## Authentication
What is the preferred way of using the API?

## Error Codes
What errors and status codes can a user expect?
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{error: "Invalid credentials."}`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{message: "missing user data"}`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{message: "missing required email field"}`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{message: "missing required password field"}`

## Rate limit
There isn't any limit to the number of requests a user can send.

## Register a user

**Information required to register a user**
> `POST` /api/auth/register \
`Host`: expath.herokuapp.com

```
{
    email: "email@email.com",
    password:"password"
}
```

Id is added automatically on the backend.
This is how your id and token would be returned:

```
{
    "message": "Welcome! Successful sign up with email@email.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJlbWFpbCI6InRlc3RAZW1haWwuY29tIiwiaWF0IjoxNTgzMTI2MDI4LCJleHAiOjE1ODMyMTI0Mjh9.Vb6tXOBdxhsx32Thrtk6ntLHaIfWSMLP3zTZXBHzH0Y",
    "id": 3
} 
```

## Log in a user

>`POST` /api/auth/login \
`Host`: expath.herokuapp.com

Login with the email and password you used to register:

```
{
    email: "email@email.com",
    password: "password"
}
```

## GET User posts/paths 
 - In the profile page, your personal blogs(text and optional image)
> `GET` /api/users/:id/paths \
`HOST`: expath.herokuapp.com

Retrieve your personal user posts after logging in:

## POST (Create) New User POST
  - Create a new post for your personal blog 
>`POST` /api/users/:id/paths \
`HOST`: expath.herokuapp.com

 ```
{ 
  "title": "EVERYONE SAYS I'M RUNNING AWAY",
  "body": "My dad always asks what I'm running away from with my travels. A few weeks ago, a commenter told me to stop running away and to start living life. ....",
  "imgUrl": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjcxMzN9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80",
  "timestamp": "Tue Mar 3 2020"
}
```

## Update Post 
- Update an existing post for your personal blog 
>`POST` /api/users/:id/paths \
`HOST`: expath.herokuapp.com

 ```
{ 
  "title": "EVERYONE SAYS I'M RUNNING AWAY",
  "body": "My dad always asks what I'm running away from with my travels. A few weeks ago, a commenter told me to stop running away and to start living life. ....",
  "imgUrl": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjcxMzN9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80",
  "timestamp": "Tue Mar 3 2020"
}
```

## Delete a POST
- Delete a current post on the profile page, your personal blogs(text and optional image)
> `DELETE` /:id/paths/:pathid \
`HOST`: expath.herokuapp.com

## GET **all** Posts 
- Retrieve all posts from every user
>`GET` /api/paths \
`HOST`: expath.herokuapp.com


## Add a follower
> `POST` /api/users/:id/following \
`Host`: expath.herokuapp.com

```
{
    "email": "devtest@email.com"
}
```

## GET User Followers
> `GET` /api/users/:id/following \
`Host`: expath.herokuapp.com
