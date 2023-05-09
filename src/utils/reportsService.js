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

    API.post('aimlReportsApi', '/reports', body)
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

async function getDataFromDynamo() {
    try {
        const response = await API.get('aimlReportsApi', '/reports')
        console.log(response);
        return response.items;
    } catch (error) {console.log(error)};
}

export { saveDataToDynamo, getDataFromDynamo };