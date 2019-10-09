<img src="https://raw.githubusercontent.com/b-b0t/chuck/master/static/logo.png" width="256" height="256" />

# Chuck
---
An interactive GraphQL wrapper for the https://chucknorris.io API

## Usage

The GraphQL playground can be accessed at https://chuck.byronpolley.com/api/graphql.

To run locally you will need Now CLI.

`npm install -g now`

`npm install`

`now dev`

### Queries

- Retrieve a list of available categories

```
{
  categories {
		name
  }
}
```

- Retrieve a random Chuck Norris joke from one of the retrieved categories

```
{
  random(category: "dev") {
   	created_at
    icon_url
    id
    updated_at
    url
    value
  }
}
```

### Tech Stack

1. React _16.10.2_
2. Next.js _9.0.7_
3. Apollo Boost _0.4.4_
4. Apollo Server Micro _2.9.0_
5. NodeJS LTS _10.16.3_
6. ESLint _6.1.0_
7. Typescript _3.6.4_

---

#### Footnotes

Hosted on [Now](https://zeit.co/ "Now")

The frontend implements `prefers-color-scheme` on supported browsers. Try the transition by switching your OS theme :)