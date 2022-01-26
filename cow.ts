let flag: boolean = true;
console.log("Value assigned to flag is : "+flag);

let module: String = "App development";
console.log("Name assigned to the module is : "+module);

let coin: number = 1;
console.log("Value assigned to coin is : "+coin);

let random = [2019,2020,2021];
console.log("Value assigned to array 1 : "+ random[0]);
console.log("Value assigned to array 2 : "+ random[1]);
console.log("Value assigned to array 3 : "+ random[2]);

let myarray:number[]=[4,5,8];
for(let i=0; i<myarray.length; i++)
{
    console.log("the value at postion "+i+" is: "+myarray[i]);
}

//not sure type
let notSure: any ="Not sure of the data type";
console.log("the value of notSure data is : "+notSure);

// any type of data in an array
let unknown: any[]= [2,"hello",false]
for(let i=0; i<unknown.length; i++)
{
    console.log("the value at postion "+i+" is: "+unknown[i]);
}

//functions

function char_count(value: String ):number
{
    return value.length;
}

let count:number = char_count("Test 1");
console.log(count);

function char_count_noSpaces(Value:string):number
{
    return Value.replace(" ","").length;
}

let count2= char_count_noSpaces("Test 1");
console.log(count2);

///////////////////////////////////////?here after spaces
//wont need true in line 64
function count_both(value:string, spaces?:boolean):number
{
    if(spaces)
    {
        return value.length
    }
    else
    {
        return value.replace(" ", " ").length;
    }
}

let count3 = count_both("Test 1 ");
console.log(count3);

    
