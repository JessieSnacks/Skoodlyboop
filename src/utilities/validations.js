export function validateText(val) {
  return val.trim() !== "";
}

export function validateEmail(val) {
  return val.trim() !== "" && /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i.test(val);
}
