---
title: How to use IAM authentication with Google Cloud SQL for PostgreSQL or MySQL
description: Learn how to set up and use IAM authentication for Google Cloud SQL databases, enhancing security and simplifying access management for PostgreSQL and MySQL instances.
created: '2025-10-29 16:42:00'
categories:
  - devops
  - dev
  - google-cloud
  - gcp
  - database
  - iam
  - authentication
  - auth
  - postgres
  - mysql
published: true
---

Identity and Access Management (IAM) ensures that users
have the appropriate access to technology resources.

Structured Query Language (SQL) is a standard language for
managing and manipulating databases.

Google Cloud SQL supports IAM authentication for PostgreSQL and MySQL databases,
allowing you to manage database access using IAM roles and permissions.

This enhances security by eliminating the need for
traditional username/password authentication.

## Prerequisites

This guide uses Bun to run JavaScript/TypeScript code.
You can adapt the code snippets to
your preferred programming language or environment.

For using the official adapter libraries,
refer to the respective documentation for PostgreSQL or MySQL.

Before you begin, ensure you have the following prerequisites in place:

- A Google Cloud project with billing enabled.
- A Cloud SQL instance running PostgreSQL or MySQL.
- The `gcloud` command-line tool installed and configured.
- Appropriate IAM roles assigned to users (e.g., Cloud SQL Client role).
- [Bun](https://bun.com) installed for running JavaScript/TypeScript code.

```json filename="package.json"
{
	"name": "db-iam-example",
	"module": "index.ts",
	"type": "module",
	"private": true,
	"devDependencies": {
		"@google-cloud/cloud-sql-connector": "1.8.4",
		"@prisma/client": "6.18.0",
		"@types/bun": "latest",
		"hono": "4.10.3",
		"prisma": "6.18.0"
	},
	"peerDependencies": {
		"typescript": "^5"
	}
}
```

The `index.ts` file contains the main application logic
to spin up a web server and query the database.

```typescript filename="prisma/schema.prisma"
import { connect } from './db';
import { Hono } from 'hono';

async function getNow(): Promise<string> {
	const { prisma, close } = await connect({
		// Replace with your instance connection name
		instanceConnectionName: 'my-gcp-project-name:europe-west3:some-instance-name',
		// This is the database service account configured to use IAM authentication
		// Normally a service account email is used here, but for Cloud SQL IAM auth,
		// just the username part is sufficient.
		user: 'mwco-sql-sa',
		database: 'my_database_name'
	});
	try {
		const now = await prisma.$queryRaw`SELECT NOW() as now`;
		await close();
		return now[0].now;
	} catch (e) {
		console.log('Error occured, closing!');
		await close();
		throw e;
	}
}

const app = new Hono();
app.get('/', async (c) => {
	const now = await getNow();
	return c.json({ now });
});

export default {
	port: 8080,
	fetch: app.fetch
};
```

The `db.ts` file contains the logic to connect to the
Google Cloud SQL database using IAM authentication.

```typescript filename="db.ts"
import { resolve } from 'node:path';
import { AuthTypes, Connector, IpAddressTypes } from '@google-cloud/cloud-sql-connector';
import { PrismaClient } from './generated/prisma/client';

interface ConnectOptions {
	instanceConnectionName: string;
	user: string;
	database: string;
}

export async function connect({ instanceConnectionName, user, database }: ConnectOptions) {
	const path = resolve('mysqld.sock');
	const connectorInstance = new Connector();
	await connectorInstance.startLocalProxy({
		instanceConnectionName,
		ipType: IpAddressTypes.PRIVATE,
		authType: AuthTypes.IAM,
		listenOptions: { path }
	});

	const datasourceUrl = `mysql://${user}@localhost/${database}?socket=${process.cwd()}/mysqld.sock`;
	const prisma = new PrismaClient({ datasourceUrl });

	return {
		prisma,
		async close() {
			await prisma.$disconnect();
			connectorInstance.close();
		}
	};
}
```

The `prisma.config.ts` file contains the Prisma configuration:

```typescript filename="prisma.config.ts"
import { defineConfig } from 'prisma/config';

export default defineConfig({
	schema: 'prisma/schema.prisma',
	migrations: {
		path: 'prisma/migrations'
	},
	engine: 'classic',
	datasource: {
		url: ''
	}
});
```

The `prisma/schema.prisma` file defines the Prisma schema:

```prisma filename="prisma/schema.prisma"
generator client {
  provider = "prisma-client"
  output   = "../generated/prisma"
}

datasource db {
  provider = "mysql"
  url      = ""
}
```

## Run the application

To run the application, follow these steps:

1. Install the dependencies:

```bash
bun install
```

2. Start the application:

```bash
bun run index.ts
```

3. Access the application in your web browser or via curl:

```bash
curl http://localhost:8080/
```

You should see a JSON response with the current timestamp from the database.

```json
{
	"now": "2025-10-29T16:42:00.123Z"
}
```

## Conclusion

Using IAM authentication with Google Cloud SQL for PostgreSQL or MySQL
enhances security and simplifies access management.
