"use server"

export async function saveMessage(formData) {
  const msg = formData.get("message");
  console.log("Besked modtaget:", msg);
}