
import dbConnect from "../../middlewares/dbConnect";
import Registration from "../../models/Registration";

const handler =  async(req, res) => {
    await dbConnect();

    if (req.method === 'POST') {
        const newRegistration = new Registration(req.body)
        try {
            const savedRegistration = await newRegistration.save();
            res.status(200).send(savedRegistration);
        } catch (error) {
            res.status(400).send(error)
        }
        
      } else {
       try {
         const registrations = await Registration.find(); 
         res.status(200).send(registrations);
       } catch (error) {
        res.status(400).send(error)
       }
      }
}
export default handler