# landing-page-admin

Customizable Landing Page with Admin Panel

Requirements:

1. MariaDB 10+/MySQL 5.7+
2. Node 14+

To setup in a new local environment:

1. Make sure you have the correct Node version

```sh
$ nvm use
```

2. Open `/server/config` directory then edit `config.json` for your local environment

3. Go back to the root folder then setup the database and template by running:

```sh
$ npm run db-migrate
```

4. Install the dependencies

```sh
$ npm install
```

5. Run APIdoc

```sh
$ npm run docs
```

6. Run both the client and dev server

```sh
$ npm run dev
```
