const baseUrl = "http://localhost:3001";

function processServerResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getItems() {
  return fetch(`${baseUrl}/items`).then(processServerResponse);
}

function addItem(itemData) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: itemData.name,
      imageUrl: itemData.link,
      weather: itemData.temperature,
    }),
  }).then(processServerResponse);
}

function deleteItem(cardId) {
  return fetch(`${baseUrl}/items/${cardId}`, {
    method: "DELETE",
  }).then(processServerResponse);
}

export { getItems, addItem, deleteItem };
