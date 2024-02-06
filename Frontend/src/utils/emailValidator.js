export default function emailValidator(email = '') {
  return email.length > 4 && email.includes('@');
}