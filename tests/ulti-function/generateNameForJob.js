export const autoGenerationCreateJob ={
  //jobName
  generateJobName: function(){
    const randomNumber = Math.floor(Math.random() * 10000);
    return `Job automation ${randomNumber}`;
  },
  
  //code auto generation
  codeGenerate: function(){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    // Generate the rest of the password
    for (let i = 1; i < 8; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  }
  
};