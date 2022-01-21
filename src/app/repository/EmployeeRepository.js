const EmployeeSchema = require('../schema/EmployeeSchema');

class EmployeeRepository {
    async create(payload) {
        return EmployeeSchema.create(payload);
    }

    async findall() {
        return EmployeeSchema.find();
    }
    
}
module.exports = new EmployeeRepository();