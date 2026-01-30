

export type Intro = {

    fullname: string;
    title: string;
    description: string;
    image: string;
}


export type IntroProps = {

    data: Intro;
}


//-----------------------------------------------------


export type PersonalInfo = {

    email: string;
    phone?: number;
    location?: string;
    linkedin: string;
    github: string;

}


export type PersonalInfoProps = {

    data: PersonalInfo;
}

//-----------------------------------------------------


export type Project = {

    id: string;
    title: string;
    description: string;
    tech: string[];
    link: string;
    image: string;
}


export type ProjectProps = {

    projects: Project[];
}

//-----------------------------------------------------


export type Education = {

    id: string;
    title: string;
    description: string;
    startdate: string;
    link: string;
    center: string;
}

export type EducationProps = {

    educations: Education[];
}


//-----------------------------------------------------

export type skillFront = {

    id: string;
    name: string;
    level: "Basic" | "Intermediate" | "Advanced";
    category: String;
    image: string;
}

export type SkillFrontProps = {

    skillsFront: skillFront[];

}

//-----------------------------------------------------



export type skillBack = {

    id: string;
    name: string;
    level: "Basic" | "Intermediate" | "Advanced";
    category: String;
    image: string;
}

export type SkillBackProps = {

    skillsBack: skillBack[];

}


//-----------------------------------------------------



export type skillCloud = {

    id: string;
    name: string;
    level: "Basic" | "Intermediate" | "Advanced";
    category: String;
    image: string;
}

export type SkillCloudProps = {

    skillsCloud: skillCloud[];

}


//-----------------------------------------------------


export type skillTool = {

    id: string;
    name: string;
    level: "Basic" | "Intermediate" | "Advanced";
    category: String;
    image: string;
}

export type SkillToolProps = {

    skillsTool: skillTool[];

}


//-----------------------------------------------------





export type Language = {

    id: string;
    name: string;
    level: "A2" | "B1" | "B2";
}


export type LanguageProps = {

    languages: Language;
}





