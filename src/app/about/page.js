"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {
    const route = useRouter();
    const isLoggedIn = false
    const handleNavigate =()=>{
        if(isLoggedIn){
            route.push("/about/address")
        }
        else{
            route.push("/")
        }
    }
    return (
        <div>
            About
            <Link className="btn" href={"/about/address"}>Address</Link>
            <button type="button" className="btn" onClick={handleNavigate}>Address conditional</button>
        </div>
    );
};

export default About;