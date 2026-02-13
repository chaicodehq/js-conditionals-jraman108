/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  
    if(typeof password !== "string"|| password.length===0){
    return "weak";
  }

  let points =0;
  let i=0;
  let j=0;
  let k=0;

  if(password.length>=8){
    points +=1;
  }

  for(let char of password){
    if(char===char.toUpperCase() && char!==char.toLowerCase()){
    i++;
  }} if(i>=1){
    points +=1;
  }

  for(let char of password){
    if(char===char.toLowerCase() && char!==char.toUpperCase()){
    j++;

  }} if(j>=1){
    points +=1;
  }

  for(let char of password){
      if(char>="0" && char<="9"){
        k++;
      }
  }if(k>=1){
    points +=1;
  }

  if(/[^a-zA-Z0-9]/.test(password)){
    points +=1;
  }



  if(points>=0 && points<=1){
    return "weak";
  } else if(points>=2 && points<=3){
    return "medium";
  } else if(points==4){
    return "strong";
  } else if(points==5){
    return "very strong";
  }



  // if(typeof password !== "string" || password.length===0){
  //   return "weak";
  // }

  // let points =0;

  // if(password.length>=8){
  //   points++;
  // }

  // if(/[A-Z]/.test(password)){
  //   points++;
  // }

  // if(/[a-z]/.test(password)){
  //   points++;
  // }

  // if(/\d/.test(password)){
  //   points++;
  // }

  // if(/[^a-zA-Z0-9]/.test(password)){
  //   points ++;
  // }

  // if(points<=1){
  //   return "weak";
  // } else if(points<=3){
  //   return "medium";
  // } else if(points===4){
  //   return "strong";
  // } else{
  //   return "very strong";
  // }

  }

