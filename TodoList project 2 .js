const Todolist={
    categories:{},
    //method to add category
    addcategory:function (categoryName){
     if (!this.categories[categoryName])
     {
this.categories[categoryName]=[];
console.log(`category '${categoryName}'added`)}
else{
console.log(`category'${categoryName}'alreadyexist`)
        }},
 addtask:function(categoryName,taskadd)
{
    if(this.categories[categoryName])
    {
        this.categories[categoryName].push(taskadd)
        console.log('Task'+taskadd+'added to'+categoryName+'category')
    }
    else {
        console.log('Task'+taskadd+ 'already exists')
    }
    },
    Displaytask:function (categoryName) 
{
if(this.categories[categoryName])
{
    console.log('Tasks in category'+categoryName)
    this.categories[categoryName].forEach((task,index)=>
    console.log(index+1,task))
}
else
{
    console.log('category does not exist')
}
},
completeTask:function(categoryName,taskIndex)
{
    if (this.categories[categoryName] && this.categories[categoryName][taskIndex]) {
        const completedTask = this.categories[categoryName].splice(taskIndex, 1);
        console.log(`Task '${completedTask}' completed in category '${categoryName}'.`);
      } else {
        console.log(`Invalid category or task index.`);
      }
}
    };
    Todolist.addcategory('work');
Todolist.addtask('work','arraging customers')
Todolist.Displaytask('work','arraging customers')
Todolist.completeTask('work',1)
