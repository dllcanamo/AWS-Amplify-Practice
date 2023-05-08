import { API } from "aws-amplify";

function saveDataToDynamo(dataToPass) {
    const body = {
        body: {
            action: 'POST',
            data: {
                uuid: 'abc123',
                datetime: 'date123',
                description: 'label',
                path_to_img: 'path/to/img'
            }
        }
    }

    API.post('reportsapi', '/reports', body)
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

function getDataFromDynamo(data) {
    API.get('reportsapi', '/reports')
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

export { saveDataToDynamo, getDataFromDynamo };