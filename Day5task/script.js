// QUESTION 1:
// JSON ITERATE USING FOR LOOP
 
let keys=['priya','karthi','keshav','boomika','dhanushree']
let values=[1,2,3,4,5]
let person={}
for(let i=0; i<keys.length;i++)
{
    person[keys[i]]=values[i]
}
console.log(person);


//JSON ITERATE USING FOR IN

const data={
    name:'ayesha',
    age :21,
    sex :'female'
}
for(let keys in data)
{
     console.log(keys+":" ,data[keys])
}


//JSON ITERATE USING FOREACH

let fav=['videogames','bookreading','javascript','movie'];
let items=['play','Story','script','Leo'];
let solution={}
fav.forEach((fav,i)=>{
    solution[fav]=items[i]
});
console.log(solution);


//JSON ITERAITON USING FOR OF

let cars={'i20':1,'Kia':2,'honda':3,'Benz':'fav'}
let k= Object.keys(cars)
for(let i of k)
{
    console.log(`${i} : ${cars[i]}`);
}


//QUESTION 2:

//EASY RESUME DATA IN JSON FARMAT

let resume={ 
    name         :'priya karthi',
    DOB          : '31.12.1992',
    gender       :'female',
    nationality  :'INDIAN',
    maried_status:'single',
    languages_known:['tamil','english','malayalam','telugu'],
    degree        :'B.TECH',
    university_board:'Anna University',
    percentage_CGPA : '72%',
    year_of_passing :2014,
    Experience : '3 years(part time)'

}
console.log(resume);
