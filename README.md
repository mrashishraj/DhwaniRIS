# Hello DhwaniRIS

## Frontend Task 1

=> How to start:
   Just clone the repo and go inside the task-1-credit-card and press "npm start".

=> About the functionality:
  * It accepts only 4 number in each input boxes.
  * After adding 4th number it automatically focus on the next input box same happen with deletion.
  * After pasting from any clipboard it accept only first 16 digit number even you user coppied more then 16 and the last box focused.
  * After press enter or click on submit it add to list with an deletion button only if anything written on any box.
  * After click on delete then that perticular item will be deleted from the list

## Frontend Task 2

=> How to start:
   Just go to html file click on live server or copy tha path and paste in the browser.

=> About the functionality:
  * When User click a box then it come on top of all oter boxes.
  * If click on the same box again then it goback on it's initial position.
  * If click on box1 and then click on box2 then both boxes come on top 
    after that if click on 5 then the box5 come on top of all other boxes
    same happens with all boxes.

## Backend 

How to start:
Just Clone and go inside backend1 folder and in the terminal press "nodemon server.js"

=> GET / POST Api List:- 
  * post Register => http://localhost:5000/register
  * post Login => http://localhost:5000/login
  * post Logout => http://localhost:5000/logout
  * get State => http://localhost:5000/state
  * post State => http://localhost:5000/add_state
  * get District => http://localhost:5000/dist
  * post District => http://localhost:5000/add_dist
  * get Child => http://localhost:5000/child
  * post Child => http://localhost:5000/add_child
  
 => Schema for Router
    * Post Register:-
      "name":<min 2 character>,
      "email":<min 6 character & must be different form other>,
      "password": <min 6 character>,
      
    * Post Login:-
      "email":<min 2 character>,
      "password":<min 2 character>,

    * Post add_state:-
      "state_name":<min 2 character>,
      
    * Post add_dist:-
       "state_name":<min 2 character>,
       "dist_name":<min 2 character>,
       
     * post add_child:-
        "name":<min 2 character>,
        "sex":<min 2 character>,
        "date_of_birth":<dd-mm-yyyy>,
        "father_name":<min 2 character>,
        "mother_name":<min 2 character>,
        "state":<min 2 character>,
        "dist":<min 2 character>,
        
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
