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

      else if(req.method === 'DELETE') {
          try {
                await Blog.findByIdAndDelete(pid);
                res.status(200).send("Blog deleted")
          }catch(err){
              res.status(400).send(err)
          }
      }

      else{
          try{
              const updatedBlog = await Blog.findByIdAndUpdate(pid, req.body, {new: true});
                res.status(200).send(updatedBlog);
         }catch(err){
              res.status(400).send(err)
          }
      }
}

export default handler