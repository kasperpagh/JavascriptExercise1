//opg 1)
var opgave1 = function ()
{
    var opgObj = {bool: true, number: 22, streng: "bubber", array: [1, 2, 3, "llama"], john: {name: "john", country: "Denmark"}};
    console.log(opgObj);
};
console.log("Før opg 1");
opgave1();

var opgave2 = function ()
{
    var jimmy;
    var myArray = [true, 22, "llamaString", jimmy = {navn: jimmy, land: "Denmark"}, 55];
    for (i = 0; i < myArray.length; i++)
    {
        console.log("værdien: " + myArray[i] + " er af typen: " + typeof myArray[i]);
    }
};
console.log("Før opg 2");
opgave2();


var opgave3 = function ()
{
    var StudentObj =
            {
                studentId: 1,
                studentName: "jimmy",
                toString: function () {
                    console.log("StudenID = " + studentId + " and the name is: " + studentName)
                }
            };

    var studentArray = [StudentObj, StudentObj, StudentObj];
    for (i = 0; i < studentArray.length; i++)
    {
        console.log(studentArray[1]);
    }
};
console.log("Før opg 3");
opgave3();


var opgave4 = function ()
{
    var opg4Object =
            {
                student1: {name: "bob", age: 20, isFemale: false},
                student2: {name: "lilly", age: 21, isFemale: true},
                student3: {name: "Hanne", age: 22, isFemale: true},
                studentList: [],
                getYoungest: function ()
                {
                    opg4Object.studentList[0] = opg4Object.student1;
                    opg4Object.studentList[1] = opg4Object.student2;
                    opg4Object.studentList[2] = opg4Object.student3;
                    var youngest;
                    console.log("i get youngest lige før loop")
                    for (i = 0; i < opg4Object.studentList.length; i++)
                    {
                        if (youngest == null)
                        {
                            youngest = opg4Object.studentList[i];
                        }
                        if (opg4Object.studentList[i].age < youngest.age)
                        {
                            opg4Object.studentList[i] = youngest;
                        }

                    }
                    console.log("Here is the youngest student: " + youngest.age);
                    return youngest;
                },
                getGirls: function ()
                {
                    opg4Object.studentList[0] = opg4Object.student1;
                    opg4Object.studentList[1] = opg4Object.student2;
                    opg4Object.studentList[2] = opg4Object.student3;
                    var girls = [];
                    var count = 0;
                    for (i = 0; i < opg4Object.studentList.length; i++)
                    {
                        if (opg4Object.studentList[i].isFemale)
                        {
                            girls[count] = opg4Object.studentList[i];
                            count = count + 1;
                        }
                    }
                    console.log("her er svart fra getGirls: " + girls[0].name + " and " + girls[1].name);
                    return girls;
                }

            };
    opg4Object.getYoungest();
    opg4Object.getGirls();
};
console.log("Før opg 4");
opgave4();


var opgave5 = function (students, student)
{
    var returnList = [];
    var count = 0;
    console.log("præ function liste: " + students + " og den student der skal fjernes: " + student.name);
    for (i = 0; i < students.length; i++)
    {
        if ((student.name === students[i].name) && (student.age === students[i].age) && (student.isFemale === students[i].isFemale))
        {
            students[i] = "DELETED";
        } else
        {
            returnList[count] = students[i];
            count++;
        }

    }
    console.log("her er result på dem der er tilbage i listen: (hele listen) " + returnList);
    for (i = 0; i < returnList.length; i++)
    {
        console.log(returnList[i].name + "\n");
    }
    return returnList;
};

console.log("Lige før opgave 5");

var students =
        [
            student1 = {name: "john", age: 22, isFemale: false},
            student2 = {name: "hanne", age: 23, isFemale: true},
            student3 = {name: "jenny", age: 24, isFemale: true},
            student4 = {name: "bob", age: 25, isFemale: false}
        ];
student = {name: "john", age: 22, isFemale: false};
opgave5(students, student);


var opgave6 = function ()
{
    var students =
            [
                student = {name: "john", age: 22, isFemale: false},
                student = {name: "hanne", age: 52, isFemale: true},
                student = {name: "jenny", age: 13, isFemale: true},
                student = {name: "pia", age: 86, isFemale: true},
                student = {name: "ulla", age: 123, isFemale: true},
                student = {name: "bubber", age: 1323563, isFemale: false},
                student = {name: "birgit", age: 1, isFemale: true},
                student = {name: "bob", age: -45, isFemale: false}
            ];
    console.log("lige før sorter");
    var sorter = function (student)
    {
        if (student.age > 30)
        {
            console.log(student.name + " er over 30 år gammel!");
        }
    };

    students.forEach(function (student)
    {
        if (student.age > 30)
        {
            console.log(student.name + " er over 30 år gammel!");
        }
    }

    )
};
console.log("Lige før opgave 6");
opgave6();


var opgave7 = function ()
{
    var students =
            [
                student = {name: "john", age: 22, isFemale: false},
                student = {name: "hanne", age: 52, isFemale: true},
                student = {name: "jenny", age: 13, isFemale: true},
                student = {name: "pia", age: 86, isFemale: true},
                student = {name: "ulla", age: 123, isFemale: true},
                student = {name: "bubber", age: 1323563, isFemale: false},
                student = {name: "birgit", age: 1, isFemale: true},
                student = {name: "bob", age: -45, isFemale: false}
            ];
    var max = function (arguments)
    {
        var biggest = "NULL";
        for (i = 0; i < arguments.length; i++)
        {
            if (biggest === "NULL")
            {
                biggest = arguments[i];
                console.log("her er biggest age " + biggest.age)
            }
            if (biggest.age < arguments[i].age)
            {
                biggest = arguments[i];
                console.log("Her er den nye biggest: " + biggest.age);
            }
        }
        console.log("Det største argument er: " + biggest.age)
        return biggest;
    };
    max(students);
};
console.log("Lige før opgave 7");
opgave7();

var opgave8 = function ()
{
    var day;
    switch (new Date().getDay())
    {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }
    console.log("Her er dagen: " + day);
    return day;
};
console.log("Ligefør 8");
opgave8();


var opgave9 = function ()
{
    var animal =
            {
                isMammal: true,
                isHungry: true,
                name : "goat",
                eat : function()
                {
                    this.isHungry = false;
                    console.log("Nu har dyret spist og isHungry er: " + this.isHungry);
                }
            };
                var animal =
            {
                isMammal: true,
                isHungry: true,
                name : "goat",
                eat : function()
                {
                    this.isHungry = false;
                    console.log("Nu har dyret spist og isHungry er: " + this.isHungry);
                }
            };
                var animal =
            {
                isMammal: true,
                isHungry: true,
                name : "goat",
                eat : function()
                {
                    this.isHungry = false;
                    console.log("Nu har dyret spist og isHungry er: " + this.isHungry);
                }
            };
                var animal =
            {
                isMammal: true,
                isHungry: true,
                name : "goat",
                eat : function()
                {
                    this.isHungry = false;
                    console.log("Nu har dyret spist og isHungry er: " + this.isHungry);
                }
            };
};