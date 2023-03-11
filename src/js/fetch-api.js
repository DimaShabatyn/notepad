const URL = 'https://640c4f27a3e07380e8f1362e.mockapi.io/';

//отримали дані з api
function getData() {
  return fetch(`${URL}notes`)
    .then(res => res.json())
    .catch(err => err.json());
}

function addData(data) {
  const optionsPOST = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };
  return fetch(`${URL}notes`, optionsPOST)
    .then(res => res.json())
    .catch(err => err.json());
}

function deleteData(id) {
  const optionsDELETE = {
    method: 'DELETE',
  };
  return fetch(`${URL}notes/${id}`, optionsDELETE)
    .then(res => res.json())
    .catch(err => err.json());
}
export default { getData, addData, deleteData };
