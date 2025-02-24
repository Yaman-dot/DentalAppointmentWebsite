import Doctor from '../models/doctorModel.js' // Import the Doctor model
import validator from 'validator' // Import the validator package
import bcrypt from 'bcrypt' // Import the bcryptjs package
import cloudinary from 'cloudinary' // Import the cloudinary package
import doctorSchema from '../models/doctorModel.js' // Import the Doctor model
import jwt from 'jsonwebtoken'
const addDoctor = async (req, res) => {
  try {
    const { name, email, password, speciality, degree, experience, about,  fees, address } = req.body;
    const imageFile = req.file;

    console.log({ name, email, password, speciality, degree, experience, about,  fees, address }, imageFile);

 

    //check if all the required fields are present
    if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
        return res.json({success:false,message:"MissingDetails"});
    } 
    // make sure that email is in the correct format
    if (!validator.isEmail(email)) {
        return res.json({success:false,message:"Please enter a valid email"});
    }
    // making sure that the password is atleast 8 characters long
    if (password.length < 8) {
        return res.json({success:false,message:"Password must be atleast 8 characters long"});
    }

    // hashing doctor password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    

    //upload an image to the cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: 'image'});
    const imageUrl = imageUpload.secure_url;

    const doctorData = {
        name,
        email,
        image: imageUrl,
        password: hashedPassword,
        speciality,
        degree,
        experience,
        about,
        fees,
        address: JSON.parse(address),
        date:Date.now()

    }

    const newDoctor = new doctorSchema(doctorData);
    await newDoctor.save();

    res.status(201).json({ message: 'Doctor added successfully', doctor: newDoctor });
  } catch (error) {
    console.error('Error details:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}

// API for admin login
const loginAdmin = async (req, res) => 
{
    try {
        const { email, password } = req.body;
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            res.status(200).json({ success:true, message: 'Admin logged in successfully', token });
        }else{
            res.status(400).json({success:false, message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error details:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}
export { addDoctor, loginAdmin };