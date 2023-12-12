function printIngredient(quantity: string, ingredient: string, extra?: string) {
  console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : " "}`);
}

printIngredient("12", "flour", "somtinh");

interface User {
  id: string;
  info?: {
    email?: string;
  };
}

function getEmailEasy(user: User): string {
  return user?.info?.email ?? " ";
}

function addWithCallback(x: number, y: number, callback?: () => void) {
  callback?.();
}

console.log(getEmailEasy({ id: "123" }));
