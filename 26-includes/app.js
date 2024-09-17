const roles = ["ADMIN", "OPERATOR", "BILLING"];

const userRole = "OPERATOR";

const roleFound = roles.includes(userRole);

if (roleFound === true) {
  console.log("Role found");
} else {
  console.log("Role don't found");
}
