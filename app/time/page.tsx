export default async function TimePage() {
  let timeStr = "Ukendt";

  try {
    const res = await fetch("https://timeapi.io/api/Time/current/zone?timeZone=Europe/Copenhagen");
    if (res.ok) {
      const data = await res.json();
      // Parse the datetime string and extract time parts
      const date = new Date(data.dateTime);
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      timeStr = `${hours}:${minutes}:${seconds}`;
    }
  } catch (error) {
    console.error("Failed to fetch time:", error);
    const date = new Date();
    timeStr = date.toLocaleTimeString("da-DK");
  }

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: "3rem" }}>
      <h1>Tiden er:</h1>
      <div style={{ fontSize: "4rem", fontWeight: "bold", color: "#333" }}>
        {timeStr}
      </div>
    </div>
  );
}