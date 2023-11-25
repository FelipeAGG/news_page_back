// models/Article.js
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  id: { type: Number, require: true},
  title: { type: String, required: true },
  text: { type: String, required: true },
  author: { type: String, required: true },
  type: { type: String, require: true },
  img: { type: String, require: true },
  date: { type: Date, default: Date.now },
})

const Article = mongoose.model('news_notes', articleSchema);

module.exports = Article;