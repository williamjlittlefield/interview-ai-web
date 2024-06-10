import React from "react";
import Image from 'next/image';

export default function InterviewerCard() {
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <Image
                    src="/interviewer_male.webp"
                    width={100}
                    height={100}
                    className="hidden md:block"
                    alt="Interviewer Sam"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">I'm your interviewer! Sam 😉</h2>
            </div>
        </div>
    );
}