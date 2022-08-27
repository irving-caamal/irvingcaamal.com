interface ITechnology {
  name: string;
  icon: string;
  description?: string;
  id: string;
}

interface IStack {
  id: string;
  name: string;
  items: ITechnology[];
}
interface IStacks {
  [key: string]: IStack[];
}
const Stack = [
  {
    id: "frontend",
    title: "Frontend",
    items: [
      {
        id: "html",
        name: "HTML",
        value: "html"
      },
      {
        id: "css",
        name: "CSS",
        value: "css"
      },
      {
        id: "js",
        name: "JavaScript",
        icon: "fab fa-js-square"
      },
      {
        id: "react",
        name: "React",
        icon: "react"
      },
      {
        id: "redux",
        name: "Redux",
        icon: "redux"
      },
      {
        id: "vuejs",
        name: "VueJS",
        icon: "vuejs"
      },
      {
        id: "webpack",
        name: "Webpack",
        icon: "webpack"
      },
      {
        id: "sass",
        name: "Sass",
        icon: "sass"
      }
    ]
  },
  {
    id: "backend",
    title: "Backend",
    items: [
      {
        id: "nodejs",
        name: "NodeJS",
        icon: "node-js"
      },
      {
        id: "express",
        name: "Express",
        icon: "express"
      },
      {
        id: "sql",
        name: "SQL",
        icon: "sql"
      },
      {
        id: "nosql",
        name: "NoSQL",
        icon: "nosql"
      },
      {
        id: "firebase",
        name: "Firebase",
        icon: "firebase"
      },
      {
        id: "graphql",
        name: "GraphQL",
        icon: "graphql"
      },
      {
        id: "rest",
        name: "REST",
        icon: "rest"
      }
    ]
  },
  {
    id: "tools",
    title: "Tools",
    items: [
      {
        id: "git",
        name: "Git",
        icon: "git"
      },
      {
        id: "npm",
        name: "NPM",
        icon: "npm"
      },
      {
        id: "yarn",
        name: "Yarn",
        icon: "yarn"
      }
    ]
  }
];

export { Stack };
