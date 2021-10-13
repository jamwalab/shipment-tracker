import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    "Content-type": "application/json"
  }
});

class serverApiCall {
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
}

export default new serverApiCall();