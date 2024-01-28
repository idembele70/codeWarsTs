function toBase64(str: string): string {
  // Encode this string to Base64
  return btoa(str)
}
function fromBase64(str: string): string {
  return atob(str)
}
console.log(toBase64("this is a string!!"))
console.log(fromBase64("dGhpcyBpcyBhIHN0cmluZyEh"))