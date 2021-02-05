class student{
    constructor(sId,sName){
        this.id = sId;
        this.name = sName;
        this.school = 'kolimunnesa school';

    }

}


const student1 = new student(12, 'Shuvo');
const student2 = new student(22,'mahiya');
console.log(student1, student2);