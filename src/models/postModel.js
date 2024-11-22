import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

let conexao; // Variável para armazenar a conexão

async function obterConexao() {
  if (!conexao) {
    conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
  }
  return conexao;
}

// Função para buscar todos os posts
export async function getTodosPosts() {
  const conexao = await obterConexao();
  const db = conexao.db("instalike");
  const colecao = db.collection("posts");
  return colecao.find().toArray();
}

// Função para criar um novo post
export async function criarPost(novoPost) {
  const conexao = await obterConexao();
  const db = conexao.db("instalike");
  const colecao = db.collection("posts");
  return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
  const conexao = await obterConexao();
  const db = conexao.db("instalike");
  const colecao = db.collection("posts");
  const objID = ObjectId.createFromHexString(id);
  return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost} );
}
