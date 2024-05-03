let servers = [
   { id: '1', name: 'AWS', status: 'working' },
   { id: '2', name: 'AWS2', status: 'working' },
   { id: '3', name: 'AWS3', status: 'working' },
   {id:'4', name:'AWS4', status:'pending'}
]


module.exports = [
   getAll=(req, res) => {
      res.status(200).json(servers);
   },
   create = (req, res) => {
      console.log(req.body);
      res.status(201).json({})
   }
]