// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
};

const workedMonths = '3 años';
const workedMonthsEn = '3 years';

//PROFILE TEXT - TEXTO DE PERFIL
const profileText = `Soy desarrollador front-end con ${workedMonths} en el campo, Tengo conocimientos sólidos en
Html5, Css3, Sass, Bootstrap4, javascript, jquery y react. Tengo conocimientos básicos en Angular,Php, React native, manejo de base de datos en Mysql y
manejo de versiones en Git. Tengo buen entendimiento y abstraccion de los requerimientos que se me presentan, además a lo largo de mi experiencia he
desarrollado landing pages, dashboards administrativos, he trabajado en proyectos para reconocidos bancos y grandes empresas de telecomunicaciones. Soy una persona
que se integra y tiene buena sincronía con el equipo con muchas ganas de seguir creciendo como desarrollador front.`;

const profileTextEn = `I'm a front-end developer with ${workedMonthsEn} ​​of experience, I have solid knowledge in
Html5, Css3, Sass, Bootstrap4, javascript, jquery and react. I have basic knowledge in Angular, React native, database management in Mysql and
Version management in Git. I have a good understanding and abstraction of the requirements that are assigned to me, in addition throughout my experience I have
developed landing pages, administrative dashboards, I have worked on projects for renowned banks and large telecommunications companies. I am a person
who integrates and has good synchrony with the team with a lot of desire to continue growing as a front-end developer`;

//JOB EXPERIENCE - EXPERIENCIA LABORAL
const jobExperienceTitle = `Experiencia laboral (${workedMonths})`;
const jobExperienceTitleEn = `Work experience (${workedMonthsEn})`;
const jobExperienceData = [
  {
    title: 'Desarrollador web en TejidoDigital, Barranquilla',
    description: 'marzo 2019 - octubre 2020',
  },
  {
    title: 'Analista de desarrollo en Red5g, Barranquilla',
    description: 'octubre 2020 - agosto 2021',
  },
  {
    title: 'Software Engineer II en Indra, Barranquilla',
    description: 'agosto 2021 - enero 2022',
  },
];

const jobExperienceDataEn = [
  {
    title: 'Web developer in TejidoDigital, Barranquilla',
    description: 'March 2019 - October 2020',
  },
  {
    title: 'Development analyst in Red5g, Barranquilla',
    description: 'October 2020 - August 2021',
  },
  {
    title: 'Software Engineer II in Indra, Barranquilla',
    description: 'August 2021 - January 2022',
  },
];

//EDUCATION - EDUCACION
const educationData = [
  {
    title:
      'Ingeniero de sistemas, Universidad Autónoma del Caribe, Barranquilla',
    description: 'febrero 2015 - marzo 2020',
  },
];

const educationDataEn = [
  {
    title: 'Systems Engineer, Autónoma del Caribe college, Barranquilla',
    description: 'February 2015 - March 2020',
  },
];

//REFERENCIAS
const referenceData = [
  {
    title: 'Ruben Cabrera Ricaurte - Analista de desarrollo en Serfinanza',
    description: '+57 3164186222',
  },
  {
    title:
      'Jostin Rojas Moreno - End user support specialist en Sykes Colombia S.A.S',
    description: '+57 3043788467',
  },
];

const referenceDataEn = [
  {
    title: 'Ruben Cabrera Ricaurte - Development analyst in Serfinanza',
    description: '+57 3164186222',
  },
  {
    title:
      'Jostin Rojas Moreno - End user support specialist in Sykes Colombia S.A.S',
    description: '+57 3043788467',
  },
];

//CURSOS
const cursosData = [
  {
    title: 'Certificado de Inglés avanzado C1, Cesfa',
    description: 'enero 2012 - diciembre 2014',
  },
  {
    title: 'React js - Udemy',
    description: 'julio 2020',
  },
  {
    title: 'React native - Udemy',
    description: 'mayo 2021',
  },
  {
    title: 'Angular - Udemy',
    description: 'agosto 2021',
  },
];

const cursosDataEn = [
  {
    title: 'Advanced English Certificate C1, Cesfa',
    description: 'January 2012 - December 2014',
  },
  {
    title: 'React js - Udemy',
    description: 'July 2020',
  },
  {
    title: 'React native - Udemy',
    description: 'May 2021',
  },
  {
    title: 'Angular - Udemy',
    description: 'August 2021',
  },
];

//DATOS PERSONALES
const personalData = [
  {
    title: 'Correo',
    description: 'aguilar.jdn@gmail.com',
    type: 'email',
  },
  {
    title: 'Teléfono',
    description: '+57 3002391674',
    type: 'phone',
  },
  {
    title: 'Dirección',
    description: 'cra 28b #79-74 apartamento 202',
  },
  {
    title: 'Linkedin',
    description:
      'https://www.linkedin.com/in/juan-david-nuñez-aguilar-92b729212/',
    type: 'url',
  },
  {
    title: 'Github',
    description: 'https://github.com/le7els10',
    type: 'url',
  },
];

const personalDataEn = [
  {
    title: 'Email',
    description: 'aguilar.jdn@gmail.com',
    type: 'email',
  },
  {
    title: 'Cellphone',
    description: '+57 3002391674',
    type: 'phone',
  },
  {
    title: 'Address',
    description: 'cra 28b #79-74 apartamento 202',
  },
  {
    title: 'Linkedin',
    description:
      'https://www.linkedin.com/in/juan-david-nuñez-aguilar-92b729212/',
    type: 'url',
  },
  {
    title: 'Github',
    description: 'https://github.com/le7els10',
    type: 'url',
  },
];

//Habilidades
const habilitiesData = [
  {
    title: 'Angular',
    value: 30,
  },
  {
    title: 'Css',
    value: 80,
  },
  {
    title: 'Html5',
    value: 90,
  },
  {
    title: 'Javascript',
    value: 80,
  },
  {
    title: 'Jquery',
    value: 70,
  },
  {
    title: 'Mysql',
    value: 40,
  },
  {
    title: 'Php',
    value: 50,
  },
  {
    title: 'React js',
    value: 75,
  },
  {
    title: 'React native',
    value: 40,
  },
  {
    title: 'Sass',
    value: 90,
  },
];

export const globalData = {
  profileText,
  jobExperienceTitle,
  jobExperienceData,
  educationData,
  referenceData,
  cursosData,
  personalData,
  habilitiesData,
};

export const globalDataEn = {
  profileText: profileTextEn,
  jobExperienceTitle: jobExperienceTitleEn,
  jobExperienceData: jobExperienceDataEn,
  educationData: educationDataEn,
  referenceData: referenceDataEn,
  cursosData: cursosDataEn,
  personalData: personalDataEn,
  habilitiesData,
};
