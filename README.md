# CS361-microservice

To request data, the requester must provide this type of http request to the server:
http://localhost:3000/fabrics/id
Replace "id" with the object id of the of the fabric to find it's corresponding pros and cons. 
Here is another example: 
http://localhost:3000/fabrics/65dd765ad647c9c5b60102af

Note that currently I am running the server on my local device and running it on PORT 3000. The /fabrics end point can 
also be changed into whatever you like, the only thing is the app.get endpoint will need to be updated. 

I set up the program in the MVC way where the controller is handling the endpoints and the model is communicating
with the database. For this microservice I am using MongoDb, however I can modify this to use a different database 
(ie MySQL, or even a local database) as needed!

The app.get endpoint calls findFabricById when it receives a request containing an ID and findFabricById find an ID 
match in the database and returns it if it's found. Otherwise and error is sent if no matching ID is found.

If a match is found, the findFabricById sends the corresponding information and the controller sends the information formatted as a json. 

![image](https://github.com/pineapplepeachypie/CS361-microservice/assets/126367511/1e601e1a-2ad6-4a03-9fb9-51a9e209dea1)
