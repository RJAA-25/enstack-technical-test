export const PASSWORD = "Testpassw0rd!";

export const LOCK = 60;

export const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const validPassword =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\*).{8,}$/;

export const priceFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
