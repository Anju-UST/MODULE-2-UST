var Employee = /** @class */ (function () {
    function Employee(empno, ename, sal, attendance) {
        this.empno = empno;
        this.ename = ename;
        this.sal = sal;
        this.attendance = attendance;
    }
    // constructor(){
    //     this.empno=101;
    //     this.ename="abc";
    //     this.sal=20000;
    //     this.attendance=18;
    // }
    Employee.prototype.print = function () {
        console.log(this.empno, this.sal, this.ename, this.attendance);
    };
    return Employee;
}());
// var emp =new Employee();
// var emp1=new Employee();
// emp1.empno=102;
// var emp2=new Employee();
// emp2.empno=103;
// emp.print();
// emp1.print();
// emp2.print();
var emp3 = new Employee(104, "mark", 76000, 14);
emp3.print();
var emp4 = new Employee(105, "john", 56888, 13);
emp4.print();
var emp5 = new Employee(106, "jacob", 87666, 13);
emp5.print();
