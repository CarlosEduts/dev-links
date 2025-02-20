"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Moon,
  Sun,
  Code,
  Link,
  Zap,
  Book,
  PlayCircle,
  Tv,
  Library,
  PenTool,
  Video,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const categories = [
  { name: "Tudo", icon: Zap, color: "bg-gray-500" },
  { name: "Cursos Grátis", icon: PlayCircle, color: "bg-green-500" },
  { name: "Livros", icon: Library, color: "bg-amber-500" },
  { name: "Documentação", icon: Book, color: "bg-indigo-500" },
  // { name: "Tutoriais", icon: Code, color: "bg-teal-500" },
  { name: "Artigos", icon: PenTool, color: "bg-indigo-600" },
  { name: "YouTube", icon: Video, color: "bg-red-600" },
  // { name: "Repositório", icon: GitBranch, color: "bg-gray-700" },
];

const tools = [
  // Canais do YouTube
  {
    name: "Código Fonte TV",
    category: "YouTube",
    icon: Tv,
    description:
      "Conteúdo diversificado sobre programação e tecnologia apresentado por Gabriel e Vanessa.",
    link: "https://www.youtube.com/user/codigofontetv",
  },
  {
    name: "Curso em Vídeo",
    category: "YouTube",
    icon: Tv,
    description:
      "Cursos completos de diversas linguagens de programação em formato de vídeo.",
    link: "https://www.youtube.com/user/cursosemvideo",
  },
  {
    name: "Rocketseat",
    category: "YouTube",
    icon: Tv,
    description:
      "Focado em desenvolvimento web e mobile, com ênfase em JavaScript e tecnologias modernas.",
    link: "https://www.youtube.com/rocketseat",
  },
  {
    name: "Filipe Deschamps",
    category: "YouTube",
    icon: Tv,
    description:
      "Conteúdos sobre programação e tecnologia com uma abordagem didática e bem-humorada.",
    link: "https://www.youtube.com/FilipeDeschamps",
  },
  {
    name: "Programação Dinâmica",
    category: "YouTube",
    icon: Tv,
    description:
      "Discussões sobre ciência de dados, machine learning e inteligência artificial.",
    link: "https://www.youtube.com/c/ProgramacaoDinamica",
  },
  {
    name: "Attekita Dev",
    category: "YouTube",
    icon: Tv,
    description:
      "Conteúdos para iniciantes em programação e desenvolvimento web.",
    link: "https://www.youtube.com/c/AttekitaDev",
  },
  {
    name: "Universo Programado",
    category: "YouTube",
    icon: Tv,
    description:
      "Dicas e tutoriais sobre programação e carreira em tecnologia.",
    link: "https://www.youtube.com/c/UniversoProgramado",
  },
  {
    name: "Programador BR",
    category: "YouTube",
    icon: Tv,
    description:
      "Conteúdos sobre desenvolvimento web, mobile e dicas de carreira.",
    link: "https://www.youtube.com/c/ProgramadorBR",
  },
  {
    name: "DevMedia",
    category: "YouTube",
    icon: Tv,
    description:
      "Tutoriais e cursos sobre diversas linguagens e tecnologias de programação.",
    link: "https://www.youtube.com/user/devmedia",
  },
  {
    name: "Programação com Mosh",
    category: "YouTube",
    icon: Tv,
    description:
      "Tutoriais abrangentes sobre várias linguagens de programação em inglês.",
    link: "https://www.youtube.com/user/programmingwithmosh",
  },

  // Cursos Online Gratuitos
  {
    name: "Khan Academy",
    category: "Cursos Grátis",
    icon: Code,
    description:
      "Cursos interativos de programação, incluindo JavaScript, HTML e CSS.",
    link: "https://www.khanacademy.org/computing/computer-programming",
  },
  {
    name: "Coursera",
    category: "Cursos Grátis",
    icon: Code,
    description:
      "Plataforma com cursos gratuitos de instituições renomadas em diversas linguagens.",
    link: "https://www.coursera.org/",
  },
  {
    name: "Codecademy",
    category: "Cursos Grátis",
    icon: Code,
    description:
      "Cursos interativos para aprender a programar em várias linguagens.",
    link: "https://www.codecademy.com/",
  },
  {
    name: "freeCodeCamp",
    category: "Cursos Grátis",
    icon: Code,
    description:
      "Currículo extenso que inclui desenvolvimento web, algoritmos e ciência de dados.",
    link: "https://www.freecodecamp.org/",
  },
  {
    name: "edX",
    category: "Cursos Grátis",
    icon: Code,
    description:
      "Plataforma que oferece cursos gratuitos de universidades como Harvard e MIT.",
    link: "https://www.edx.org/",
  },
  {
    name: "Udemy",
    category: "Cursos Grátis",
    icon: Code,
    description:
      "Variedade de cursos gratuitos em programação e desenvolvimento de software.",
    link: "https://www.udemy.com/",
  },
  {
    name: "MDN Web Docs",
    category: "Documentação",
    icon: Library,
    description:
      "Documentação e tutoriais da Mozilla sobre desenvolvimento web.",
    link: "https://developer.mozilla.org/pt-BR/",
  },
  {
    name: "Prime Cursos",
    category: "Cursos Grátis",
    icon: Code,
    description:
      "Cursos online gratuitos de programação com certificado de conclusão opcional.",
    link: "https://www.primecursos.com.br/",
  },
  {
    name: "Cursou",
    category: "Cursos Grátis",
    icon: Code,
    description:
      "Plataforma com cursos gratuitos em diversas linguagens de programação.",
    link: "https://www.cursou.com.br/",
  },
  {
    name: "Programaê!",
    category: "Cursos Grátis",
    icon: Code,
    description:
      "Iniciativa que oferece recursos para iniciantes em programação.",
    link: "https://programae.org.br/",
  },

  // Artigos e Sites Educativos
  {
    name: "Tecnoblog",
    category: "Artigos",
    icon: PenTool,
    description:
      "Artigo listando 9 sites para aprender a programar gratuitamente.",
    link: "https://tecnoblog.net/meiobit/9-sites-para-aprender-programacao-de-graca/",
  },
  {
    name: "Hostinger",
    category: "Artigos",
    icon: PenTool,
    description:
      "Lista de mais de 100 sites para aprender programação de graça.",
    link: "https://www.hostinger.com.br/tutoriais/sites-para-aprender-programacao-gratis",
  },
  {
    name: "Dev.to",
    category: "Artigos",
    icon: PenTool,
    description:
      "Comunidade de desenvolvedores com artigos e tutoriais sobre programação.",
    link: "https://dev.to/",
  },
  {
    name: "TabNews",
    category: "Artigos",
    icon: PenTool,
    description:
      "Discussões e artigos sobre os melhores canais de programação no YouTube.",
    link: "https://www.tabnews.com.br/GabrielSozinho/melhores-canais-de-programacao-e-tecnologia-do-youtube",
  },
  {
    name: "Reddit - r/learnprogramming",
    category: "Outros",
    icon: Code,
    description:
      "Comunidade onde usuários compartilham recursos e discutem sobre aprendizado em programação.",
    link: "https://www.reddit.com/r/learnprogramming/",
  },
  {
    name: "Estudar Fora",
    category: "Artigos",
    icon: PenTool,
    description:
      "Artigo destacando cursos online gratuitos de instituições renomadas.",
    link: "https://www.estudarfora.org.br/cursos/",
  },
  {
    name: "Le Wagon",
    category: "Artigos",
    icon: PenTool,
    description:
      "Artigo sobre os melhores canais do YouTube para aprender programação.",
    link: "https://www.lewagon.com/blog/melhores-canais-youtube-para-aprender-programar",
  },
  {
    name: "Locaweb",
    category: "Artigos",
    icon: PenTool,
    description: "Artigo listando 8 cursos de programação gratuitos e online.",
    link: "https://www.locaweb.com.br/blog/temas/codigo-aberto/curso-de-programacao/?utm_source=chatgpt.com",
  },

  // Livros Gratuitos
  {
    name: "C Programming: A Modern Approach",
    category: "Livros",
    icon: Book,
    description:
      "Livro recomendado para aprender a linguagem C de forma abrangente.",
    link: "https://www.amazon.com/C-Programming-Modern-Approach-2nd/dp/0393979504",
  },
  {
    name: "Automate the Boring Stuff with Python",
    category: "Livros",
    icon: Book,
    description: "Aprenda Python com foco em automação de tarefas práticas.",
    link: "https://automatetheboringstuff.com/",
  },
  {
    name: "Eloquent JavaScript",
    category: "Livros",
    icon: Book,
    description:
      "Livro que aborda JavaScript de forma aprofundada e interativa.",
    link: "https://eloquentjavascript.net/",
  },
  {
    name: "You Don't Know JS",
    category: "Livros",
    icon: Book,
    description: "Série de livros que explora JavaScript em detalhes.",
    link: "https://github.com/getify/You-Dont-Know-JS",
  },
  {
    name: "Learn Python the Hard Way",
    category: "Livros",
    icon: Book,
    description: "Livro que ensina Python através de exercícios práticos.",
    link: "https://learnpythonthehardway.org/python3/",
  },
  {
    name: "JavaScript for Cats",
    category: "Livros",
    icon: Book,
    description: "Introdução amigável ao JavaScript para iniciantes.",
    link: "http://jsforcats.com/",
  },
  {
    name: "The Odin Project",
    category: "Cursos Grátis",
    icon: Library,
    description: "Currículo online gratuito para aprender desenvolvimento web.",
    link: "https://www.theodinproject.com/",
  },
  {
    name: "CS50 Manual",
    category: "Cursos Grátis",
    icon: Library,
    description:
      "Material do curso introdutório de ciência da computação de Harvard.",
    link: "https://cs50.harvard.edu/college/2020/fall/",
  },
  {
    name: "Introduction to the Command Line",
    category: "Livros",
    icon: Book,
    description:
      "Guia para aprender o básico do uso do terminal e linha de comando.",
    link: "https://learnenough.com/command-line-tutorial",
  },
  {
    name: "Pro Git",
    category: "Livros",
    icon: Book,
    description:
      "Livro completo sobre o sistema de controle de versão Git, disponível gratuitamente.",
    link: "https://git-scm.com/book/en/v2",
  },
];

export default function Dashboard() {
  const [selectedCategory, setSelectedCategory] = React.useState("Tudo");
  const [searchQuery, setSearchQuery] = React.useState("");

  const [isDarkTheme, setIsDarkTheme] = React.useState<string>("");

  const themeToggle = () => {
    if (!isDarkTheme) {
      setIsDarkTheme("dark");
    } else {
      setIsDarkTheme("");
    }
  };

  const filteredTools = tools.filter(
    (tool) =>
      (selectedCategory === "Tudo" || tool.category === selectedCategory) &&
      tool.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getCategoryColor = (categoryName: string) => {
    const category = categories.find((cat) => cat.name === categoryName);
    return category ? category.color : "bg-gray-500";
  };

  return (
    <SidebarProvider className={isDarkTheme}>
      <div className="flex h-screen overflow-hidden">
        <Sidebar className="bg-background">
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg">
                  <Link className="h-6 w-6 text-primary" />
                  <span className="font-bold text-xl dark:text-white">
                    Lkoo
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="dark:text-white">
                Categorias
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {categories.map((category) => (
                    <SidebarMenuItem
                      key={category.name}
                      className="hover:bg-gray-600/10 rounded-sm"
                    >
                      <SidebarMenuButton
                        onClick={() => setSelectedCategory(category.name)}
                        isActive={selectedCategory === category.name}
                      >
                        <div
                          className={`h-2 w-2 rounded-full ${category.color}`}
                        ></div>
                        <category.icon className="h-4 w-4 mr-2 dark:text-white" />
                        <p className="dark:text-white">{category.name}</p>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="overflow-auto">
          <header className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center dark:text-white">
              <SidebarTrigger />
              <h1 className="text-2xl font-bold ml-4">Links</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Buscar link..."
                  className="pl-8 dark:text-white/60"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon" onClick={themeToggle}>
                {isDarkTheme ? (
                  <Sun className="h-4 w-4 dark:text-white" />
                ) : (
                  <Moon className="h-4 w-4 dark:text-white" />
                )}
              </Button>
            </div>
          </header>

          <main className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTools.map((tool) => (
                <Card
                  key={tool.name}
                  className="group transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{tool.name}</CardTitle>
                      <div
                        className={`w-8 h-8 rounded-md flex items-center justify-center ${getCategoryColor(
                          tool.category
                        )}`}
                      >
                        <tool.icon className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <CardDescription>{tool.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{tool.description}</p>
                    <a href={tool.link} target="_blank">
                      <Button className="w-full mt-3">Acesse a página</Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
