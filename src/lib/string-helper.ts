export const writeInCase = (typeCase: "camel" | "snake", str: string): string => {
   if (!typeCase) {
     typeCase = "camel";
   }
 
   switch (typeCase) {
     case "snake":
       return str.replaceAll(" ", "_").toLowerCase();
     default:
       return str.split(" ")
        .map((txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase())
        .join("");
   }
 };

 export const formatCurency = (amount : number | bigint | string) : string => {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD'
  }).format(Number(amount))
 }