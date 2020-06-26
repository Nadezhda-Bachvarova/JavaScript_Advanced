class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        //валидация на параметрите
        this._validateParam(username);
        this._validateParam(salary);
        this._validateParam(position);
        this._validateParam(department);
        //валидация на заплатата
        if (salary < 0) {
            throw new Error('Invalid input!');
        }
        //oткриваме референция към отдела по даденото име
        let current = this.departments.find(d => d.name === department);

        //ако отдела не съществува, да се създаде
        if (current === undefined) {
            current = {
                name: department,
                employees: []
            };
            this.departments.push(current);   
        }
        //добавяме работника към отдела
        current.employees.push({
            username,
            salary,
            position
        });

        return `New employee is hired. Name: ${username}. Position: ${position}`; 
    }

    bestDepartment() {
        //сортираме отделите по средна заплата, правим копие с мап на съществуващия департмент
        const departments = this.departments.map(d => {
            const dep = {
                //правим копие на иметео на департмент/длъжността и копие на имената на работниците със слайс
                name:d.name,
                employees:d.employees.slice(),
            };
            let total = 0;
            for (let employee of dep.employees) {
                total += employee.salary;
            }
            dep.averageSalary = total / dep.employees.length;

            return dep;
        });

        departments.sort((a, b) => b.averageSalary - a.averageSalary);
        //взимаме първия
        const best = departments[0];
        if (best !== undefined) {
            //сортираме масива работници по заплата и име
            best.employees.sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));
            //връщаме оформения низ
            const result = [
                `Best Department is: ${best.name}`,
                `Average salary: ${best.averageSalary.toFixed(2)}`,
            ];
            best.employees.forEach(e => result.push(`${e.username} ${e.salary} ${e.position}`));
            return result.join('\n');
        }
    }

    _validateParam(param) {
        if (param === '' || param === undefined || param === null) {
            throw new Error('Ivalid input!');
        }
    }
}



let c = new Company(); 
c.addEmployee("Stanimir", 2000, "engineer", "Construction"); 
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction"); 
c.addEmployee("Slavi", 500, "dyer", "Construction"); 
c.addEmployee("Stan", 2000, "architect", "Construction"); 
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing"); 
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing"); 
c.addEmployee("Gosho", 1350, "HR", "Human resources"); 
console.log(c.bestDepartment());