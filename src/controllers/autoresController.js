import autores from "../models/Autor.js";

class AutorController {

  static listarAutores = (req, res) => {
    /* 	#swagger.tags = ['Autores']
        #swagger.description = 'Endpoint to get all authors' */

    autores.find((err, autores) => {
      res.status(200).json(autores)
  })
  }

  static listarAutorPorId = (req, res) => {
    /* 	#swagger.tags = ['Autores']
        #swagger.description = 'Endpoint to get author by id' */

    const id = req.params.id;

    autores.findById(id, (err, autores) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id do Autor não localizado.`})
      } else {
        res.status(200).send(autores);
      }
    })
  }

  static cadastrarAutor = (req, res) => {
    /* 	#swagger.tags = ['Autores']
            #swagger.description = 'Endpoint to insert new author' */

    let autor = new autores(req.body);

    autor.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar Autor.`})
      } else {
        res.status(201).send(autor.toJSON())
      }
    })
  }

  static atualizarAutor = (req, res) => {
    /* 	#swagger.tags = ['Autores']
            #swagger.description = 'Endpoint to update informations about the author' */  

    const id = req.params.id;

    autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Autor atualizado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirAutor = (req, res) => {
    /* 	#swagger.tags = ['Autores']
            #swagger.description = 'Endpoint to remove the author' */  

    const id = req.params.id;

    autores.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Autor removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

}

export default AutorController