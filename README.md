# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


-database used to store and manage data
 SQL
 ----
 -Relational/SQL RDBMS
 -Store data in tables with rows and column
 -uses fixed schema
 -optimized for complex join and transactions
 -support rich set of data types
 -ACID(atomicity,concistency,isolation,durability)
 -uses traditional business app


 MongoDB
  ----------------
 -Document Oriented / NoSQL DB
 -Store data as a collection of JSON Documents
 -uses dynamic schema
 -optimized for scalability and performance
 -limmited set of data types
 -CAP(Consitancy,Durability,Partition Tolerence)
 -used in bigdata and real time applications


 -CURD Operations
 ----------------
-to  read all document from a collection: find()
-to get single Document from a collection: findOne({key:value})
-to insert single document to a collection:insertOne({key:value})
-to insert many document to a collection: insertMany({key:value},{key:value}....)
-to display total count of documents in a collection : countDocuments()
-to limit count of document read from collection: limit(number)
-to sort data: sort(condition)-- 1 - ascending
                                -1- decending
-to skip data while reading the documents: skip(number)
-$gt/$lt/$gte/$lte ---query expression used to read the documents
-$in/$nin --used to check document included or not 
-$expr -used to compare different fields in same document  
-to update document -- updateOne/updateMany()
        -$set-to assign values
        -$inc-
-to delete document
-Aggregation: used to join multiple collection to get common result
common result

    collection_name.aggregate(*syntax)

    {
        $lookup: {
                from:<.collection to join>
                ex:projects

                localField:<field from the input
                document> ex:email,
                foreignField: <feilld from the 
                document of the  "from" collection>
                ex:userId,

                as:<output array field>
                ex:projects

        }
    }

--------------------------------------------------
NODE JS - SERVER/BACKEND
------------------------

-js run time environment + js library

-features
    -extreamly Fast
    -Asynchronous
    -Single Threaded with event loop
    -Highly scalable
    -open source


-nodejs global objects
        -it can be accessed any where from your node app without exporting/importing
            ex:console.log(),setTimeOut()
-node module system: a file is considered as module in node , to access data from one file it has export from there , and before using it in another file  file it should be  import there
         to import file: require('module name/path') 
         to export file: module.exports/exports     
         
-built-in modules in node

    -file system module(fs):handling file related event
    -http: used to create webserver
    -https: used to create webserver
    -crypto: providing tools like hashing,encryption etc.
    -events: works with eventEmitter
    -process: used to provide info about currently runnung process in node app 
        - environmental variable: used to hold configuration/confidential information regarding the project. to access ev through out the app use 'process.env.variable_name'
        -node js packages:used to resolve common problem 
        - install packages via npm
        - it adds package.json,package-lock.json and node_modules in your applications
        
-Back-end concepts:
            --client-server architecture
            --REST applications
            -CRUD OPERATION(Create(POST),Read(GET),Update(PUT),Delete(DELETE))   
            -CORS(Cross Origin Resource Sharing) protocol must be enable in the server


--------------------------------------
EXPRESS -Node js framework
--------------------------
1.used in client server architecture as web server
2.steps to create server using express
    -create a floder for back-end
    -create package.json file using the command 'npm init -y
    -update package.json "script" value as "start":"node index.js" instead of test
    -install packages for creating express server

            -express: npm i express
            -cors: npm i cors
            -dotenv: npm i dotenv
        -create .env file
        -create .gitignore file   
        -create index.js file to define express server 
        -import dotenv , cors, and express
        -createc server using express
        -use cors in express server
        -use json parser in express server
        -create port for server app
        -run the server at the port

3.create routes in express server
        - create a folder
            -create a js file inside the folder
            -import express library
            -create an object of Router class of express:router object is capable of defening route for the app
            -export router from the file
            -import in index.js file
            -use router in pfServer
4.create a controller  folder to define logic to solve client request

--------------------------------------------------------
MONGOOSE-Object Data Model(ODM) for Node js
--------------------------------------------

-install mongoosre using : npm i mongoose
-

        
