let employees = [];

async function loadEmployees() {
    let respone = await fetch('http://localhost:3000/employees');
    employees = await respone.json();
}

const printEmployees = () => {
    let employeesBlock = document.getElementById('employees');
    let content = '';

    employees.forEach((employee) => {
        content += `
            <div class="employee">
                <p class="title">Личная информация</p>
                <p>ФИО: ${employee.personalInfo.fullName}</p>
                <p>Дата рождения: ${employee.personalInfo.birthDay}</p>
                <p>Пол: ${employee.personalInfo.gender}</p>
                <p>Место рождения: ${employee.personalInfo.birthPlace}</p>
                <p>Email: ${employee.personalInfo.email}</p>
                <p>IDNP: ${employee.personalInfo.IDNP}</p>
                <p>Телефон: ${employee.personalInfo.phone}</p>
                <p>Домашний телефон: ${employee.personalInfo.homePhone}</p>
                <p class="title">Служебная информация:</p>
                <p>Должность: ${employee.workingInfo.post}</p>
                <p>Отдел: ${employee.workingInfo.department}</p>
                <p>Первый рабочий день: ${employee.workingInfo.firstWorkingDay}</p>
                <p>Опыт работы: ${employee.workingInfo.workExperience}</p>
                <p>Зарплата: ${employee.workingInfo.salary}</p>
                <p width="50">График работы: ${employee.workingInfo.workSchedule}</p>
            </div>
            `;
    });

    employeesBlock.innerHTML = content;
}

const calculates = () => {
    const calculatesBlock = document.getElementById('calculates');

    let sumSalaries = 0;
    let maxSalary = employees[0].workingInfo.salary;
    let minSalary = maxSalary;

    employees.forEach((employee) => {
        sumSalaries += employee.workingInfo.salary;

        if (minSalary > employee.workingInfo.salary) {
            minSalary = employee.workingInfo.salary;
        } else {
            maxSalary = employee.workingInfo.salary;
        }
    });

    let content = `
        <div class="info">
            <p><strong>Средняя зарплата:</strong> ${sumSalaries / employees.length}</p>
            <p><strong>Минимальная зарплата:</strong> ${maxSalary}</p>
            <p><strong>Максимальная зарплата:</strong> ${minSalary}</p>
            <p><strong>Сумма зарплат:</strong> ${sumSalaries}</p>
        </div>
    `;

    calculatesBlock.innerHTML = content;
}

async function main() {
    await loadEmployees();
    printEmployees();
    calculates();
}

main();

// https://jsoneditoronline.org/#right=local.gupube&left=local.qufexo