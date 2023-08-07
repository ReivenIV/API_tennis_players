
const API_URL = process.env.API_URL;
const axios = require("axios");

// --------------------------------
//    Statistics tests end-to-end
// --------------------------------

test("test GET/statistics/all", async () => {
  // Get test
  const url = `${API_URL}/api/v1/statistics/all`;
  const resGet = await axios.get(url);
  expect(resGet.status).toBe(200);
  expect(resGet.data[0].avg_imc).toBe(23.358)
});

test("test GET/statistics/by_sex_type/M", async () => {
  // Get test
  const url = `${API_URL}/api/v1/statistics/by_sex_type/M`;
  const resGet = await axios.get(url);
  expect(resGet.status).toBe(200);
  expect(resGet.data.avg_imc).toBe(23.886)
});

