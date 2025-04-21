export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { customer, cart, total } = req.body;

    // Simulate order processing (you'd save this in a database)
    console.log("New Order:", { customer, cart, total });

    // Normally, you'd integrate Stripe or another payment processor here

    return res.status(200).json({ message: "Order placed successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
