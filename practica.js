function suma(val1, val2) {
    const val3=3 ;
    return val1 + val2 + val3;
}
console.log(suma(1 , 2));

const a = 1;
function suma (){
    const b = 2;
    return suma2();
}
 const b = 3;
 const c = 1;

 function suma2 () {
    const c = 3;
    return a + b + c;
 }
   
 console.log(suma());


 const bunny ={
    name:"jaime", 
    tasks: ["speak", "learn" , "teach"],
showtasks: function(){
this.tasks.forEach(function(task){
    console.log(this.name + "wants to : " + task);
});
},
 };

 //solucion: =>

 bunny.showtasks();

 //var === variable logal;
 // let = ligado 
 // const = no cambia

 for(let i = 1; i <= 9; i++){
setTimeout(() => {
    console.log(i);
},10);
}

const persona= {
    name:"jaime" , 
    lastName:"gallego"
};
persona.name= "lucas";
console.log(persona);


//map vs filter vs reduce
const array = [1,2,3];
 const arrayMapped = array.map((element)=> element + 1);
console.log(arrayMapped)

const arrayFilter = array.filter((element)=> element % 2 === 0);
console.log(arrayFilter)

const reducer = array.reduce((acumulator, element)=> acumulator + element);
const Reducearray = (reducer)
console.log(reducer)


//undefined null defined
let a;
console.log(a)

let b = 2;
console.log(b)

let c=null;
console.log(c)


//hoisting
const a = 1;

function suma(val){
  return (a + b + val)
};
const b = 1;
const c = a + b
console.log(c)

class auto {
    #ruedas
    getruedas(){
    return this.ruedas;
  }
  }


const persona={
    name:"jaime"
  };
 Object.freeze(persona);
  persona.name = "juan";
  console.log (persona);


  const bunny ={
    name:"lucas",
    tasks:["learn","speak"], 
    showTasks:function(){
      this.tasks.forEach((task) => {
        console.log(this.name + " " + task)
     })
    }
}
      bunny.showTasks()