// public addEmployee(employee: Employee) {
//     console.log("add Employee");
//     var headers = new Headers();
//     headers.append('Content-Type', 'application/json; charset=utf-8');
//     console.log('add Employee : ' + JSON.stringify(employee));
     
//     this.http.post(`${this.baseUrl}AddEmployee/`, JSON.stringify(employee), { headers: headers })
//     .map(response => response.json()).subscribe(data => {
//     this.dataStore.employeeList.push(data);
//     this._employeeList.next(Object.assign({}, this.dataStore).employeeList);
//     }, error => console.log('Could not create todo.'));
//     };

//     public updateEmployee(newEmployee: Employee) {
//         console.log("update Employee");
//         var headers = new Headers();
//         headers.append('Content-Type', 'application/json; charset=utf-8');
//         console.log('Update Employee : ' + JSON.stringify(newEmployee));
         
//         this.http.put(`${this.baseUrl}UpdateEmployee/`, JSON.stringify(newEmployee), { headers: headers })
//         .map(response => response.json()).subscribe(data => {
//         alert("hi");
//         this.dataStore.employeeList.forEach((t, i) => {
//         if (t.studentId === data.id) { this.dataStore.employeeList[i] = data; }
//         });
//         }, error => console.log('Could not update todo.'));
//         };


//     public    removeItem(employeeId: number) {
//             var headers = new Headers();
//             headers.append('Content-Type', 'application/json; charset=utf-8');
//             console.log("removeItem:" + employeeId);
//             this.http.delete(`${this.baseUrl}DeleteEmployee/${employeeId}`, { headers: headers }).subscribe(response => {
//             this.dataStore.employeeList.forEach((t, i) => {
//             if (t.studentId === employeeId) { this.dataStore.employeeList.splice(i, 1); }
//             });
             
//             this._employeeList.next(Object.assign({}, this.dataStore).employeeList);
//             }, error => console.log('Could not delete Employee.'));
//             }