# Task-Manager-API

Task manager api with user authentication.<br/>
This API includes almost all necessary features for a task-manager app.<br/>
Users can create new account with name, email and password.<br/>
Valid users can create new task, update task, delete task.<br/>
Users can add profile picture and manage profile.<br/>
Creating and deleting user account get notified via email.<br/>

## Requirements

```
Node.js 12+
npm 6+
MongoDB
```

## Installation

If you want to test my project or do whatever you want, here's a little guide: <br/>

### Postman

You need Postman to test the app.<a target='_blank' style='font-weight: bold' href="https://www.postman.com/downloads/"> Click here</a> to download Postman.<br/>

Use "Task Manager API (production)" environment on Postman if you don't want to setup locally.</br>
If you're using "Task Manager API (production)" environment, skip to "Postman Setup" section.

### Cloning Repository

Clone this repository using git clone into your local machine:

```
    $ git clone https://github.com/rsupanta/task-manager-api.git
```

Or you can download as zip file using github.

### Setting up Project Environment

Navigate into project directory.<br/>
Run command to install all dependencies:

```
    $ npm install
```

The packages are going to install:

```
    "bcryptjs": "^2.4.3",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mongodb": "^3.5.8",
    "mongoose": "^5.9.17",
    "multer": "^1.4.2",
    "nodemailer": "^6.4.8",
    "sharp": "^0.25.4",
    "validator": "^13.0.0"

    // As dev dependency
    "env-cmd": "^10.1.0",
    "jest": "^26.0.1",
    "nodemon": "^2.0.4",
    "supertest": "^4.0.2"
```

### Setup env

Add a new directory name "config". Create new file "dev.env".</br>

```
    DB_URL=mongodb://127.0.0.1:27017/task-manager-api/your_db_url
    JWT_TOKEN_VERIFY=any_string_here
    EMAIL_HOST=smtp.gmail.com/your_email_host
    EMAIL_PORT=587/your_mail_port
    EMAIL_USER=your_mail_address
    EMAIL_PASS=email_pass/app_pass
    PORT=3000
```

If you want to test the app, I have "Jest" and "Supertest" included.</br>
Create another file "test.env" and add above data with different database name.

### Run Local Server

Navigate into project directory and run command-<br/>

```
    // Start server
    $ npm run start

    // Start development server
    $ npm run dev

    // Test the app with "Jest"
    $ npm run test
```

Start Server/Dev Server will show server running status.<br/>

You can now access the api from postman.

### Postman Setup

I have included postman export json file. You just have import the json file in postman.</br>
Download the json file from <a target='_blank' style='font-weight: bold' href="https://github.com/rsupanta/task-manager-api/blob/master/Task-App.postman_collection.json">here</a><br/>
Import this file into Postman and start testing the app.

### Thanks for your time.
