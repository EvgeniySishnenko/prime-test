import TableContainer from "@/components/TableContainer";
async function getData() {
  const response = await fetch("http://localhost:3000/api/trade-conditions", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function Home() {
  const tradeConditions = await getData();

  return (
    <main>
      <TableContainer tradeConditions={tradeConditions} />
    </main>
  );
}

