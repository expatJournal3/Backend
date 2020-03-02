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
