const { UsersService } = require("../services");
module.exports = class UsersController {
  static login(req, res) {
    try{
      const { email, password } = req.body;
      const user = UsersService.pegaUmUsuario({email, password});
      if(!user) throw new Error('Email ou senha inválidos.')
      const token = UsersService.criaUmToken({email});
      res.cookie('token', token, {maxAge: 604800, httpOnly: false, secure: true})
      res.location('http://localhost:4200/chat');
      res.end();
    }catch(error){
      res.status(404).jsonp({message:error.message})
    }
   
  }
};
