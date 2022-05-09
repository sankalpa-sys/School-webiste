import dbConnect from "../../middlewares/dbConnect";
import Contact from "../../models/Contact";

const handler =  async(req, res) => {
    await dbConnect();

    if (req.method === 'POST') {
        const newContact = new Contact({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        })
        try {
            const savedContact = await newContact.save();
            res.status(200).send(savedContact);
        } catch (error) {
            res.status(400).send(error)
        }
        
      } else {
       try {
         const contacts = await Contact.find(); 
         res.status(200).send(contacts);
       } catch (error) {
        res.status(400).send(error)
       }
      }
}

export default handler