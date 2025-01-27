import Link from "next/link";

const ServicesDetails = ({ params }) => {
    const id = params.id
    const services = [
        {
            id: 1,
            name: "Web Development",
            description: "Building responsive and interactive websites using modern technologies like React, Angular, and Node.js.",
            price: 1500,
            duration: "4-6 weeks",
            category: "IT Services",
            availability: "Monday to Friday",
        },
        {
            id: 2,
            name: "Graphic Design",
            description: "Designing professional logos, banners, and marketing materials.",
            price: 500,
            duration: "1-2 weeks",
            category: "Creative Services",
            availability: "Monday to Saturday",
        },
        {
            id: 3,
            name: "Digital Marketing",
            description: "Boost your business with SEO, social media marketing, and email campaigns.",
            price: 800,
            duration: "3-5 weeks",
            category: "Marketing Services",
            availability: "Monday to Friday",
        },
        {
            id: 4,
            name: "Mobile App Development",
            description: "Developing native and cross-platform mobile applications for iOS and Android.",
            price: 3000,
            duration: "6-8 weeks",
            category: "IT Services",
            availability: "Monday to Friday",
        },
        {
            id: 5,
            name: "Photography",
            description: "Professional photography services for events, portraits, and commercial shoots.",
            price: 200,
            duration: "1 day",
            category: "Creative Services",
            availability: "Weekends only",
        },
        {
            id: 6,
            name: "Home Cleaning",
            description: "Thorough cleaning of homes, apartments, and offices.",
            price: 100,
            duration: "3-5 hours",
            category: "Household Services",
            availability: "Daily",
        },
        {
            id: 7,
            name: "Fitness Training",
            description: "Personalized fitness training sessions to help you achieve your goals.",
            price: 50,
            duration: "1 hour per session",
            category: "Wellness Services",
            availability: "Monday to Saturday",
        },
        {
            id: 8,
            name: "Legal Consultation",
            description: "Expert legal advice on contracts, disputes, and other legal matters.",
            price: 200,
            duration: "1 hour",
            category: "Professional Services",
            availability: "Monday to Friday",
        }
    ];

    const singleData = services.find(d => d.id === parseFloat(id));
    console.log(singleData, id, services)
    return (
        <div>
            <h2 className="text-4xl font-bold text-center my-14">Service Details</h2>
            <div className="card bg-base-100 max-w-[70%] mx-auto  shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{singleData.name}</h2>
                    <p>{singleData.description}</p>
                    <p>{singleData.price} </p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;