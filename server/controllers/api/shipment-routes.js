const router = require('express').Router();
const {Shipment, Carrier, Customer, Status, Port, Sublocation, User, Vessel} = require('../../models');

//----GET - FIND ALL SHIPMENTS----//
router.get('/', (req, res) => {
  Shipment.findAll({
    include: [
      {
        model: Carrier
      },
      {
        model: Customer
      },
      {
        model: Status
      },
      {
        model: Sublocation
      },
      {
        model: Port
      },
      {
        model: Vessel
      },
      {
        model: User,
        attributes: ['id', 'username']
      }
    ]
  })
  .then(dbShipmentData => res.json(dbShipmentData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

//----GET - FIND ONE SHIPMENT----//
router.get('/:id', (req, res) => {
  Shipment.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Carrier
      },
      {
        model: Customer
      },
      {
        model: Status
      },
      {
        model: Sublocation
      },
      {
        model: Port
      },
      {
        model: Vessel
      },
      {
        model: User,
        attributes: ['id', 'username']
      }
    ]
  })
  .then(dbShipmentData => {
    if(!dbShipmentData) {
      res.status(404).json({message: 'No shipment found with this id'});
      return;
    }
    res.json(dbShipmentData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

//----POST - CREATE NEW SHIPMENT----//
router.post('/', (req,res) => {
  Shipment.create({
    job: req.body.job,
    customer_id: req.body.customer_id,
    notes: req.body.notes,
    po: req.body.po,
    bl: req.body.bl,
    container: req.body.container,
    carrier_id: req.body.carrier_id,
    vessel_id: req.body.vessel_id,
    port_id: req.body.port_id,
    sublocation_id: req.body.sublocation_id,
    portEta: req.body.portEta,
    destEta: req.body.destEta,
    submitted: req.body.submitted,
    release: req.body.release,
    comment: req.body.comment,
    status_id: req.body.status_id,
    user_id: req.body.user_id,
  })
  .then(dbShipmentData => res.json(dbShipmentData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//----PUT - EDIT AND UPDATE A SHIPMENT----//
router.put('/:id', (req, res) => {
  console.log(res.body)
  Shipment.update(
    req.body,
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(dbShipmentData => {
    if(!dbShipmentData) {
      res.status(404).json({message: 'No shipment found with this id'});
      return;
    }
    res.json(dbShipmentData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//----DELETE - DELETE A SHIPMENT----//
router.delete('/:id', (req, res) => {
  Shipment.delete(
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(dbShipmentData => {
    if(!dbShipmentData) {
      res.status(404).json({message: 'No shipment found with this id'});
      return;
    }
    res.json(dbShipmentData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
})

module.exports = router;