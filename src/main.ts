import axios from "axios";
import "./style.css";

// const vat = document.getElementById("vatEuNumber");
// const country = document.getElementById("country-select");
const form = document.getElementById("form") as HTMLFormElement;

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  console.log("formData", Array.from(formData.entries()));
  const data = Object.fromEntries(formData.entries()) as Record<
    string,
    string | string[]
  >;

  const registration: Record<string, any> = await axios.post(
    "http://localhost:3000/registrations",
    data
  );
  console.log(registration.data);
  alert(`Successfully registered! Your user id is:${registration.data.id}`);
});
