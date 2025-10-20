const accountId="12345";
let accountEmail="binaykumarjena2005@gmail.com";
var accountPassword="Binay@2005";
accountCity="Bhubaneswar";


// accountId="67890";
//   not allowed

accountEmail="binaykumar2005jena@gmail.com";
accountPassword="NewPassword@123";
accountCity="Cuttack";

console.log(accountId);

// prefer not to use var
//  beacause of issue in block scope and functional scope

console.table([accountId,accountEmail,accountPassword,accountCity]);