const viewDepartments = async () => {
    console.log("inside viewDepartments");
    const query = "SELECT * FROM departments";

    const [rows] = await createConnection.promise().query(query);
    console.log(rows);
    return rows;
};