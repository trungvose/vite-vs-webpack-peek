export function greet(name = 'CityJS') {
  const message = 'Hello, ' + name
  document.getElementById('greeting').textContent = message
  console.log(message)
}
