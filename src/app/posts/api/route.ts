export const dynamic = "force-dynamic"; // defaults to auto
export async function GET() {
  const response = await fetch(
    "https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json"
  );
  const cars = await response.json();
  return Response.json(cars);
}
