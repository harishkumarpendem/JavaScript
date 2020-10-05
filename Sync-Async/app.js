let employees = [
  {
    id: 1,
    name: 'rajan',
    age: 40,
  },
  {
    id: 2,
    name: 'sujan',
    age: 25,
  },
];

let createEmployee = (employee) => {
  return new Promise((resolve, reject) =>{
    setTimeout(() =>{
      employees.push(employee);
      let isDone = true;
      if(isDone){
        resolve();
      }
      else{
        reject('Employee creation failed');
      }
    }, 2000);
  });
};

let getEmployees = () => {
  setTimeout(() => {
    let empRows = '';
    employees.forEach((emp) => {
      empRows += `<tr>
                            <td>${emp.id}</td>
                            <td>${emp.name}</td>
                            <td>${emp.age}</td>
                        </tr>`;
    });
    document.querySelector('#table-body').innerHTML = empRows;
  }, 1000);
};

//async, await
let init = async () => {
  let result = await createEmployee({id: 3, name : 'rambo', age : 25});
  getEmployees();
};
init();