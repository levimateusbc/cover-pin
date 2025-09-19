export function isValidPhoneNumber(phone) {
  const re = /^(\+?\d{1,3}\s?)?(\(?\d{2}\)?\s?)?9?\d{4}-?\d{4}$/;
  return re.test(phone);
}
