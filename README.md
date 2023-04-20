### Slot-Booking Task 

###### there I have created 2 branches -

- main branch   for frontend used react , bootstrap 
- server branch for server side programming 

### Model 

```
{
    date: {
        type: String, 
        required : true
    } 
    startTime: {
        type: String, 
        required : true
        
    } ,
    endTime: {
        type: String, 
        required : true
    } ,
}
```


##### Successful  Response --

```
{
    status : true , message : "Slot Booked Successfully " , data : data
}

```