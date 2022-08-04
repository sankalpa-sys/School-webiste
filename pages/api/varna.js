import dbConnect from "../../middlewares/dbConnect";
import Varna from "../../models/Varna";

const handler =  async(req, res) => {
    await dbConnect();

    if (req.method === 'POST') {
        const newVerna = new Varna({
            class: req.body.class,
            deadline: req.body.deadline,
        })
        try {
            const savedVerna = await newVerna.save();
            res.status(200).send(savedVerna);
        } catch (error) {
            res.status(400).send(error)
        }
        
      } else if(req.method === 'GET') {
       try {
         const varnas = await Varna.find(); 
         res.status(200).send(varnas);
       } catch (error) {
        res.status(400).send(error)
       }
      }else if(req.method === 'DELETE'){
        try {
           await Varna.remove({})
            res.status(200).send("varna removed")
        } catch (error) {
            res.status(400).send(error)
        }
      }
}

export default handler