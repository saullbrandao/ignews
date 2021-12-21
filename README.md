<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://ignews-saullbrandao.vercel.app/">
    <img src="https://raw.githubusercontent.com/saullbrandao/ignews/main/public/images/logo.svg" alt='logo'/>
    
  </a>

  <p align="center">
    <a href="https://www.twitter.com/saullbrandao/">
      <img alt="Saull Brandão" src="https://img.shields.io/badge/-saullbrandao-1DA1F2?style=flat&logo=Twitter&logoColor=white" />
    </a>
    <a href="https://www.linkedin.com/in/saullbrandao/">
      <img alt="Saull Brandão" src="https://img.shields.io/badge/-saullbrandao-0A66C2?style=flat&logo=Linkedin&logoColor=white" />
    </a>
    <a href="./LICENSE">
      <img alt="License MIT" src="https://img.shields.io/github/license/saullbrandao/ignews" />
    </a>
    <a href="https://github.com/saullbrandao/ignews/issues">
    <img alt="Issues" src="https://img.shields.io/github/issues/saullbrandao/ignews" />
    </a>
  </p>
  <h2 align="center">Ignews</h2>

  <p align="center">
    News about the React world
    <br />
  </p>
</p>

# :bookmark_tabs: Table of Contents

- [About the project](#about-the-project)
- [Technologies](#technologies)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Issues](#issues)
- [Contributing](#contributing)
- [License](#license)

# :page_with_curl: About the Project

![ignews](https://raw.githubusercontent.com/saullbrandao/ignews/main/demo.png)

- Subscription based blog with news about React
- Sign in with github account and store user information on FaunaDB
- Use Stripe to handle subscription payment
- If the user has no active subscription only a post preview is showed

# :computer: Technologies

- [React](https://github.com/facebook/react)
- [Next.js](https://github.com/vercel/next.js/)
- [Next-Auth](https://github.com/nextauthjs/next-auth)
- [FaunaDB](https://fauna.com/)
- [Prismic CMS](https://prismic.io/)
- [Stripe](https://stripe.com)

# :rocket: Getting Started

## Prerequisites

You will need to install Node.js and yarn

- [Node.js](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install)

## Installation

```sh
# Clone Repository
$ git clone https://github.com/saullbrandao/ignews.git && cd ignews

# Install Dependencies
$ yarn

# Fill .env.local file with YOUR environment variables, according to .env.example file.

# Run Application
$ yarn dev
```

This starts the development server on http://localhost:3000/

# :interrobang: Issues

Create a <a href="https://github.com/saullbrandao/ignews/issues">new issue
report</a>, it will be an honor to be able to help you solve and further improve
our application.

# :mailbox: Contributing

- Fork this repository;
- Create a new branch to develop your feature: `git checkout -b my-feature`;
- Commit your changes: `git commit -m 'feat: my new feature'`;
- Push to your branch: `git push origin my-feature`.
- Open a Pull Request

# :lock: License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more
information. Made by [Saull Brandão](https://www.linkedin.com/in/saullbrandao/).
