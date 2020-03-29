const PROTO_PATH = __dirname + '/proto/employee.proto';

const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');


let packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  });
let employee_proto = grpc.loadPackageDefinition(packageDefinition).employee;


let { paySalary } = require('./pay_salary.js');
let { generateReport } = require('./generate_report.js');

function main() {
  let server = new grpc.Server();
  server.addService(employee_proto.Employee.service, 
    { paySalary: paySalary ,
      generateReport: generateReport }
  );
  server.bind('0.0.0.0:4500', grpc.ServerCredentials.createInsecure());
  server.start();
}

main();