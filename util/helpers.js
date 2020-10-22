export const toTitleCase = (str, full = true) =>
  (full ? str.toLowerCase() : str).replace(/^(.)|\s(.)/g, $1 =>
    $1.toUpperCase(),
  );

export default toTitleCase;
