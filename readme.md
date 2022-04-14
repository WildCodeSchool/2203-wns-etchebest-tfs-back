Installer les modules du package.json:

```sh
npm install
```

Lancer le serveur - actualisation à la sauvegarde:

```sh
npm start
```

```sh
npx prisma
```

Prisma is a modern DB toolkit to query, migrate and model your database (https://prisma.io)

Usage

$ prisma [command]

Commands

            init   Setup Prisma for your app
        generate   Generate artifacts (e.g. Prisma Client)
              db   Manage your database schema and lifecycle
         migrate   Migrate your database
          studio   Browse your data with Prisma Studio
          format   Format your schema

Flags

     --preview-feature   Run Preview Prisma commands

Examples

Setup a new Prisma project
$ prisma init

Generate artifacts (e.g. Prisma Client)
$ prisma generate

Browse your data
$ prisma studio

Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
$ prisma migrate dev

Pull the schema from an existing database, updating the Prisma schema
$ prisma db pull

Push the Prisma schema state to the database
$ prisma db push

```sh
npx prisma init --datasource-provider sqlite
```

1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Run npx prisma db pull to turn your database schema into a Prisma schema.
3. Run npx prisma generate to generate the Prisma Client. You can then start querying your database.
