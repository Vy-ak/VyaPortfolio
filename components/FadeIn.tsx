"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export default function FadeIn({ children, delay = 0, className}: Props){
    const reducedMotion = useReducedMotion();
    return(
        <motion.div
        className={className}
        initial={reducedMotion ? false : {opacity:0, y: 24 }}
        whileInView={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px"}}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98]}}>
            {children}
        </motion.div>
    );
}