const multer = require("multer")

const armazenamento = multer.diskStorage(
    {
        destination:(req,file,cb)=>{
            cb(null,'./uploads/')
        },
        filename:(req,file,cb)=>{
            cb(null,Date.now()+file.originalname)
        }
    }
)

var giovanni = 100000 

var upload = multer({
    storage:armazenamento, 
    fileFilter:(req,file,cb)=>{
        const isAccepted = ['image/png', 'image/jpg', 'image/jpeg'].find( formatoAceito => formatoAceito == file.mimetype );
        if(isAccepted){
            cb(null,true)
        }else{
            cb(null,false)
            return cb(new Error('Tipo de arquivo invalido'))
        }
    },
    limits:{fileSize:giovanni},

}).single("imagem")

module.exports = upload

