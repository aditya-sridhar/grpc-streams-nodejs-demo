const PROTO_PATH = __dirname + '/proto/employee.proto';

const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

let packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
let employee_proto = grpc.loadPackageDefinition(packageDefinition).employee;

function main() {
  let client = new employee_proto.Employee('localhost:4500',
                                       grpc.credentials.createInsecure());
                                       
  let employeeIdList = [1,10,2];
  let call = client.paySalary({employeeIdList: employeeIdList});

  call.on('data',function(response){
    console.log(response.message);
  });

  call.on('end',function(){
    console.log('All Salaries have been paid');
  });

}

main();