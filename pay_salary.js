let { employees } = require('./data.js');
const _ = require('lodash');

function paySalary(call) {
    let employeeIdList = call.request.employeeIdList;
  
    _.each(employeeIdList, function (employeeId) {
      let employee = _.find(employees, { id: employeeId });
      if (employee != null) {
        let responseMessage = "Salary paid for ".concat(
          employee.firstName,
          ", ",
          employee.lastName);
        call.write({ message: responseMessage });
      }
      else{
        call.write({message: "Employee with Id " + employeeId + " not found in record"});
      }
  
    });
    call.end();
  
}

exports.paySalary = paySalary;