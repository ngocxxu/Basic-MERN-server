import { PostModel } from '../models/PostModel.js';

export const getPosts = async (req, res) => {
  try {
    // Cách luu data vào DB
    // const post = new PostModel({
    //   title: 'test',
    //   content: 'test',
    // });
    // post.save();

    // find() : trả về tất cả các bài post
    const posts = await PostModel.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createPost = async (req, res) => {
  try {
    // Lấy data từ phía client
    const newPost = req.body;

    // Lưu data vào DB
    const post = new PostModel(newPost);
    post.save();

    res.status(200).json(post);
  } catch (err) {}
};

export const updatePost = async (req, res) => {
  try {
    const updatePost = req.body;

    const post = await PostModel.findOneAndUpdate(
      { _id: updatePost._id },
      updatePost,
      { new: true }
    );

    res.status(200).json(post);
  } catch (err) {}
};
