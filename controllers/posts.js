import { PostModel } from '../models/PostModel.js';

export const getPosts = async (req, res) => {
  try {
    const post = new PostModel({
      title: 'test',
      content: 'test2',
    });
    post.save();

    // find() : trả về tất cả các bài post
    const posts = await PostModel.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createPost = (req, res) => {
  res.send('router success');
};
