// Shared content for both resume variations, bilingual PT/EN

const RESUME = {
  name: "André Oliveira",
  fullName: "André Corrêa de Oliveira",
  email: "coliveira.andre@gmail.com",
  location: { en: "Fortaleza, Brazil", pt: "Fortaleza, Brasil" },
  nationality: { en: "Brazilian", pt: "Brasileiro" },
  github: "github.com/andrecoliveira",
  linkedin: "linkedin.com/in/perfil-andreoliveira",

  hero: {
    role: {
      en: ["Front-end Engineer", "Designer", "Workaholic"],
      pt: ["Front-end Engineer", "Designer", "Workaholic"],
    },
    tagline: {
      en: "Fifteen years crafting interfaces that people actually enjoy using.",
      pt: "Quinze anos construindo interfaces que as pessoas gostam de usar.",
    },
    available: {
      en: "Available for new opportunities",
      pt: "Disponível para novas oportunidades",
    },
  },

  about: {
    en: [
      "My journey has spanned multiple generations of web and mobile development, building a solid repertoire across the entire software engineering lifecycle.",
      "I've specialized in systems architecture and the technical governance of modern development cycles, pairing strategic product vision with technical rigor.",
      "Today, I orchestrate workflows where automation is guided by rigorous specifications — ensuring delivery speed never translates into technical debt or architectural erosion.",
      "I work directly at the intelligence and design layer, leveraging established patterns to structure technical contracts like Specs and ADRs that sustain the coherence of complex ecosystems.",
    ],
    pt: [
      "Minha trajetória atravessou diversas gerações do desenvolvimento web e mobile, consolidando um repertório sólido em todo o ciclo de vida da engenharia de software.",
      "Especializei minha atuação na arquitetura de sistemas e na governança técnica de ciclos modernos, unindo visão estratégica de produto ao rigor técnico.",
      "Atualmente, domino a orquestração de fluxos de trabalho onde a automação é guiada por especificações rigorosas, garantindo que a velocidade de entrega não resulte em débitos técnicos ou erosão arquitetural.",
      "Atuo diretamente na camada de inteligência e design, utilizando padrões de projeto consolidados para estruturar contratos técnicos, como Specs e ADRs, que asseguram a sustentabilidade e a coesão de ecossistemas complexos.",
    ],
  },

  skillLevels: [
    { name: "React", level: "Professional", pt: "Profissional" },
    { name: "React Native", level: "Intermediate", pt: "Intermediário" },
    { name: "JavaScript (ES6+)", level: "Professional", pt: "Profissional" },
    { name: "TypeScript", level: "Advanced", pt: "Avançado" },
    { name: "HTML/CSS", level: "Advanced", pt: "Avançado" },
    { name: "Node.js", level: "Beginner", pt: "Iniciante" },
  ],

  skillGroups: {
    en: [
      {
        title: "Languages & Frameworks",
        items: ["React", "React Native", "TypeScript", "JavaScript", "HTML5", "CSS3", "Node.js"],
      },
      {
        title: "Tooling",
        items: ["Webpack", "Babel", "ESLint", "Jest", "Cypress", "Storybook", "Git / SVN"],
      },
      {
        title: "UI & Design Systems",
        items: ["Tailwind", "Bootstrap", "Semantic UI", "Atlaskit", "Pure", "Figma", "Adobe CC"],
      },
      {
        title: "Design & Research",
        items: ["UX Design", "Accessibility", "User Research", "Wireframing", "Prototyping", "A/B Testing", "Usability Testing"],
      },
      {
        title: "Practices",
        items: ["Responsive Web Design", "Clean Architecture", "SOLID", "Design Patterns", "REST", "Scrum"],
      },
      {
        title: "Content & Platforms",
        items: ["Drupal", "WordPress", "Liferay", "GraphQL", "Firebase", "Amazon S3"],
      },
    ],
    pt: [
      {
        title: "Linguagens & Frameworks",
        items: ["React", "React Native", "TypeScript", "JavaScript", "HTML5", "CSS3", "Node.js"],
      },
      {
        title: "Ferramentas",
        items: ["Webpack", "Babel", "ESLint", "Jest", "Cypress", "Storybook", "Git / SVN"],
      },
      {
        title: "UI & Design Systems",
        items: ["Tailwind", "Bootstrap", "Semantic UI", "Atlaskit", "Pure", "Figma", "Adobe CC"],
      },
      {
        title: "Design & Pesquisa",
        items: ["UX Design", "Acessibilidade", "Pesquisa com usuários", "Wireframing", "Prototipação", "Testes A/B", "Testes de usabilidade"],
      },
      {
        title: "Práticas",
        items: ["Design Responsivo", "Clean Architecture", "SOLID", "Design Patterns", "REST", "Scrum"],
      },
      {
        title: "Conteúdo & Plataformas",
        items: ["Drupal", "WordPress", "Liferay", "GraphQL", "Firebase", "Amazon S3"],
      },
    ],
  },

  experience: [
    {
      company: "Moray AI",
      period: "2025 — 2026",
      periodPt: "2025 — 2026",
      role: { en: "Frontend Engineer", pt: "Frontend Engineer" },
      description: {
        en: "Acted as front-end technical reference at Moray AI, an agrotech using machine learning for pest detection in crops. Responsible for the development and evolution of the main product — an app used by field agents in predominantly offline conditions.",
        pt: "Atuei como referência técnica front-end na Moray AI, uma agrotech que usa machine learning para detecção de pragas em lavouras. Fui responsável pelo desenvolvimento e evolução do produto principal — um aplicativo usado por agentes de campo em condições predominantemente offline.",
      },
      bullets: {
        en: [
          "Structured the end-to-end system design of the sync layer between app and API, prioritizing resilience in low-connectivity environments",
          "Implemented targeted backend improvements to optimize app/server communication, reducing payloads and unnecessary round-trips",
          "Configured Sentry with Session Replay and custom Breadcrumbs, delivering real visibility into field agents' behavior",
          "Implemented Datadog RUM with performance metrics and usage funnels that now guide the engineering team's priorities",
          "Created dashboards and alerts that consolidated observability as part of the team's decision process",
          "Introduced the AI-native engineering process, structuring SPECs and ADRs as shared contracts between agents and the team",
        ],
        pt: [
          "Estruturei o system design end-to-end da camada de sincronização entre app e API, priorizando resiliência em ambientes de baixa conectividade",
          "Implementei melhorias pontuais no backend para otimizar a comunicação app/servidor, diminuindo payloads e round-trips desnecessários",
          "Configurei o Sentry com Session Replay e Breadcrumbs customizados, entregando visibilidade real do comportamento dos agentes de campo",
          "Implementei o Datadog RUM com métricas de performance e funis de uso, que passaram a orientar as prioridades do time de engenharia",
          "Criei dashboards e alertas que consolidaram a observabilidade como parte do processo de decisão do time",
          "Introduzi o processo de engenharia AI-native, estruturando SPECs e ADRs como contratos compartilhados entre agentes e o time",
        ],
      },
      skills: ["React Native", "Expo", "Vite", "React", "TypeScript", "Python/FastAPI", "Watermelon DB", "Sentry", "Datadog RUM", "Auth0", "Mapbox"],
    },
    {
      company: "Magalu Cloud — Magazine Luiza",
      period: "2022 — 2025",
      periodPt: "2022 — 2025",
      role: { en: "Frontend Engineer", pt: "Frontend Engineer" },
      description: {
        en: "Worked on the development of ID Magalu, the centralized authentication solution for Magazine Luiza's ecosystem. A critical product used across the entire group's customer base, built on OpenID Connect and OAuth 2.0. Within a large team, my focus was on the front-end layer — code quality, pipeline and monitoring.",
        pt: "Atuei no desenvolvimento do ID Magalu, a solução de autenticação centralizada do ecossistema Magazine Luiza. Um produto crítico, usado por toda a base de clientes do grupo, construído sobre os protocolos OpenID Connect e OAuth 2.0. Dentro de um time grande, minha atuação foi focada na camada front-end — qualidade de código, pipeline e monitoramento.",
      },
      bullets: {
        en: [
          "Contributed to building modular interfaces with React and TypeScript across the ecosystem's different products",
          "Along with the team, introduced automated tests with Cypress and Playwright integrated into CI, reducing bug incidence in production",
          "Participated in configuring and optimizing the build pipeline with Webpack and Rollup, improving application packaging time",
          "Was responsible for Sentry and Grafana configuration within the squad — alerts, metrics and error tracking that guided engineering decisions in production",
          "Contributed to the adoption of Storybook as project standard, facilitating new team members' onboarding",
          "Worked on application container orchestration with Argo CD in a Kubernetes environment",
        ],
        pt: [
          "Contribuí na construção de interfaces modulares com React e TypeScript, entre os diferentes produtos do ecossistema",
          "Em conjunto com o time, introduzimos testes automatizados com Cypress e Playwright integrados ao CI, reduzindo a incidência de bugs em produção",
          "Participei da configuração e otimização do pipeline de build com Webpack e Rollup, melhorando o tempo de empacotamento da aplicação",
          "Fui responsável pela configuração do Sentry e Grafana na squad — alertas, métricas e rastreamento de erros que passaram a orientar as decisões do time em produção",
          "Contribuí na adoção de Storybook como padrão do projeto, facilitando o onboarding de novos membros no time",
          "Atuei na orquestração dos containers da aplicação com Argo CD em ambiente Kubernetes",
        ],
      },
      skills: ["React", "Typescript", "Webpack", "Rollup", "Cypress", "Playwright", "Jest", "Sentry", "Grafana", "Argo CD", "Kubernetes", "Docker", "Storybook"],
    },
    {
      company: "Delfos Intelligent Maintenance",
      period: "2019 — 2022",
      periodPt: "2019 — 2022",
      role: { en: "Frontend Engineer", pt: "Frontend Engineer" },
      description: {
        en: "After returning to Brazil in March 2019, I joined Delfos as Squad Leader and Scrum Master, responsible for the organization, planning and structuring of agile processes in a six-person multidisciplinary team, including developers and testers. Beyond squad leadership, I actively worked on the development of the applications.",
        pt: "Após retornar ao Brasil em março de 2019, integrei a equipe da Delfos como Squad Leader e Scrum Master, sendo responsável pela organização, planejamento das atividades e estruturação de processos ágeis em um time multidisciplinar composto por seis profissionais, incluindo desenvolvedores e testadores. Além da liderança da squad, atuei ativamente no desenvolvimento dos aplicativos.",
      },
      bullets: {
        en: [
          "Implementation of a web dashboard for real-time and historical data visualization of wind and solar farms, providing precise and efficient insights for end customers",
          "Development and maintenance of the mobile application. Implemented metrics for behavior and satisfaction analysis, as well as crash reporting tools, enabling fast identification and correction of failures. Personalized push notifications were also incorporated, directly contributing to increased user engagement and retention",
        ],
        pt: [
          "Implementação de um dashboard web para visualização de dados em tempo real e históricos de parques eólicos e solares, proporcionando insights precisos e eficientes para os clientes finais",
          "Desenvolvimento e manutenção do aplicativo móvel. Foram implementadas métricas para análise de comportamento e satisfação, bem como ferramentas de monitoramento de erros (crash reporting), permitindo rápida identificação e correção de falhas. O envio de push notifications personalizadas também foi incorporado à solução, contribuindo diretamente para o aumento do engajamento e da retenção dos usuários",
        ],
      },
      skills: ["Webpack", "TypeScript", "ESLint", "Git", "Babel", "Jest", "React", "React Native", "Semantic UI", "Amazon S3", "GraphQL/Apollo Client", "Firebase", "Amazon Cognito"],
    },
    {
      company: "Banco do Nordeste",
      period: "2016 — 2018",
      periodPt: "2016 — 2018",
      role: { en: "Frontend Engineer", pt: "Frontend Engineer" },
      description: {
        en: "During my second time at the bank, I joined the Innovation Hub team (Hubine), where I was initially responsible for developing the institutional website on Liferay DXP. The following year, I moved into the architecture team, taking on strategic responsibilities such as the creation and implementation of a Design System aimed at standardizing internal systems, promoting visual consistency and scalability in digital solutions. I also participated in defining development standards, selecting front-end frameworks and technologies, and in technical support for partner software factories — focusing on disseminating best practices and ensuring adoption of the institution's standards.",
        pt: "Durante minha segunda passagem pelo banco, integrei a equipe do Hub de Inovação (Hubine), onde inicialmente fui responsável pelo desenvolvimento do website institucional utilizando o CMS Liferay DXP. No ano seguinte, passei a integrar a equipe de arquitetura, assumindo responsabilidades estratégicas, como a criação e implementação de um Design System voltado à padronização dos sistemas internos, promovendo consistência visual e escalabilidade nas soluções digitais. Também participei da definição de padrões de desenvolvimento, na seleção de frameworks e tecnologias para o Front-end e no suporte técnico às fábricas de software parceiras, com foco na disseminação de boas práticas e garantia da adoção dos padrões homologados pela instituição.",
      },
      skills: ["Liferay DXP", "Velocity", "Polymer", "Web Components", "JS", "CSS"],
    },
    {
      company: "VTI Tecnologia",
      period: "2015 — 2016",
      periodPt: "2015 — 2016",
      role: { en: "Frontend Engineer & UX Designer", pt: "Frontend Engineer & UX Designer" },
      description: {
        en: "In 2015, I took on responsibility for implementing the new intranet portal, driving significant interface improvements, optimizing navigation and delivering a simpler, more intuitive layout. During this period, beyond acting as a front-end engineer, I also performed the UX role across several strategic projects. Among the projects I was directly involved in, initiatives for DETRAN-CE and the Brazilian Army stand out, where I contributed to delivering impactful solutions aligned with user needs.",
        pt: "Em 2015, assumi a responsabilidade de implementar o novo portal intranet, promovendo melhorias significativas na interface, otimizando a navegação e entregando um layout mais simples e intuitivo. Durante esse período, além de atuar como engenheiro Front-end, também desempenhei a função de UX em diversos projetos estratégicos. Entre os projetos em que estive diretamente envolvido, destacam-se iniciativas para o DETRAN-CE e o Exército Brasileiro, onde contribuí para a entrega de soluções impactantes e alinhadas às necessidades dos usuários.",
      },
      skills: ["Drupal", "Bootstrap", "JS", "CSS", "UX", "SVN", "UI Designer", "Adobe Fireworks"],
    },
    {
      company: "Banco do Nordeste",
      period: "2013 — 2015",
      periodPt: "2013 — 2015",
      role: { en: "Interaction Designer & Frontend Developer", pt: "Interaction Designer & Frontend Developer" },
      description: {
        en: "I worked in the bank's Communication Group performing the roles of interaction designer and front-end engineer, contributing to several initiatives, such as the creation of new hotsites and digital and print media pieces. In 2014, I took on the responsibility of leading the implementation of Banco do Nordeste's new intranet portal. The project focused on improving the interface, optimizing navigation and offering a simpler and more intuitive layout, meeting needs identified from end users. To achieve these objectives, UX methodologies were applied, enabling a deep understanding of user profiles and interactions. Later that year, in collaboration with the IT team, I implemented Banco do Nordeste's new institutional web portal using Liferay CMS, developed in Java. The portal was launched in December of that same year, representing a milestone in the institution's digital presence modernization.",
        pt: "Atuei no Grupo de Comunicação do Banco exercendo as funções de designer de interação e engenheiro Front-end, contribuindo em diversas iniciativas, como a criação de novos hotsites e peças em mídias digitais e impressas. Em 2014, assumi a responsabilidade de liderar a implementação do novo portal intranet do Banco do Nordeste. O projeto teve como foco melhorar a interface, otimizar a navegação e oferecer um layout mais simples e intuitivo, atendendo às necessidades identificadas dos usuários finais. Para alcançar esses objetivos, foram aplicadas metodologias de UX que permitiram um entendimento profundo do perfil e das interações dos usuários. Ainda neste ano, em colaboração com a equipe de TI, implementei o novo portal web institucional do Banco do Nordeste utilizando o CMS Liferay, desenvolvido em Java. O portal foi lançado em dezembro do mesmo ano, representando um marco na modernização da presença digital da instituição.",
      },
      skills: ["Liferay EE", "JS", "CSS", "HTML", "SVN", "Velocity", "PrimeFaces UI", "UX", "UI Designer"],
    },
    {
      company: "Nuteral Ind. de Form. Nutricionais",
      period: "2011 — 2012",
      periodPt: "2011 — 2012",
      role: { en: "Frontend Developer & Technical Leader", pt: "Frontend Developer & Technical Leader" },
      description: {
        en: "I worked in coordinating the development team, directly contributing to projects focused on creating and evolving internal systems. Among the main initiatives, I stood out in proposing improvements that optimized the company's sales and inventory management. In 2012, we led the launch of a new sales portal, developed to significantly enhance user experience, simplifying platform navigation and interaction. I was also responsible for applying UX-focused dynamics, proposing usability improvements in internal systems, resulting in more efficient interfaces aligned with end-user needs.",
        pt: "Atuei na coordenação da equipe de desenvolvimento, contribuindo diretamente para projetos voltados à criação e evolução de sistemas internos. Entre as principais iniciativas, destaquei-me na proposição de melhorias que otimizaram o gerenciamento e o controle de vendas e estoque da empresa. Em 2012, lideramos o lançamento de um novo portal de vendas, desenvolvido para aprimorar significativamente a experiência dos usuários, simplificando a navegação e a interação com a plataforma. Também fui responsável pela aplicação de dinâmicas focadas em User Experience (UX), propondo melhorias de usabilidade em sistemas internos, resultando em interfaces mais eficientes e alinhadas às necessidades dos usuários finais.",
      },
      skills: ["Drupal", "JS", "CSS", "PHP", "HTML", "UX", "UI Designer"],
    },
    {
      company: "Instituto Atlântico",
      period: "2007 — 2011",
      periodPt: "2007 — 2011",
      role: { en: "Interaction Designer & Frontend Developer", pt: "Interaction Designer & Frontend Developer" },
      description: {
        en: "During this period, I worked on relevant national and international projects, focused on Front-end development, interface design and software engineering, always allied to agile methodology practices to ensure efficient, scalable and high-quality deliveries. I performed the role of Human-Computer Interaction (HCI) Analyst and Front-end Developer, contributing with innovative digital solutions for leading companies in their segments in Brazil, United States (Silicon Valley), Europe and Asia. Among the main partners were Padtec, Mobitec, Telcon, Delta, Epson, HP and Sony Ericsson. My deliveries were centered on transforming ideas into intuitive and efficient digital experiences, focusing on usability, accessibility and alignment with end-user expectations. The combination of technical skills with sensitivity to user experience allowed me to act as a bridge between design and engineering, ensuring consistent and business-oriented results.",
        pt: "Ao longo desse período, atuei em projetos nacionais e internacionais de grande relevância, com foco em desenvolvimento Front-end, design de interfaces e engenharia de software, sempre aliado a práticas de metodologias ágeis para garantir entregas eficientes, escaláveis e de alta qualidade. Desempenhei o papel de Analista de Interação Humano-Computador (IHC) e Desenvolvedor Front-end, contribuindo com soluções digitais inovadoras para empresas líderes em seus segmentos no Brasil, Estados Unidos (Silicon Valley), Europa e Ásia. Entre os principais parceiros estão Padtec, Mobitec, Telcon, Delta, Epson, HP e Sony Ericsson. Minhas entregas foram centradas na transformação de ideias em experiências digitais intuitivas e eficientes, com foco em usabilidade, acessibilidade e alinhamento às expectativas do usuário final. A combinação de habilidades técnicas com sensibilidade para a experiência do usuário me permitiu atuar como ponte entre design e engenharia, garantindo resultados consistentes e orientados ao negócio.",
      },
      skills: ["Adobe Fireworks", "Adobe Dreamweaver", "Adobe Illustrator", "HTML", "CSS", "JS", "UX", "UI Designer"],
    },
  ],

  education: {
    en: [
      { period: "2009 — 2014", degree: "Bachelor of Information Systems", school: "Universidade Sete de Setembro" },
      { period: "2018 — 2019", degree: "English Course", school: "Greenwich College — Australia · Sydney" },
    ],
    pt: [
      { period: "2009 — 2014", degree: "Bacharel em Sistemas de Informação", school: "Universidade Sete de Setembro" },
      { period: "2018 — 2019", degree: "Curso de Inglês", school: "Greenwich College — Austrália · Sydney" },
    ],
  },

  languages: {
    en: [
      { name: "English", level: "Intermediate B1" },
      { name: "Portuguese", level: "Native" },
    ],
    pt: [
      { name: "Inglês", level: "Intermediário B1" },
      { name: "Português", level: "Fluente" },
    ],
  },

  labels: {
    en: {
      about: "About",
      skills: "Skills & Tech",
      skillsSub: "Tools, stacks, and practices I lean on day to day.",
      proficiency: "Proficiency",
      experience: "Experience",
      experienceSub: "Nearly two decades of journey.",
      education: "Education",
      languages: "Languages",
      downloadResume: "Download Resume",
      downloadPDF: "Download PDF",
      getInTouch: "Get in touch",
      basedIn: "Living in",
      since: "Career start",
      to: "to",
      today: "Today",
      selectedWork: "Selected Work",
      index: "Index",
    },
    pt: {
      about: "Sobre",
      skills: "Skills & Tecnologias",
      skillsSub: "Ferramentas, stacks e práticas do meu dia a dia.",
      proficiency: "Proficiência",
      experience: "Experiência",
      experienceSub: "Quase duas décadas de trajetória.",
      education: "Educação",
      languages: "Idiomas",
      downloadResume: "Baixar Currículo",
      downloadPDF: "Baixar PDF",
      getInTouch: "Entre em contato",
      basedIn: "Morando em",
      since: "Início de carreira",
      to: "até",
      today: "Hoje",
      selectedWork: "Trabalhos Selecionados",
      index: "Índice",
    },
  },
};

// Helper: get years of experience (from 2008)
RESUME.yearsOfExperience = new Date().getFullYear() - 2008;

window.RESUME = RESUME;
