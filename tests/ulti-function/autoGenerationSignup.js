export const autoGenerationSignup ={
  //first name
  firstName : "Yuchhay",
  
  //Last name
  generateLastName: function(){
    const randomNumber = Math.floor(Math.random() * 10000);
    return `automate${randomNumber}`;
  },

  //email auto generation
  emailAutoGenerate : function(){
    const randomNumber = Math.floor(Math.random() * 10000);
    let email = `YuchhayAutomate${randomNumber}@mailinator.com`;
    return email;
  },
  
  //password auto generation
  passwordAutoGenerate: function(){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const specialCharacters = '!@#$%^&*()_+{}:"<>?|[];\',./`~';
    let password = '';
    // Ensure at least one capital letter
    password += characters.charAt(Math.floor(Math.random() * 26)); 

    // Ensure at least one number
    password += characters.charAt(52 + Math.floor(Math.random() * 10)); 

    // Ensure at least one special character
    password += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length)); 
    
    // Generate the rest of the password
    for (let i = 3; i < 8; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
  }
  
  
};