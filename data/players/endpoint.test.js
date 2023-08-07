
const API_URL = process.env.API_URL;
const axios = require("axios");

// -----------------------------
//    Players tests end-to-end
// -----------------------------

test("test GET/players", async () => {
  // Get test
  const url = `${API_URL}/api/v1/players/all`;
  const resGet = await axios.get(url);
  expect(resGet.status).toBe(200);
});

test("test GET/players/{by_id}", async () => {
  // Get test
  const url = `${API_URL}/api/v1/players/by_id/17`;
  const resGet = await axios.get(url);
  expect(resGet.status).toBe(200);
  expect(resGet.data.lastname).toBe('Nadal');
});

test("test GET/players/{by_sex}", async () => {
  // Get test
  const url = `${API_URL}/api/v1/players/by_sex_type/M`;
  const resGet = await axios.get(url);
  expect(resGet.status).toBe(200);
  expect(resGet.data[0].shortname).toBe('V.WIL');
});
