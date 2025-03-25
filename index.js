require('dotenv').config()


const express = require('express')
//import express from "express"
const app = express()
const port = 4000

const githubData = {
    "login": "ShivamKumar-123",
    "id": 175000817,
    "node_id": "U_kgDOCm5M8Q",
    "avatar_url": "https://avatars.githubusercontent.com/u/175000817?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ShivamKumar-123",
    "html_url": "https://github.com/ShivamKumar-123",
    "followers_url": "https://api.github.com/users/ShivamKumar-123/followers",
    "following_url": "https://api.github.com/users/ShivamKumar-123/following{/other_user}",
    "gists_url": "https://api.github.com/users/ShivamKumar-123/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ShivamKumar-123/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ShivamKumar-123/subscriptions",
    "organizations_url": "https://api.github.com/users/ShivamKumar-123/orgs",
    "repos_url": "https://api.github.com/users/ShivamKumar-123/repos",
    "events_url": "https://api.github.com/users/ShivamKumar-123/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ShivamKumar-123/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Shivam kumar",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 14,
    "public_gists": 0,
    "followers": 1,
    "following": 2,
    "created_at": "2024-07-08T07:52:09Z",
    "updated_at": "2025-02-23T17:39:00Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("hiteshdotcom")
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Chai aur code </h2')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/github',(req,res)=>{
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})