const assert = require("node:assert/strict");
const { after, before, test } = require("node:test");
const { createServer } = require("./server.js");
const validation = require("./contact-validation.js");

let server;
let baseUrl;

before(async () => {
  server = createServer(() => ({
    date: "2026-10-29",
    minuteOfDay: 19 * 60 + 20,
    second: 0,
  }));
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
  const closed = new Promise((resolve, reject) =>
    server.close((error) => (error ? reject(error) : resolve())),
  );
  server.closeAllConnections?.();
  await closed;
});

const postEnquiry = (type, data) =>
  fetch(`${baseUrl}/api/enquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, data }),
  });

test("rejects a one-character name and a nine-digit phone", async () => {
  const response = await postEnquiry("catering", {
    name: "J",
    phone: "123456789",
    email: "",
  });
  assert.equal(response.status, 422);
  assert.deepEqual((await response.json()).errors, {
    name: "Please enter your full name with at least four characters.",
    phone: "Please enter a valid 10-digit mobile number.",
  });
});

test("rejects past same-day reservation slots using IST", async () => {
  const response = await postEnquiry("reservation", {
    name: "Ramen Guest",
    phone: "9876543210",
    email: "",
    date: "2026-10-29",
    time: "7:15 PM (Dinner)",
  });
  assert.equal(response.status, 422);
  assert.equal(
    (await response.json()).errors.time,
    "This time slot has already passed. Please select a future time slot.",
  );
});

test("rejects a past reservation date", async () => {
  const response = await postEnquiry("reservation", {
    name: "Ramen Guest",
    phone: "9876543210",
    email: "",
    date: "2026-10-28",
    time: "7:15 PM (Dinner)",
  });
  assert.equal(response.status, 422);
  assert.equal(
    (await response.json()).errors.date,
    "Please select a current or future date (IST).",
  );
});

test("accepts a valid next-day 7:15 PM reservation", async () => {
  const response = await postEnquiry("reservation", {
    name: "Ramen Guest",
    phone: "9876543210",
    email: "guest@example.com",
    date: "2026-10-30",
    time: "7:15 PM (Dinner)",
  });
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { valid: true });
});

test("validates order and catering contact details through the backend", async () => {
  const [orderResponse, cateringResponse] = await Promise.all([
    postEnquiry("order", {
      name: "Order Guest",
      phone: "9876543210",
      email: "",
      pickup_time: "In 20 minutes",
    }),
    postEnquiry("catering", {
      name: "Event Host",
      phone: "9876543210",
      email: "",
    }),
  ]);
  assert.equal(orderResponse.status, 200);
  assert.equal(cateringResponse.status, 200);
});

test("interprets AM/PM values and rejects invalid phone characters", () => {
  assert.equal(validation.timeSlotInMinutes("12:00 PM (Lunch)"), 720);
  assert.equal(validation.timeSlotInMinutes("7:15 PM (Dinner)"), 1155);
  assert.equal(validation.timeSlotInMinutes("11:00 PM (Midnight Slurp)"), 1380);
  for (const phone of ["123 456789", "123456789a", "12345-7890"]) {
    assert.equal(
      validation.validateContactDetails({
        name: "Full Name",
        phone,
        email: "",
      }).phone,
      "Please enter a valid 10-digit mobile number.",
    );
  }
});
