# Backend
For BACKEND devs

# Introduction
What does your API do?

# Overview
Things that the developers should know about

# Authentication
What is the preferred way of using the API?

# Error Codes
What errors and status codes can a user expect?

# Rate limit
Is there a limit to the number of requests an user can send?

## Register a user

**Information required to register a user**
POST /api/auth/register
Host: expath.herokuapp.com

```
{
    email: "",
    password:""
}
```

Id is added automatically on the backend.
This is how your id and token would be returned:

```
{
    "message": "Welcome! Successful sign up with test@email.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJlbWFpbCI6InRlc3RAZW1haWwuY29tIiwiaWF0IjoxNTgzMTI2MDI4LCJleHAiOjE1ODMyMTI0Mjh9.Vb6tXOBdxhsx32Thrtk6ntLHaIfWSMLP3zTZXBHzH0Y",
    "id": 3
} 
```

## Log in a user

POST /api/auth/login
Host: expath.herokuapp.com

Login with the email and password you used to register:

```
{
    email: "",
    password: ""
}
```
