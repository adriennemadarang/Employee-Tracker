const viewDepartments = async () => {
    console.log("inside Departments");
    const query = "SELECT * FROM departments";

    const [rows] = await connection.promise().query(query);
    console.log(rows);
    return rows;
};

const viewRoles = async () => {
    console.log("Inside Roles");
    const query = "SELECT * FROM roles;";
    const [rows] = await connection.promise().query(query);
    console.table(rows);
    return rows;
    };

    const viewEmployees = async () => {
        console.log("Inside Employees");
        const query = "SELECT * FROM employees;";
        const [rows] = await connection.promise().query(query);
        console.table(rows);
        return rows;
    };


    module.exports = {};