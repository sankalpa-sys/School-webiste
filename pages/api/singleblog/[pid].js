import dbConnect from "../../../middlewares/dbConnect";
import Blog from "../../../models/Blog";

const handler  =  async(req, res) => {
    const { pid } = req.query;

    await dbConnect();

    if (req.method === 'GET') {
        try {
            const blog = await Blog.findById(pid);
            res.status(200).send(blog);
          } catch (error) {
           res.status(400).send(error)
          }
      }
}

export default handler