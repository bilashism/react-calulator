export const APP_NAME = ``;
export const APP_SERVER = `${
  import.meta.env?.VITE_APP_SERVER || `http://localhost:5000`
}`;

export const integerFormatter = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0
});
