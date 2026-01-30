import { Schema, model } from "mongoose";


/* ---------- Interfaces ---------- */

export interface Intro {

    fullname: string;
    title: string;
    description: string;
    image: string;
}

export interface PersonalInfo {

    email: string;
    linkedin: string;
    github: string;
}


export interface Project {

    id: string;
    title: string;
    description: string;
    tech: string[];
    link: string;
    image: string;
}




export interface Education {

    id?: string;
    title: string;
    description: string;
    link: string;
    center: string;
    startdate: string;
}



export interface Skill {

    id?: string;
    name: string;
    level: "Basic" | "Intermediate" | "Advanced";
    category: "Front-end" | "Back-end" | "cloud" | "tools";
    image: string;
}


export interface IDevcard {

    intro: Intro;
    personalinfo: PersonalInfo;
    projects: Project[];
    education: Education[];
    skillsfront: Skill[];
    skillsback: Skill[];
    skillscloud: Skill[];
    skillstool: Skill[];

}



/* ---------- Sub-esquemas ---------- */



const devcardSchema = new Schema<IDevcard>(
    {
        intro: {
            fullname: { type: String, required: true },
            title: { type: String, required: true },
            description: { type: String, required: true },
            image: { type: String, required: true },
        },

        personalinfo: {
            email: { type: String, required: true },
            linkedin: { type: String, required: true },
            github: { type: String, required: true },
        },

        projects: [
            {
                id: String,
                title: { type: String, required: true },
                description: { type: String, required: true },
                tech: { type: [String], required: true },
                link: { type: String, required: true },
                image: { type: String, required: true },
            },
        ],

        education: [
            {
                id: String,
                title: { type: String, required: true },
                description: { type: String, required: true },
                startdate: { type: String, required: true },
                link: { type: String, required: true },
                center: { type: String, required: true },
            },
        ],

        skillsfront: [
            {
                id: String,
                name: { type: String, required: true },
                level: {
                    type: String,
                    enum: ["Basic", "Intermediate", "Advanced"],
                    required: true,
                },
                category: {
                    type: String,
                    enum: ["Front-end"],
                    required: true,
                },
                image: { type: String, required: true }
            },
        ],

        skillsback: [
            {
                id: String,
                name: { type: String, required: true },
                level: {
                    type: String,
                    enum: ["Basic", "Intermediate", "Advanced"],
                    required: true,
                },
                category: {
                    type: String,
                    enum: ["Back-end"],
                    required: true,
                },
                image: { type: String, required: true }
            },
        ],

        skillscloud: [
            {
                id: String,
                name: { type: String, required: true },
                level: {
                    type: String,
                    enum: ["Basic", "Intermediate", "Advanced"],
                    required: true
                },
                category: {
                    type: String,
                    enum: ["cloud"],
                    required: true,
                },
                image: { type: String, required: true }
            },
        ],

        skillstool: [
            {
                id: String,
                name: { type: String, required: true },
                level: {
                    type: String,
                    enum: ["Basic", "Intermediate", "Advanced"],
                    required: true,
                },
                category: {
                    type: String,
                    enum: ["tools"],
                    required: true,
                },
                image: { type: String, required: true }
            },
        ],


    },
    {
        timestamps: true,
        collection: "devcard",
    }
);


const DevCardModel = model<IDevcard>("devcard", devcardSchema);

export default DevCardModel;