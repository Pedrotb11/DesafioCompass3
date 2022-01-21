const EmployeeService = require('../service/EmployeeService');

//POST
class EmployeeController {
    async create(req, res) {
        try {
            const data = await EmployeeService.create(req.body);
            return res.status(201).json({
                'employee_id': data.employee_id,
                'name': data.name,
                'cpf': data.cpf,
                'office': data.office,
                'birthday': data.birthday,
                'situation': data.situation,
                'createdAt': data.createdAt,
                'updatedAt': data.updatedAt
            });
        } catch (error) {
            return res.status(500).json({ error })
        }
    }

    async find(req, res) {
        try {
            const name1 = req.query.name;
            const office1 = req.query.name;
            const data = await EmployeeService.find(name1, office1);
            res.status(200).json({'employee':data})
        }catch (error) {
            return res.status(404).json(error)
        }
    }   
}

module.exports = new EmployeeController();