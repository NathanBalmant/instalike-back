import express from "express";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost} from "../controller/postsController.js";
import multer from "multer";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname);
  }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
    
    // Configura o Express para entender requisições no formato JSON.
    app.use(express.json());
    app.use(cors(corsOptions));
    // Define a rota GET "/posts" que retorna todos os posts do banco de dados.
    app.get("/posts", listarPosts );
    // Rota para criar um post
    
    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImagem);
    app.put("/upload/:id", atualizarNovoPost);
    
}


  export default routes;