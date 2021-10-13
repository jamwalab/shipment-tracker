import serverApiCall from "./shipmentData";

export const allShipments = async () => {
  await serverApiCall.getAllShipments().then(resp => {
    console.log(resp.json());
    return resp.json();
  })
}