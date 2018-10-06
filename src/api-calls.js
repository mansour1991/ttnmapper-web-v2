const host = 'http://localhost:8080'

export const getApplication = () => {
  return host + "/api/v1/application/"
}

export const getApplicationDetail = (app_id) => {

  return host + "/api/v1/application/" + app_id
}

export const getDevices = (app_id) => {
  return host + "/api/v1/application/"+app_id+ "/device/"
}


export const fetchBoundingBoxUrl = (boundingBox) => {
  return fetch(host +"/old_api/gwbbox.php", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(boundingBox)
  })
}



export const fetchGWDetails = (gatewayID) => {
  return fetch(host + '/old_api/gwdetails.php?gwaddr=' + gatewayID)
}

export const fetchGWCircles = (gatewayID) => {
  return fetch(host + '/old_api/geojson/'+gatewayID+'/circle-single.geojson')
}

export const fetchGWRadars = (gatewayID) => {
  return fetch(host + '/old_api/geojson/'+gatewayID+'/radar-single.geojson')
}




export const fetchGWDetailsList = (listOfGateways) => {
  return fetch(host +"/old_api/gwdetailslist.php", {
    method: "POST",
    //headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({"gateways": listOfGateways})
  })
}

export const fetchGWCirclesList = (listOfGateways) => {
  return fetch(host +"/old_api/gwcirclelist.php", {
    method: "POST",
    //headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({"gateways": listOfGateways})
  })
}

export const fetchGWRadarsList = (listOfGateways) => {
  return fetch(host +"/old_api/gwradarlist.php", {
    method: "POST",
    //headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({"gateways": listOfGateways})
  })
}

export const fetchGWAlphaShape = (gatewayID) => {
  return fetch(host +"/old_api/geojson/"+gatewayID+"/alphashape.geojson", {
    method: "GET"
  })
}
