const database = require('../models');

class PessoaController {
    static async pegaTodasAsPessoas(req, res){
        try {
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async pegaUmaPessoa(req, res){
        try {
            const umaPessoa = await database.Pessoas.findByPk( req.params.id )
            return res.status(200).json(umaPessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaPessoa(req, res){
        try {
            const novaPessoaCriada = await database.Pessoas.create(req.body)
            return res.status(200).json(novaPessoaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaPessoa(req,res){
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Pessoas.update(novasInfos, { where: {id: Number(id)}}
            )
            const pessoaAtualizada = await database.Pessoas.findOne( { where: { id: Number(id)}})
            return res.status(200).json(pessoaAtualizada)
            // const pessoa = await database.Pessoas.findByPk(req.params.id)
            // pessoa = await pessoa.update(req.body)
            // return res.status(200).json(pessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaPessoa(req, res){
        const { id } = req.params
        try {
            await database.Pessoas.destroy({ where: { id: Number(id)}})
            return res.status(200).json({ mensagem: `id ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaMatricula(req, res){
        const { estudanteId, matriculaId} = req.params
        try {
            const umaMatricula = await database.Matriculas.findOne( 
                {
                    where: {
                        id: Number(matriculaId),
                        estudante_id: Number(estudanteId)
                    }
                }
            )
            return res.status(200).json(umaMatricula)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaMatricula(req, res){
        const { estudanteId } = req.params
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }
        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(novaMatriculaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}
module.exports = PessoaController;