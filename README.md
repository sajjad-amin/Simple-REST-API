# Simple-REST-API
A simple contact list application's REST API example, based on NodeJS and JavaScript
## Data structure :
send data using this structure to update. If you want to insert data just remove the id
```
{
	"id": 1,
	"name": "MR. X",
	"email": "mr.x@mail.com"
	"phone": "+8801xxxxxxxxx"
}
```
If you want to delete, you have to send only id
```
{
	"id":1
}
``` 
## Uses :

### Get all data :
	URL/api/contacts

### Get specific data :
	URL/api/contacts/id
### Insert data :
	URL/api/insert
*send data in JSON format using POST method*
### Update data :
	URL/api/update/id 
*send data with id in JSON format using PUT method*
### Delete data :
	URL/api/delete/id
*send id in JSON format using DELETE method)*
