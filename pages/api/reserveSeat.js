import dbConnect from "../../middlewares/dbConnect";
import ReserveSeat from "../../models/ReserveSeat";

const handler =  async(req, res) => {
    await dbConnect();

    if (req.method === 'POST') {
        const newSeat = new ReserveSeat({
            name: req.body.name,
            email: req.body.email,
            class: req.body.class,
            phone: req.body.phone
        })
        try {
            const savedSeat = await newSeat.save();
            res.status(200).send(savedSeat);
        } catch (error) {
            res.status(400).send(error)
        }
        
      } else {
       try {
         const creservedSeats = await ReserveSeat.find(); 
         res.status(200).send(creservedSeats);
       } catch (error) {
        res.status(400).send(error)
       }
      }
}

export default handler