# Sequelize boilerplate with Express
Simple boilerplate for model definition sequelize v6.
### Installation
1. Install dependencies
```
> npm install or yarn install
```
2. Create `.env` from `.env.sample`
```
> cp .env.sample .env
```
3. Set up database config information in the `.env` file
```
DB_TYPE = postgres        # database dialect 
DB_HOST = localhost       # database connection host
DB_DB = db_name           # database name
DB_PORT = 5432            # database port
DB_USER = username        # database username
DB_PASSWORD = password    # database password
```
4. Run the app
```
> npm run dev
```