import Link from "next/link";
import React from "react";
import {motion} from "framer-motion";

const motionLink = motion(Link);

const Logo = () => {
    return (
        <div className="flex item-center justify-center mt-2">
            <motionLink href="/"
            className="w-16 h-16 bg-dark text-light flex item center justify-center rounded-full text-2x1 font-bold"
            whileHover={{
                scale: 1.5,
            }}
            >Nawa</motionLink>
        </div>
    )
}

export default Logo;