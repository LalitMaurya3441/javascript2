//Arrow Function

const user ={
    Name :"Lalit Maurya",
    Roll_no : 2250030,
    Welcome:function(){
        // console.log(`${this.Name} , Zindabaad`)
        // console.log(this);
    }
}
// user.Welcome();
// user.Name="Mukund Yadav";
// user.Welcome();
// user.Welcome();

// console.log(this);


//Important~~~

const chai =function(){
    let username = "Lalit";
    console.log(this)
}
const chai1 = ()=> {
    let username = "Santosh";
    console.log(this);
}

chai()
// chai1()