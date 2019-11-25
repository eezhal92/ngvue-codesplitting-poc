export function getUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        'Alex',
        'John',
        'Sandy'
      ]);
    }, 500);
  });
}
