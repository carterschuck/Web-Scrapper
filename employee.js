var employeePromise = d3.csv("csv/employee.csv")


var successFCN = function(employees)
{
    console.log("employees",employees);
    drawTable(employees)
}

var failFCN = function(error)
{
    console.log("error",error);
}

var firstName = function(employees)
{
    return employees.firstName
    var firstNames = employees.map(firstName)
    return firstNames
}

var lastName = function(employees)
{
    return employees.lastName
    var lastNames = employees.map(lastName)
    return lastNames
}

var title = function(employees)
{
    return employees.title
    var titles = employes.map(title)
    return titles
}

var emailAddress = function(employees)
{
    return employees.emailAddress
    var emails = employees.map(emailAddress)
    return emails
}
var drawTable = function(employees)
{

    var rows = d3.select("table tbody")
        .selectAll("tr")
        .data(employees)
        .enter()
        .append("tr")

    rows.append("td")
        .text(firstName);

    rows.append("td")
        .text(lastName);

    rows.append("td")
        .text(title);

    rows.append("td")
        .text(emailAddress);    


}

employeePromise.then(successFCN,failFCN); 