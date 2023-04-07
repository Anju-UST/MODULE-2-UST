var Employee1 = /** @class */ (function () {
    function Employee1(empno, ename, sal, attendance) {
        this.empno = empno;
        this.ename = ename;
        this.sal = sal;
        this.attendance = attendance;
    }
    Employee1.prototype.getEmpno = function () {
        return this.empno;
    };
    Employee1.prototype.getEname = function () {
        return this.ename;
    };
    Employee1.prototype.getSal = function () {
        return this.sal;
    };
    Employee1.prototype.getAttendance = function () {
        return this.attendance;
    };
    Employee1.prototype.print = function () {
        console.log(this.empno, this.sal, this.ename, this.attendance);
    };
    return Employee1;
}());
var emp = new Employee1(106, "jacob", 87666, 13);
var emp1 = new Employee1(103, "jacob", 87666, 13);
var emp2 = new Employee1(105, "jacob", 87666, 13);
emp.print();
var emparray = [emp, emp1, emp2];
emparray.forEach(function (element) {
    console.log(element);
});
var Emp = /** @class */ (function () {
    function Emp(fname, mname, lname) {
        this.fname = fname;
        this.mname = mname;
        this.lname = lname;
    }
    Emp.prototype.getMname = function () {
        return this.mname;
    };
    return Emp;
}());
var e1 = new Emp('a', 'b', 'c');
console.log(e1.getMname());
