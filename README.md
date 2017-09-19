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
  7. Navigate to http://localhost:8000/api/v1
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
 1. Clone the repo on to your local machine. 
 2. Run `npm install`
 3. Then `npm run db:reset` (resets the database) 
4. Next, run `npm start` 
 >This will install all of the necessary packages to get up and running and get your back-end server started.

 ## Using the API
All API calls will be made from `http://localhost:8000/api/v1` as the domain. Here you can see the different options you have available.
>Example: You can get a list of all the users by making a GET call to 
`http://localhost:8000/api/v1/users/`

### Users

* GET You can access a list of all users by running a Get call to `http://localhost:8000/api/v1/users`
* GET one user. You can get the information on a single user by running a Get call to http://localhost:8000/users/{userID}. This method will return the user with nested completed orders under the "Orders" property
>Note you need to have a users unique ID number to get the correct information
* GET all users that have created an order by running Get `http://localhost:8000/api/v1/users/?active=true`
* GET all users that have NOT created an order by running Get `http://localhost:8000/api/v1/users/?active=false`
* PUT You can update the info on a specific user by running a Put call to `http://localhost:8000/api/v1/users/replace/{userID}`
    * You must Put the entire changed object, which will include the `userID`, `firstName`, `lastName`, `phone`, `email`, `address_street`, `address_city`, `address_state`, and `address_zip`.
    * Example: `{"firstName": "Keanu", "lastName": "Torphy", "phone": "837-313-3986", "email": "Annabelle.Batz@hotmail.com", "address_street": "7765 Hill Terrace", "address_city": "West Monty", "address_state": "Wyoming", "address_zip": 43329}`
* POST You can post a new user but running a Post call to `http://localhost:8000/api/v1/users/new`.
    * The Post must also have all of these properties.
    * The user_id is auto-generated.

### Products

* GET You can access a list of all products by running a Get call to `http://localhost:8000/api/v1/products`
* GET one. You can get the information on a single product by runnning a Get call to `http://localhost:8000/api/v1/products/{productID}`
>Note: You need to have a products unique ID number to get the correct information

* PUT You can update the info on a specific product by running a Put call to `http://localhost:8000/api/v1/products/replace/{productID}`
    * The Put must send in the complete object which will include a `title`, `description`, `price`, and `seller_id`.
    * Example: `{"title": "Tasty Wooden Mouse", "description": "content-based", "price": 703.00, "seller_id": 1}` 

* DELETE You can delete a product by running a Delete call to `http://localhost:8000/api/v1/products/delete{productID}`

* POST You can add a product by running a Post call to `http://localhost:8000/api/v1/products/new`
    * You must submit a `title`, `description`, `price`, and `seller_id`.
    * Example: `{"title": "Tasty Wooden Mouse", "description": "content-based", "price": 703.00, "seller_id": 1}`

### Product Types

* GET You can access a list of all product types by running a Get call to `http://localhost:8000/api/v1/product-types`
* GET one. You can get the information on a single product type by runnning a Get call to `http://localhost:8000/api/v1/product-types/{product-typeID}`
>Note: You need to have a product types unique ID number to get the correct information

* PUT You can update the info on a specific product type by running a Put call to `http://localhost:8000/api/v1/product-types/replace/{product-typeID}`
    * Running a put requires that you submit the entire object.
    * Example: `{ "type": "Steel" }`

* DELETE You can delete a product type by running a Delete call to `http://localhost:8000/api/v1/product-types/delete/{producttypeID}`

* POST You can enter a new product type by running a Post call to `http://localhost:8000/api/v1/product-types/new`
    * You must put a `type` with a post.
    * Example: `{ "type": "Steel" }`

### Payment Types

* GET You can access a list of all payment types by running a Get call to `http://localhost:8000/api/v1/payment-types`
* GET one. You can get the information on a single payment type by runnning a Get call to `http://localhost:8000/api/v1/payment-types/{payment-typeID}`
>Note: You need to have a payment types unique ID number to get the correct information

* PUT You can update the info on a specific payment type by running a Put call to `http://localhost:8000/api/v1/payment-types/replace/{payment-typeID}`
    * Running a Put requires that you submit the entire object.
    * Example: `{ "account_number": 4139712, "user_id": 1, "transactionType_id": 1 }`

* DELETE You can delete a payment type by running a Delete call to `http://localhost:8000/api/v1/delete/payment-types/{payment-typeID}`

* POST You can enter a new payment type by running a Post call to `http://localhost:8000/api/v1/payment-types/new`
    * You must have an `accountNumber`, `transactionType_id`, and `userID` with a Post.
    * Example: `{ "account_number": 4139712, "user_id": 1, "transactionType_id": 1 }`


### Orders

* GET You can access a list of all orders by running a Get call to `http://localhost:8000/api/v1/orders`
* GET one. You can get the information on a single order by runnning a Get call to `http://localhost:8000/api/v1/orders/{orderID}`
* GET one returns JSON containing the order details as well as an array of products added to orders
>Note: You need to have a order unique ID number to get the correct information. You also need to create an order before you can Get one.

* PUT You can update the info on a specific order by running a Put call to `http://localhost:8000/api/v1/orders/replace/{orderID}`
    * Running a Put requires that you submit the entire object.
    * Example: `{ "order_date": "Tue, 19 Sep 2017 09:55:08 -0500", "buyer_id": 2, "paymentType_id": 2 }`

* DELETE You can delete an order by running a Delete call to `http://localhost:8000/api/v1/orders/delete/{orderID}`

* POST You can enter a new order by running a Post call to `http://localhost:8000/api/v1/orders/new`
    * This requires all the same data as a Put.
    * The order_date field is auto-generated with the current date.
### Employees

* GET You can access a list of all employees by running a Get call to `http://localhost:8000/api/v1/employees`
* GET one You can get the information on a single employee by runnning a Get call to `http://localhost:8000/api/v1/employees/{employeeID}`
>Note: You need to have a employee unique ID number to get the correct information

* PUT You can update the info on a specific employee by running a Put call to `http://localhost:8000/api/v1/employees/replace/{employeeID}`
    * Running a Put requires that you submit the entire object.
    * Example: `{ "name": "Demond Connelly", "position_title": "accountatnt", "phone": "615-355-4597" }`

* POST You can enter a new payment type by running a Post call to `http://localhost:8000/api/v1/employees/new`

    * You must have all the same data as a Post.
    * Example: `{ "name": "Demond Connelly", "position_title": "accountatnt", "phone": "615-355-4597" }`

### Departments

* GET You can access a list of all departments by running a Get call to `http://localhost:8000/api/v1/departments`
* GET one. You can get the information on a single department by runnning a Get call to `http://localhost:8000/api/v1/departments/{departmentID}`
>Note: You need to have a department unique ID number to get the correct information

* PUT You can update the info on a specific department by running a Put call to `http://localhost:8000/api/v1/departments/replace/{departmentID}`
    * Running a Put requires that you submit the entire object.
    * Example: `{ "dept_name": "Games", "expense_budget": 2000, "employee_id": 2 }`

* POST You can enter a new payment type by running a Post call to `http://localhost:8000/api/v1/departments/new`
    * You must have the same data as a Post.
    * Example: `{ "dept_name": "Games", "expense_budget": 2000, "employee_id": 2 }`

### Computer

* GET You can access a list of all computers by running a Get call to `http://localhost:8000/api/v1/computers`
* GET one. You can get the information on a single computer by runnning a Get call to `http://localhost:8000/api/v1/computers/{computerID}`
>Note: You need to have a computer unique ID number to get the correct information

* PUT You can update the info on a specific computer by running a Put call to `http://localhost:8000/api/v1/computers/replace/{computerID}`
    * Running a Put requires that you submit the entire object.
    * Example: `{ "purchased_date": "Tue, 19 Sep 2011 09:55:08 -0500", "decomissioned_date": "Tue, 19 Sep 2016 012:30:11 -0500", "model_number": 52234, "employee_id": 2 }`

* DELETE You can delete a computer by running a Delete call to `http://localhost:8000/api/v1/computers/delete/{computerID}`

* POST You can enter a new computer by running a Post call to `http://localhost:8000/api/v1/computers`
    * You must have the same data as a Post.
    * Example: `{ "purchased_date": "Tue, 19 Sep 2011 09:55:08 -0500", "decomissioned_date": "Tue, 19 Sep 2016 012:30:11 -0500", "model_number": 52234, "employee_id": 2 }`

### Training Programs

* GET You can access a list of all training programs by running a Get call to `http://localhost:8000/api/v1/trainingprograms`
* GET one. You can get the information on a single training program by runnning a Get call to `http://localhost:8000/api/v1/trainingprograms/{trainingprogramID}`
>Note: You need to have a training program unique ID number to get the correct information

* PUT You can update the info on a specific training program by running a Put call to `http://localhost:8000/api/v1/trainingprograms/replace/{trainingprogramID}`
    * Running a Put requires that you submit the entire object.
    * Example: `{ "start_date": "Tue, 19 Sep 2011 09:55:08 -0500", "end_date": "Tue, 19 Sep 2016 09:55:08 -0500", "max_attendees": 50 }`

* DELETE You can delete a training program by running a Delete call to `http://localhost:8000/api/v1/trainingprograms/delete/{trainingprogramID}`
>Note: You can only delete a training program if the current date is before the start date of a program. You cannot delete programs that have already happened. 

* POST You can enter a new training program by running a Post call to `http://localhost:8000/api/v1/trainingPrograms/new`
    * You must have the same data as a Put.
    * Example: `{ "start_date": "Tue, 19 Sep 2011 09:55:08 -0500", "end_date": "Tue, 19 Sep 2016 09:55:08 -0500", "max_attendees": 50 }`