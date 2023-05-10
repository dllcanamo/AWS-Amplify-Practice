import { API } from "aws-amplify";

function saveDataToDynamo(dataToPass) {
  console.log(dataToPass);
  const body = {
    body: {
      action: "POST",
      data: {
        description: "label",
        path_to_img: dataToPass,
      },
    },
  };

  API.post("aimlReportsApi", "/reports", body)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}

async function getDataFromDynamo(data) {
  console.log(data);
  const body = {
    response: true,
    queryStringParameters: {
      startingDate: data,
    },
  };

  const response = await API.get("aimlReportsApi", "/reports", body);
  return response;
}

export { saveDataToDynamo, getDataFromDynamo };
