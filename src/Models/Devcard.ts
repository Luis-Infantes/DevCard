import { Schema, model } from "mongoose";


/* ---------- Interfaces ---------- */

export interface Intro {

    fullname: string;
    title: string;
    description: string;
    image: string;
    azureCertification: string;
    awsCertification: string;
    avatarimg: string;
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
    linkvideo: string;
    image: string;
    slug: string;
}




export interface ProjectCloud {

    id: string;
    title: string;
    description: string;
    tech: string[];
    link: string;
    linkvideo: string;
    image: string;
    slug: string;
}



export interface ProjectPrimer {

    id: string;
    title: string;
    description: string;
    tech: string[];
    link: string;
    linkvideo: string;
    image: string;
    slug: string;
}


export interface Education {

    id?: string;
    title: string;
    description: string;
    link: string;
    center: string;
    startdate: string;
    slug: string; // identificador de cada proyecto
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
    projects: Project[];
    projectscloud: ProjectCloud[];
    projectsprimer: ProjectPrimer[];
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
            azureCertification: { type: String, required: true },
            awsCertification: { type: String, required: true },
        },



        projects: [
            {
                id: String,
                title: { type: String, required: true },
                description: { type: String, required: true },
                tech: { type: [String], required: true },
                link: { type: String, required: true },
                linkvideo: {type: String, required: true},
                image: { type: String, required: true },
                slug: {type:String, required:true}
            },
        ],

        projectscloud: [
            {
                id: String,
                title: { type: String, required: true },
                description: { type: String, required: true },
                tech: { type: [String], required: true },
                link: { type: String, required: true },
                linkvideo: { type: String, required: true },
                image: { type: String, required: true },
                slug: { type: String, required: true }
            },
        ],


        projectsprimer: [
            {
                id: String,
                title: { type: String, required: true },
                description: { type: String, required: true },
                tech: { type: [String], required: true },
                link: { type: String, required: true },
                linkvideo: { type: String, required: true },
                image: { type: String, required: true },
                slug: { type: String, required: true }
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
                slug: { type: String, required: true }
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