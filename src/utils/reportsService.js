import { API } from "aws-amplify";

function saveDataToDynamo(data) {
    API.post('reportsapi', '/reports')
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

function getDataFromDynamo(data) {
    API.get('reportsapi', '/reports')
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

export { saveDataToDynamo, getDataFromDynamo };