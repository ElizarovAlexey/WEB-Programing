let employee = [];

async function loadEmployees() {
    let respone = await fetch('http://localhost:3000/employee');
    employee = await respone.json();
}

const printEmployees = (employee) => {
    let employeeBlock = document.getElementById('employees');

    let content = `
        <div class="container">
            <p><strong>Личная информация:</strong></p>
            <p>ФИО: ${employee.personalInfo.fullName}</p>
            <p>Дата рождения: ${employee.personalInfo.birthDay}</p>
            <p>Пол: ${employee.personalInfo.gender}</p>
            <p>Место рождения: ${employee.personalInfo.birthPlace}</p>
            <p>Email: ${employee.personalInfo.email}</p>
            <p>IDNP: ${employee.personalInfo.IDNP}</p>
            <p>Телефон: ${employee.personalInfo.phone}</p>
            <p>Домашний телефон: ${employee.personalInfo.homePhone}</p>
            <p><strong>Служебная информация:</strong></p>
            <p>Должность: ${employee.workingInfo.post}</p>
            <p>Отдел: ${employee.workingInfo.department}</p>
            <p>Первый рабочий день: ${employee.workingInfo.firstWorkingDay}</p>
            <p>Опыт работы: ${employee.workingInfo.workExperience}</p>
            <p>Зарплата: ${employee.workingInfo.salary}</p>
            <p>График работы: ${employee.workingInfo.workSchedule}</p>
        </div>
        `;

    employeeBlock.innerHTML = content;
}

async function main() {
    await loadEmployees();
    printEmployees(employee);
}

main();

// https://jsoneditoronline.org/#right=local.gupube&left=local.qufexo