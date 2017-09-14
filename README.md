# BangazonAPI

This is an API for Bangazon LLC. This API will allow a user to GET/POST/PUT and DELETE items from the Bangazon Database. Before you can utilize the database, there are a few things you need to make sure you have installed. 

# Installing Core Technologies

## SQLite

### For macOS Users

```
brew install sqlite
```

### For Windows Users

Visit the [SQLite downloads](https://www.sqlite.org/download.html) and download the 64-bit DLL (x64) for SQLite version, unzip and install it.

### For Ubuntu or Debian Linux Users

```
sudo apt install sqlite
```
### For Fedora Linux Users (Redhat Linux Users: replace dnf with yum)

```
sudo dnf install sqlite 
```

## SQL Browser 

The [DB browser for SQLite](http://sqlitebrowser.org/) will let you view, query and manage your databases. Linux users can download this via their package managers.

## Visual Studio Code

[Visual Studio Code](https://code.visualstudio.com/download) is Microsoft's cross-platform editor that we'll be using during orientation for writing JavaScript and building Node applications. Make sure you add the [JavaScript extension](https://code.visualstudio.com/Docs/languages/javascript) immediately after installation completes.

## Windows or macOS

### Install Node.js

https://nodejs.org/en/docs/guides/getting-started-guide/

  1. Click the above link to download Node.  
  https://nodejs.org/en/download/
  2. Make a directory for your app: mkdir HelloWorld
  3. Move to the newly created directory: cd HelloWorld
  4. Create a new file called app.js: 
  5. Paste in the code form the example link at the top of the instructions.
  6. Run the app: node app.js
  7. Navigate to http://localhost:3000/
  8. You should see your 'Hello World' message.

## Linux

### Install Node.js
  It is recommended that you install node via your package manager. The rest of the project is exactly the same as Windows and macOS.
  ## For Ubuntu or Debian Linux Users

```
sudo apt install nodejs
```
## For Fedora Linux Users (Redhat Linux Users: replace dnf with yum)

```
sudo dnf install nodejs
```



### Review Node Documentation

https://nodejs.org/en/docs/

# Installing the Bangazon API

As of now, the database is going to be hosted on your local computer. There are a few things you need to make sure are in place before the database can be up and running.
 1. Clone the repo on to you local machine. 
 2. Run `npm install`
 3. Next Run `npm start` 
 >This will install all of the necessary packages to get up and running and get your back-end server started.

 ## Using the API
For now, all calls to the API will be made from `http://localhost:8000` as the domain. All calls will be made from here. 
>Example: You can get a list of all the users by making a GET call to 
`http://localhost:8000/api/v1/users/`
