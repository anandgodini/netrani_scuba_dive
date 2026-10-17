import { POST } from "../src/app/api/booking/route.ts";

async function testApi() {
  console.log("=== TESTING API ROUTE /api/booking ===");

  const futureDate = "2026-11-20";

  // Test 1: Valid payload
  console.log("\n[Test 1] Valid submission:");
  const validReq = new Request("http://localhost:3000/api/booking", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fullName: "Ananya Iyer",
      phone: "+91 98450 12345",
      package: "Netrani Scuba Diving Package - ₹3,500",
      email: "ananya.iyer@example.com",
      session: "Day",
      bookingDate: futureDate,
    }),
  });
  const res1 = await POST(validReq);
  const data1 = await res1.json();
  console.log("  Status:", res1.status);
  console.log("  Success:", data1.success);
  console.log("  Customer:", data1.booking?.fullName);
  console.log("  Recipient:", data1.recipient);
  if (res1.status !== 200 || !data1.success) throw new Error("Valid request failed!");
  console.log("  ✓ Valid submission accepted.");

  // Test 2: Invalid Phone
  console.log("\n[Test 2] Invalid phone rejection:");
  const invalidPhoneReq = new Request("http://localhost:3000/api/booking", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fullName: "Ananya Iyer",
      phone: "12345",
      package: "Netrani Scuba Diving Package - ₹3,500",
      email: "ananya.iyer@example.com",
      session: "Day",
      bookingDate: futureDate,
    }),
  });
  const res2 = await POST(invalidPhoneReq);
  const data2 = await res2.json();
  console.log("  Status:", res2.status, "(Expected 400)");
  console.log("  Error message:", data2.error);
  if (res2.status !== 400 || !data2.error.includes("phone")) throw new Error("Invalid phone was not caught!");
  console.log("  ✓ Invalid phone rejected.");

  // Test 3: Past Date
  console.log("\n[Test 3] Past date rejection:");
  const pastDateReq = new Request("http://localhost:3000/api/booking", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fullName: "Ananya Iyer",
      phone: "+91 98450 12345",
      package: "Netrani Scuba Diving Package - ₹3,500",
      email: "ananya.iyer@example.com",
      session: "Day",
      bookingDate: "2020-01-01",
    }),
  });
  const res3 = await POST(pastDateReq);
  const data3 = await res3.json();
  console.log("  Status:", res3.status, "(Expected 400)");
  console.log("  Error message:", data3.error);
  if (res3.status !== 400 || !data3.error.includes("past")) throw new Error("Past date was not caught!");
  console.log("  ✓ Past date rejected.");

  // Test 4: Invalid Email
  console.log("\n[Test 4] Invalid email rejection:");
  const invalidEmailReq = new Request("http://localhost:3000/api/booking", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fullName: "Ananya Iyer",
      phone: "+91 98450 12345",
      package: "Netrani Scuba Diving Package - ₹3,500",
      email: "not-an-email",
      session: "Day",
      bookingDate: futureDate,
    }),
  });
  const res4 = await POST(invalidEmailReq);
  const data4 = await res4.json();
  console.log("  Status:", res4.status, "(Expected 400)");
  console.log("  Error message:", data4.error);
  if (res4.status !== 400 || !data4.error.includes("email")) throw new Error("Invalid email was not caught!");
  console.log("  ✓ Invalid email rejected.");

  // Test 5: Invalid Package
  console.log("\n[Test 5] Invalid package rejection:");
  const invalidPkgReq = new Request("http://localhost:3000/api/booking", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fullName: "Ananya Iyer",
      phone: "+91 98450 12345",
      package: "Random Unknown Package",
      email: "ananya.iyer@example.com",
      session: "Day",
      bookingDate: futureDate,
    }),
  });
  const res5 = await POST(invalidPkgReq);
  const data5 = await res5.json();
  console.log("  Status:", res5.status, "(Expected 400)");
  console.log("  Error message:", data5.error);
  if (res5.status !== 400 || !data5.error.includes("package")) throw new Error("Invalid package was not caught!");
  console.log("  ✓ Invalid package rejected.");

  console.log("\n=== ALL API VALIDATION & HANDLING CHECKS PASSED ===");
}

testApi().catch((err) => {
  console.error("API test failed:", err);
  process.exit(1);
});
