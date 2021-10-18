import axios from "axios";

//---AXIOS SETUP---//
const http = axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    "Content-type": "application/json"
  }
});

class serverApiCall {
  //---GET ALL SHIPMENTS---//
  async getAllShipments() {
    //return await fetch(`http://localhost:3001/api/shipment`).then(resp => {
      //return resp.json();
    //})
    return await http.get("/shipment").then(resp => {
      console.log(resp)
      return resp.data
    }).then( async (response) => {
      return await response.map(eachShip => {
        return {
          "id": eachShip.id,
          "carrier_name": eachShip.carrier.carrier_name,
          "customer": eachShip.customer.customer_name,
          "container": eachShip.container,
          "destEta": eachShip.destEta,
          "portEta": eachShip.portEta,
          "status": eachShip.status.status_text,
          "sublocation": eachShip.sublocation.sublocation_code,
          "submitted": eachShip.submitted,
          "user": eachShip.user.username,
          "bl": eachShip.bl,
          "po": eachShip.po,
          "notes": eachShip.notes,
          "job": eachShip.job,
          "port": eachShip.port,
          "release": eachShip.release,
          "addComment": eachShip.comment,
          "comment": eachShip.comment? "Y" : "N",
        }
      })
    })
  }

  //---EDIT A SHIPMENT (PUT REQUEST)---//
  async editShipments(dataUpdate, id) {
    //console.log(dataUpdate, id)
    return await http.put(`/shipment/${id}`, dataUpdate)
  }

  //---GET ALL CUSTOMERS---//
  async getAllCustomers() {
    return await http.get("/customer").then(resp => {
      console.log(resp)
      return resp.data
    }).then( async (response) => {
      return await response.map(eachCustomer => {
        return {
          "id": eachCustomer.id,
          "customer_name": eachCustomer.customer_name
        }
      })
    })
  }
}

export default new serverApiCall();