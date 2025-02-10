import appointment_img from './appointment_img.png'
import placeHolder from './beforeafter.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import GroupPhoto from './GroupPhoto.png'
import theMan from './theMan.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'
import Dental_Implants from './Dental-Implants.jpeg'
import Tooth_Extractions from './Tooth-Extraction.jpeg'
import Braces from './Braces.png'
import Teeth_Whitening from './Teeth-Whitening.jpg'
import Root_Canal from './Root-Canal.jpg'
import Teeth_Cleaning from './Teeth-Cleaning.jpeg'
import Veneers from './Veneers.jpeg'
import Dental_Fillings from './Dental-Filling.jpeg'
import Younis from './Younis.png'
import Lumineer from './Lumineer_01.jpg'
export const assets = {
    appointment_img,
    placeHolder,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    GroupPhoto,
    theMan,
    Dental_Implants,
    Tooth_Extractions,
    Braces,
    Teeth_Whitening,
    Root_Canal,
    Teeth_Cleaning,
    Veneers,
    Dental_Fillings,
    Lumineer,
    Younis,
}

export const specialityData = [
    {
        speciality: 'Orthodontist',
        image: General_physician
    },
    {
        speciality: 'Endodontist',
        image: Gynecologist
    },
    {
        speciality: 'Periodontist',
        image: Dermatologist
    },
    {
        speciality: 'Maxillofacial',
        image: Pediatricians
    },
    {
        speciality: 'Conservative',
        image: Neurologist
    },
    {
        speciality: 'Prosthodontist',
        image: Gastroenterologist
    },
]
export const servicesData = [
    {
        id: 'teeth-cleaning',
        image: Teeth_Cleaning, // Replace with your actual image import
        title: 'Teeth Cleaning',
        short_description: 'Professional teeth cleaning to remove plaque and tartar, ensuring a healthy smile.',
        long_description: 'A professional teeth cleaning service designed to remove plaque, tartar, and surface stains, preventing gum disease and cavities. This procedure helps maintain oral hygiene and freshens breath, ensuring your smile stays bright and healthy.',
        type: 'Preventive',
        specialist: 'Periodontist',
        fee: 100,
    },
    {
        id: 'dental-fillings',
        image: Dental_Fillings,
        title: 'Dental Fillings',
        short_description: 'Restores decayed or damaged teeth with strong fillings.',
        long_description: 'Our durable dental fillings repair cavities and minor tooth damage, restoring both function and appearance. Made from high-quality materials, they blend seamlessly with your natural teeth, preventing further decay and ensuring long-lasting protection.',
        type: 'Restorative',
        specialist: 'Prosthodontist',
        fee: 150,
    },
    {
        id: 'veneers',
        image: Veneers,
        title: 'Veneers',
        short_description: 'Restores decayed or damaged teeth with strong fillings.',
        long_description: 'Our durable dental fillings repair cavities and minor tooth damage, restoring both function and appearance. Made from high-quality materials, they blend seamlessly with your natural teeth, preventing further decay and ensuring long-lasting protection.',
        type: 'Cosmetic',
        specialist: 'Cosmotic Dentist',
        fee: 150,
    },
    {
        id: 'lumineers',
        image: Lumineer,
        title: 'Lumineers',
        short_description: 'Restores decayed or damaged teeth with strong fillings.',
        long_description: 'Our durable dental fillings repair cavities and minor tooth damage, restoring both function and appearance. Made from high-quality materials, they blend seamlessly with your natural teeth, preventing further decay and ensuring long-lasting protection.',
        type: 'Cosmetic',
        specialist: 'Cosmotic Dentist',
        fee: 150,
    },
    {
        id: 'root-canal',
        image: Root_Canal,
        title: 'Root Canal',
        short_description: 'Saves infected teeth and relieves pain.',
        long_description: 'A root canal treatment removes infected pulp inside a tooth, eliminating pain and preventing tooth loss. This procedure restores strength and function while preserving your natural tooth, avoiding the need for extraction.',
        type: 'Therapeutic',
        specialist: 'Endodontist',
        fee: 200,
    },
    {
        id: 'teeth-whitening',
        image: Teeth_Whitening,
        title: 'Teeth Whitening',
        short_description: 'Brightens teeth for a whiter, more confident smile.',
        long_description: 'Our professional teeth whitening treatment removes deep stains and discoloration caused by coffee, tea, smoking, and aging. This safe and effective procedure leaves your teeth several shades whiter, enhancing your overall appearance.',
        type: 'Cosmetic',
        specialist: 'Cosmetic Dentist',
        fee: 180,
    },
    {
        id: 'braces-aligners',
        image: Braces,
        title: 'Braces & Aligners',
        short_description: 'Straightens teeth for better aesthetics and function.',
        long_description: 'We offer traditional braces and modern clear aligners to correct misaligned teeth, improve bite issues, and enhance your smile. Our orthodontic treatments are customized for each patient to ensure optimal results.',
        type: 'Orthodontic',
        specialist: 'Orthodontist',
        fee: 3000,
    },
    {
        id: 'tooth-extraction',
        image: Tooth_Extractions,
        title: 'Tooth Extraction',
        short_description: 'Safe and painless removal of problematic teeth.',
        long_description: 'Whether due to severe decay, impacted wisdom teeth, or overcrowding, our tooth extraction procedures are performed with precision and minimal discomfort. We ensure a smooth recovery process with proper aftercare guidance.',
        type: 'Surgical',
        specialist: 'Oral Surgeon',
        fee: 250,
    },
    {
        id: 'dental-implants',
        image: Dental_Implants,
        title: 'Dental Implants',
        short_description: 'Permanent replacement for missing teeth.',
        long_description: 'Dental implants provide a long-lasting, natural-looking solution for missing teeth. These titanium posts integrate with your jawbone, offering a stable foundation for crowns or dentures, restoring full functionality and aesthetics.',
        type: 'Restorative',
        specialist: 'Prosthodontist',
        fee: 2000,
    },
];

export const doctors = [
    {
        _id: 'doc1',
        name: 'د. عبدالرحمن بن فهد القحطاني',
        image: theMan,
        speciality: 'Orthodontist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Emily Larson',
        image: doc2,
        speciality: 'Endodontist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sarah Patel',
        image: doc3,
        speciality: 'Periodontist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Younis Abulaban',
        image: Younis,
        speciality: 'Maxillofacial',
        degree: 'MBBS',
        experience: '10 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        speciality: 'Conservative',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Andrew Williams',
        image: doc6,
        speciality: 'Conservative',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Christopher Davis',
        image: doc7,
        speciality: 'Orthodontist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Timothy White',
        image: doc8,
        speciality: 'Endodontist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ava Mitchell',
        image: doc9,
        speciality: 'Periodontist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Jeffrey King',
        image: doc10,
        speciality: 'Maxillofacial',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Zoe Kelly',
        image: doc11,
        speciality: 'Conservative',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Patrick Harris',
        image: doc12,
        speciality: 'Prosthodontist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Chloe Evans',
        image: doc13,
        speciality: 'Orthodontist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        speciality: 'Endodontist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Periodontist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]