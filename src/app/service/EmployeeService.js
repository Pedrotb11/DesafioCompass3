const EmployeeRepository = require('../repository/EmployeeRepository')

class EmployeeService {
    async create(payload) {
        const data = await EmployeeRepository.create(payload);
        const employee = this.formatCPF(data)
        return employee;
    }

    async find(name, office){
        let data = {}
        if (typeof name === 'undefined' && office === 'undefined'){
            data = await EmployeeRepository.findall()
        } else {
            const ObjectName = this.validateName(name)
            const ObjectOffice = this.validateOffice(office)
            const object = Object.assign({}, ObjectName, ObjectOffice)
            data = await EmployeeRepository.find(object)
        } 
        
        const newData = data.map(employee => this.formatCPF(employee))
        return newData

    } 
}

module.exports = new EmployeeService();