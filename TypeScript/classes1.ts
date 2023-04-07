class Employee1{
    private readonly empno: number;
    private ename: string;
    private sal:number;
    private attendance:any;
    
    public getEmpno():number{
        return this.empno;
    }
    public getEname():string{
        return this.ename;
    }

    public getSal():number{
        return this.sal;
    }
    public getAttendance():number{
        return this.attendance;
    }

    print():void{
        console.log(this.empno, this.sal, this.ename, this.attendance);
    }
    constructor(empno:number, ename: string, sal:number, attendance:any){
        this.empno=empno;
        this.ename=ename;
        this.sal=sal;
        this.attendance=attendance;
    }
}

let emp=new Employee1(106,"jacob",87666, 13);
let emp1=new Employee1(103,"jacob",87666, 13);
let emp2=new Employee1(105,"jacob",87666, 13);
emp.print();

var emparray:
        Employee1[]=[emp,emp1,emp2];

        emparray.forEach(element => {
            console.log(element);
            
        });
        



    class Emp{
        private fname: string;
        private mname!:string;
        private lname: string;
    
    constructor(fname:string,mname:string ,lname:string){
        this.fname=fname;
        this.mname=mname;
        this.lname=lname;
    }
        getMname():string{
            return this.mname;
        }
    }
    let e1= new Emp('a','b','c');
    console.log(e1.getMname());



