import dbConnect from "../../middlewares/dbConnect";
import Blog from "../../models/Blog";

const handler =  async(req, res) => {
    await dbConnect();

    if (req.method === 'POST') {
        const newBlog = new Blog({
            title: req.body.title,
            content: req.body.content,
            thumbnail: req.body.thumbnail,
            author: req.body.author,
            grade: req.body.grade,
            post: req.body.post
        })
        try {
            const savedBlog = await newBlog.save();
            res.status(200).send(savedBlog);
        } catch (error) {
            res.status(400).send(error)
        }
        
      } else {
       try {
         const blogs = await Blog.find(); 
         res.status(200).send(blogs);
       } catch (error) {
        res.status(400).send(error)
       }
      }
}

export default handler