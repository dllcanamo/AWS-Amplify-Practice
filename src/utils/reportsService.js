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

function getDataFromDynamo(data) {
  API.get("aimlReportsApi", "/reports")
    .then((response) => response)
    .catch((error) => console.log(error));
}

export { saveDataToDynamo, getDataFromDynamo };
