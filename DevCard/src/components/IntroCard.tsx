import type React from "react";
import type { IntroProps } from "../types/types";



export const IntroCard: React.FC<IntroProps> = ({ data }) => {

    return (

        <div className="Intro-Style" >
            <h1>{data.fullname}</h1>
            <h2 className="h5">{data.title}</h2>
            <p>{data.description}</p>

            <a  href="https://learn.microsoft.com/es-es/users/luisinfanteslacal-7036/credentials/e182d2f15d51e9ff?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noopener noreferrer" >

                <img
                    src={`/image/${data.image}`}
                    alt={`Logo de ${data.image}`}
                    className="skill-icon"
                    width={80}
                    height={80}
                    loading="lazy"
                    onError={(e) => {
                        // Fallback si la imagen no existe
                        (e.currentTarget as HTMLImageElement).src = "/images/_fallback.png";
                    }}
                />

            </a>

            
        </div>
    );
}