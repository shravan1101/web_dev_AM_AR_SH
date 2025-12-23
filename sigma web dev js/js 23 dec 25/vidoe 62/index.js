
/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/
console.log("video 62 ")


function decide(){
     x = Math.random();

    return (x);
}
let a = decide();

if(a>0.66)
     business = "Crazy";
else if(a>0.33)
     business = "Amazing";
else
     business = "Fire";


let b = decide();

if(b>0.66)
     business = business.concat("Engine");
else if(b>0.33)
       business = business.concat("Foods");
else
   business = business.concat("Garments");


let c = decide();

if(c>0.66)
     business = business.concat("Bros");
else if(c>0.33)
    business = business.concat("Limited");
else
     business = business.concat("Hub");

console.log(business)
