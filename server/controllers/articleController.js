const Article = require('../models/article')
const User = require('../models/user')

class articleController{

    static addArticle(req, res){
        console.log(req.file.cloudStoragePublicUrl)
        // console.log(req.file, '][][][][][][][')
        console.log(req.currentUserid._id)
        let published = true 
        if(req.body.publish === 'false') {
            published = false
        }
        const userid = req.currentUserid._id
        const obj = {
            title: req.body.title,
            desc: req.body.desc,
            author: userid,
            paragraf: req.body.paragraf,
            publish: published,
            img: req.file.cloudStoragePublicUrl
        }

        // console.log(obj)
        
        Article.create(
            obj
        )
        .then(data => {
            console.log(data, 'ini data udah jadi yey');
            
            res.status(200).json({ data })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
        
    }

    static delete(req, res){

        let pk = req.params.id
        // console.log(pk, 'primareey')

        Article.deleteOne(
            {_id: pk}
        )
        .then(data => {
            console.log(data);
            
            res.status(200).json({ data })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
    }

    static update (req,res){

            // let pk = req.currentUserId
            let pr = req.params.id
            const obj = {
                title: req.body.title,
                desc: req.body.desc,
                paragraf: req.body.paragraf,
                publish: req.body.publish,
                img: req.body.img
            }
    
            // console.log(obj)
            
            Article.updateOne({_id: pr},
                obj
            )
            .then(data => {
                console.log(data);
                
                res.status(200).json({ data })
            })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    }

    static addImg(req, res){

        let pr = req.params.id

        console.log(req.file.cloudStoragePublicUrl);
        let obj={
            img: req.file.cloudStoragePublicUrl
        }

        Article.updateOne({_id: pr},
            obj
        )
        .then(data => {
            console.log(data);
            
            res.status(200).json({ 
                status: 200,
                message: 'Your file is successfully uploaded',
                link: req.file.cloudStoragePublicUrl,
                data
             })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
    }

    static getmyarticle (req, res){
        let pk = req.currentUserid._id
        console.log(pk)

        Article.find({ author: pk}).populate({ path: 'author', select: 'name -_id' })
        .then(data => {
            // const result = data.filter(el => el.publish == true);
            console.log(data);
            res.status(200).json(data)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })

    }

    static getarticles(req, res){
        // let pk = req.currentUserid._id
        // console.log(pk)

        Article.find({ publish: true}).populate({ path: 'author', select: 'name -_id' })
        .then(data => {
            // const result = data.filter(el => el.publish == true);
            console.log(data);
            res.status(200).json(data)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
    }
    static readarticle(req, res){
        Article.find({ _id: req.params.id}).populate({ path: 'author', select: 'name -_id' })
        .then(data => {
            console.log(data);
            res.status(200).json(data)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
    }
    
}

module.exports = articleController