"use client";

import * as React from "react";
import {
  Search,
  Moon,
  Sun,
  Code,
  Database,
  FileText,
  Layout,
  Package,
  Zap,
  BookOpen,
  Book,
  User,
  Award,
  PlayCircle,
  Tv,
  Trophy,
  File,
  Terminal,
  HelpCircle,
  Library,
  Bookmark,
  Laptop,
  Clipboard,
  PenTool,
  Users,
  Video,
  Activity,
  MessageSquare,
  Play,
  GitBranch,
  UserPlus,
  Film,
  Flag,
  Newspaper,
  Cpu,
  Layers,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  { name: "All Tools", icon: Zap, color: "bg-gray-500" },
  { name: "Plataforma de Ensino", icon: BookOpen, color: "bg-blue-500" },
  { name: "Tutoriais/Documentação", icon: FileText, color: "bg-gray-500" },
  { name: "Documentação", icon: Book, color: "bg-indigo-500" },
  { name: "Plataforma Educacional", icon: User, color: "bg-green-500" },
  { name: "Curso Universitário", icon: Award, color: "bg-yellow-500" },
  { name: "Curso", icon: PlayCircle, color: "bg-red-500" },
  { name: "Plataforma de Cursos", icon: Tv, color: "bg-purple-500" },
  { name: "Desafios/Competição", icon: Trophy, color: "bg-orange-500" },
  { name: "Tutoriais", icon: Code, color: "bg-teal-500" },
  { name: "Tutoriais/Artigos", icon: File, color: "bg-cyan-500" },
  { name: "Tutoriais Interativos", icon: Terminal, color: "bg-blue-600" },
  { name: "Documentação/Tutorial", icon: HelpCircle, color: "bg-gray-600" },
  { name: "Livros Gratuitos", icon: Library, color: "bg-amber-500" },
  { name: "Livros/Cursos", icon: Bookmark, color: "bg-violet-500" },
  { name: "Livro Interativo", icon: Laptop, color: "bg-pink-500" },
  { name: "Livro/Tutorial", icon: Clipboard, color: "bg-emerald-500" },
  { name: "Artigos", icon: PenTool, color: "bg-indigo-600" },
  { name: "Comunidade/Artigos", icon: Users, color: "bg-green-600" },
  { name: "YouTube", icon: Video, color: "bg-red-600" },
  { name: "Desafios/Prática", icon: Activity, color: "bg-blue-700" },
  { name: "Comunidade/Tutoriais", icon: MessageSquare, color: "bg-teal-600" },
  { name: "Curso/Tutorial", icon: Play, color: "bg-orange-600" },
  { name: "Repositório", icon: GitBranch, color: "bg-gray-700" },
  { name: "Comunidade/Educação", icon: UserPlus, color: "bg-blue-800" },
  { name: "Tutoriais em Vídeo", icon: Film, color: "bg-pink-600" },
  { name: "Desafio/Curso", icon: Flag, color: "bg-red-700" },
  { name: "Artigos/Blog", icon: Newspaper, color: "bg-gray-800" },
  { name: "Desafios/Exemplos", icon: Zap, color: "bg-yellow-600" },
  { name: "Ambiente de Desenvolvimento", icon: Cpu, color: "bg-green-700" },
  { name: "Artigos/Tutoriais", icon: Layers, color: "bg-indigo-700" },
];

const tools = [
  {
    name: "FreeCodeCamp",
    category: "Plataforma de Ensino",
    icon: Code,
    description:
      "Plataforma gratuita com cursos de programação e projetos práticos.",
    link: "https://www.freecodecamp.org",
  },
  {
    name: "Codecademy",
    category: "Plataforma de Ensino",
    icon: Code,
    description:
      "Cursos interativos de programação, com conteúdos gratuitos e pagos.",
    link: "https://www.codecademy.com",
  },
  {
    name: "W3Schools",
    category: "Tutoriais/Documentação",
    icon: Code,
    description: "Tutoriais e referências para desenvolvimento web.",
    link: "https://www.w3schools.com",
  },
  {
    name: "MDN Web Docs",
    category: "Documentação",
    icon: Code,
    description: "Documentação completa para web, HTML, CSS e JavaScript.",
    link: "https://developer.mozilla.org/en-US",
  },
  {
    name: "Khan Academy – Programação",
    category: "Plataforma Educacional",
    icon: Code,
    description: "Aulas e exercícios de programação para iniciantes.",
    link: "https://www.khanacademy.org/computing/computer-programming",
  },
  {
    name: "The Odin Project",
    category: "Plataforma de Ensino",
    icon: Code,
    description:
      "Cursos completos e gratuitos para se tornar um desenvolvedor web.",
    link: "https://www.theodinproject.com",
  },
  {
    name: "CS50 by Harvard",
    category: "Curso Universitário",
    icon: Code,
    description:
      "Curso introdutório de ciência da computação oferecido por Harvard.",
    link: "https://cs50.harvard.edu",
  },
  {
    name: "Udacity – Intro to Programming",
    category: "Curso",
    icon: Code,
    description: "Curso introdutório de programação com projetos práticos.",
    link: "https://www.udacity.com/course/intro-to-programming--cs101",
  },
  {
    name: "Udemy – Cursos Gratuitos",
    category: "Plataforma de Cursos",
    icon: Code,
    description:
      "Seleção de cursos gratuitos em diversas áreas da programação.",
    link: "https://www.udemy.com/courses/free/",
  },
  {
    name: "Coursera",
    category: "Plataforma de Cursos",
    icon: Code,
    description: "Cursos online gratuitos e pagos de universidades renomadas.",
    link: "https://www.coursera.org",
  },
  {
    name: "edX",
    category: "Plataforma de Cursos",
    icon: Code,
    description:
      "Cursos online de universidades de todo o mundo, com opção gratuita.",
    link: "https://www.edx.org",
  },
  {
    name: "Code.org",
    category: "Plataforma Educacional",
    icon: Code,
    description: "Recursos e cursos para aprender programação desde cedo.",
    link: "https://www.code.org",
  },
  {
    name: "HackerRank",
    category: "Desafios/Competição",
    icon: Code,
    description:
      "Plataforma de desafios de programação e entrevistas técnicas.",
    link: "https://www.hackerrank.com",
  },
  {
    name: "LeetCode",
    category: "Desafios/Competição",
    icon: Code,
    description:
      "Plataforma para praticar algoritmos e resolver desafios de programação.",
    link: "https://leetcode.com",
  },
  {
    name: "Codewars",
    category: "Desafios/Competição",
    icon: Code,
    description:
      "Plataforma de desafios de programação com exercícios de código.",
    link: "https://www.codewars.com",
  },
  {
    name: "SoloLearn",
    category: "Plataforma de Ensino",
    icon: Code,
    description:
      "Comunidade e cursos interativos para aprender diversas linguagens.",
    link: "https://www.sololearn.com",
  },
  {
    name: "Programiz",
    category: "Tutoriais",
    icon: Code,
    description:
      "Tutoriais e exemplos para aprender programação de forma prática.",
    link: "https://www.programiz.com",
  },
  {
    name: "GeeksforGeeks",
    category: "Tutoriais/Artigos",
    icon: Code,
    description:
      "Artigos, tutoriais e exemplos sobre algoritmos e linguagens de programação.",
    link: "https://www.geeksforgeeks.org",
  },
  {
    name: "JavaTpoint",
    category: "Tutoriais",
    icon: Code,
    description: "Tutoriais e referências em várias linguagens e tecnologias.",
    link: "https://www.javatpoint.com",
  },
  {
    name: "LearnPython.org",
    category: "Tutoriais Interativos",
    icon: Code,
    description: "Tutorial interativo para aprender Python do zero.",
    link: "https://www.learnpython.org",
  },
  {
    name: "LearnJavaOnline.org",
    category: "Tutoriais Interativos",
    icon: Code,
    description: "Curso online interativo para aprender Java.",
    link: "https://www.learnjavaonline.org",
  },
  {
    name: "LearnCPP.com",
    category: "Tutoriais",
    icon: Code,
    description: "Tutoriais detalhados para aprender C++.",
    link: "https://www.learncpp.com",
  },
  {
    name: "Learn-C.org",
    category: "Tutoriais Interativos",
    icon: Code,
    description: "Curso interativo para aprender a linguagem C.",
    link: "https://www.learn-c.org",
  },
  {
    name: "Rust – Aprenda a Linguagem",
    category: "Documentação/Tutorial",
    icon: Code,
    description: "Recursos oficiais para aprender a linguagem Rust.",
    link: "https://www.rust-lang.org/learn",
  },
  {
    name: "Tutorial de Go",
    category: "Documentação/Tutorial",
    icon: Code,
    description: "Tutorial oficial para aprender a linguagem Go.",
    link: "https://golang.org/doc/tutorial",
  },
  {
    name: "Tutorial Oficial de PHP",
    category: "Documentação",
    icon: Code,
    description: "Tutorial oficial da linguagem PHP.",
    link: "https://www.php.net/manual/en/tutorial.php",
  },
  {
    name: "Documentação do Scala",
    category: "Documentação",
    icon: Code,
    description: "Recursos e documentação oficial para Scala.",
    link: "https://www.scala-lang.org/documentation/",
  },
  {
    name: "Aprendendo Haskell",
    category: "Documentação/Tutorial",
    icon: Code,
    description: "Recursos para aprender a linguagem funcional Haskell.",
    link: "https://www.haskell.org/learning.html",
  },
  {
    name: "Aprenda Perl",
    category: "Documentação/Tutorial",
    icon: Code,
    description: "Materiais e tutoriais para aprender Perl.",
    link: "https://www.perl.org/learn.html",
  },
  {
    name: "FreeBooks4Developers",
    category: "Livros Gratuitos",
    icon: Code,
    description: "Repositório de livros gratuitos para desenvolvedores.",
    link: "https://www.freebooks4developers.com",
  },
  {
    name: "O’Reilly (Teste Gratuito)",
    category: "Livros/Cursos",
    icon: Code,
    description: "Acesso a livros e cursos tecnológicos, com teste gratuito.",
    link: "https://www.oreilly.com",
  },
  {
    name: "Eloquent JavaScript (Livro Interativo)",
    category: "Livro Interativo",
    icon: Code,
    description: "Livro interativo gratuito para aprender JavaScript.",
    link: "https://eloquentjavascript.net",
  },
  {
    name: "Learn You a Haskell",
    category: "Livro/Tutorial",
    icon: Code,
    description: "Guia divertido e acessível para aprender Haskell.",
    link: "https://learnyouahaskell.com",
  },
  {
    name: "Python Course EU",
    category: "Tutoriais",
    icon: Code,
    description: "Curso completo e gratuito de Python com exemplos práticos.",
    link: "https://python-course.eu",
  },
  {
    name: "Real Python",
    category: "Tutoriais",
    icon: Code,
    description: "Tutoriais e artigos avançados sobre Python.",
    link: "https://www.realpython.com",
  },
  {
    name: "DigitalOcean – Community Tutorials",
    category: "Tutoriais/Artigos",
    icon: Code,
    description: "Tutoriais e guias sobre desenvolvimento e infraestrutura.",
    link: "https://www.digitalocean.com/community/tutorials",
  },
  {
    name: "Medium – Programação",
    category: "Artigos",
    icon: Code,
    description: "Artigos e histórias sobre programação e tecnologia.",
    link: "https://medium.com/topic/programming",
  },
  {
    name: "DEV Community",
    category: "Comunidade/Artigos",
    icon: Code,
    description:
      "Plataforma colaborativa com artigos e discussões sobre desenvolvimento.",
    link: "https://dev.to",
  },
  {
    name: "Smashing Magazine",
    category: "Artigos",
    icon: Code,
    description: "Artigos e tutoriais focados em design e desenvolvimento web.",
    link: "https://www.smashingmagazine.com",
  },
  {
    name: "Hacker Noon",
    category: "Artigos",
    icon: Code,
    description:
      "Plataforma de artigos e histórias sobre tecnologia e programação.",
    link: "https://hackernoon.com",
  },
  {
    name: "YouTube: ProgrammingKnowledge",
    category: "YouTube",
    icon: Code,
    description: "Canal com tutoriais e cursos de programação.",
    link: "https://www.youtube.com/user/ProgrammingKnowledge",
  },
  {
    name: "YouTube: Traversy Media",
    category: "YouTube",
    icon: Code,
    description:
      "Canal com tutoriais de desenvolvimento web e tecnologias modernas.",
    link: "https://www.youtube.com/user/TraversyMedia",
  },
  {
    name: "YouTube: FreeCodeCamp",
    category: "YouTube",
    icon: Code,
    description:
      "Canal oficial do FreeCodeCamp com vídeos tutoriais e cursos completos.",
    link: "https://www.youtube.com/freecodecamp",
  },
  {
    name: "YouTube: TheNewBoston",
    category: "YouTube",
    icon: Code,
    description:
      "Canal com uma vasta coleção de tutoriais sobre programação e desenvolvimento.",
    link: "https://www.youtube.com/user/thenewboston",
  },
  {
    name: "YouTube: Mozilla Developers",
    category: "YouTube",
    icon: Code,
    description:
      "Canal com vídeos sobre desenvolvimento web e tecnologias Mozilla.",
    link: "https://www.youtube.com/user/Mozilladevelopers",
  },
  {
    name: "YouTube: CS50",
    category: "YouTube",
    icon: Code,
    description:
      "Canal oficial do curso CS50 de Harvard sobre ciência da computação.",
    link: "https://www.youtube.com/c/cs50",
  },
  {
    name: "YouTube: Academind",
    category: "YouTube",
    icon: Code,
    description:
      "Canal com tutoriais detalhados sobre desenvolvimento web e frameworks modernos.",
    link: "https://www.youtube.com/c/Academind",
  },
  {
    name: "YouTube: Programming with Mosh",
    category: "YouTube",
    icon: Code,
    description:
      "Tutoriais completos e organizados sobre diversas linguagens e frameworks.",
    link: "https://www.youtube.com/c/ProgrammingwithMosh",
  },
  {
    name: "YouTube: The Net Ninja",
    category: "YouTube",
    icon: Code,
    description:
      "Canal com tutoriais práticos de desenvolvimento web e programação.",
    link: "https://www.youtube.com/c/TheNetNinja",
  },
  {
    name: "YouTube: CodeCourse",
    category: "YouTube",
    icon: Code,
    description:
      "Canal com cursos e tutoriais para desenvolvimento web e programação.",
    link: "https://www.youtube.com/c/CodeCourse",
  },
  {
    name: "YouTube: Clever Programmer",
    category: "YouTube",
    icon: Code,
    description:
      "Canal com tutoriais e dicas para programadores e empreendedores digitais.",
    link: "https://www.youtube.com/c/CleverProgrammer",
  },
  {
    name: "YouTube: Dev Ed",
    category: "YouTube",
    icon: Code,
    description:
      "Canal com vídeos educativos sobre design, desenvolvimento e programação.",
    link: "https://www.youtube.com/c/DevEd",
  },
  {
    name: "YouTube: Tech With Tim",
    category: "YouTube",
    icon: Code,
    description:
      "Canal com tutoriais e projetos de programação, especialmente em Python.",
    link: "https://www.youtube.com/c/TechWithTim",
  },
  {
    name: "YouTube: Sentdex",
    category: "YouTube",
    icon: Code,
    description:
      "Canal focado em tutoriais de Python, machine learning e ciência de dados.",
    link: "https://www.youtube.com/c/sentdex",
  },
  {
    name: "Pluralsight – Cursos Gratuitos (Teste)",
    category: "Plataforma de Cursos",
    icon: Code,
    description:
      "Cursos de tecnologia e desenvolvimento com acesso gratuito por tempo limitado.",
    link: "https://www.pluralsight.com/free",
  },
  {
    name: "Edureka – Cursos Gratuitos",
    category: "Plataforma de Cursos",
    icon: Code,
    description:
      "Cursos gratuitos em diversas áreas da tecnologia e programação.",
    link: "https://www.edureka.co/free-courses",
  },
  {
    name: "Safari Books Online (Teste Gratuito)",
    category: "Livros/Cursos",
    icon: Code,
    description:
      "Acesso a uma vasta biblioteca de livros e cursos de tecnologia com teste gratuito.",
    link: "https://www.safaribooksonline.com",
  },
  {
    name: "Git Book – Aprenda Git",
    category: "Tutoriais",
    icon: Code,
    description:
      "Livro interativo gratuito para aprender Git e controle de versão.",
    link: "https://www.git-tower.com/learn/git/ebook/en/",
  },
  {
    name: "Tutorial Oficial do Python",
    category: "Documentação",
    icon: Code,
    description: "Tutorial oficial da linguagem Python com exemplos práticos.",
    link: "https://docs.python.org/3/tutorial/",
  },
  {
    name: "Tutorial Oficial do Java",
    category: "Documentação",
    icon: Code,
    description:
      "Tutorial oficial da linguagem Java com orientações passo a passo.",
    link: "https://www.java.com/en/download/help/tutorial.html",
  },
  {
    name: "Scala Exercises",
    category: "Tutoriais Interativos",
    icon: Code,
    description:
      "Plataforma interativa para aprender Scala com exercícios práticos.",
    link: "https://www.scala-exercises.org",
  },
  {
    name: "Rust Cookbook",
    category: "Tutoriais",
    icon: Code,
    description:
      "Coleção de receitas e exemplos para aprender Rust na prática.",
    link: "https://rust-lang-nursery.github.io/rust-cookbook",
  },
  {
    name: "Documentação do Ruby",
    category: "Documentação",
    icon: Code,
    description: "Documentação oficial e recursos para aprender Ruby.",
    link: "https://www.ruby-lang.org/en/documentation/",
  },
  {
    name: "Tutorial do Django",
    category: "Tutoriais",
    icon: Code,
    description:
      "Tutorial oficial para começar a desenvolver com o framework Django.",
    link: "https://www.djangoproject.com/start/",
  },
  {
    name: "Tutorial do Flask",
    category: "Tutoriais",
    icon: Code,
    description:
      "Tutorial oficial para aprender a desenvolver aplicações com Flask.",
    link: "https://flask.palletsprojects.com/en/2.0.x/tutorial/",
  },
  {
    name: "Tutorial do Angular",
    category: "Tutoriais",
    icon: Code,
    description:
      "Tutorial oficial para aprender Angular e desenvolvimento front-end.",
    link: "https://angular.io/tutorial",
  },
  {
    name: "Tutorial do React",
    category: "Tutoriais",
    icon: Code,
    description: "Tutorial oficial para aprender os fundamentos do React.",
    link: "https://reactjs.org/tutorial/tutorial.html",
  },
  {
    name: "Guia do Vue.js",
    category: "Tutoriais",
    icon: Code,
    description:
      "Guia oficial para aprender Vue.js e construir interfaces interativas.",
    link: "https://vuejs.org/v2/guide",
  },
  {
    name: "Documentação do TypeScript",
    category: "Documentação",
    icon: Code,
    description: "Documentação oficial e guias para aprender TypeScript.",
    link: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "Tutorial de C++",
    category: "Tutoriais",
    icon: Code,
    description:
      "Tutorial abrangente para aprender C++ com exemplos e explicações.",
    link: "https://www.cplusplus.com/doc/tutorial/",
  },
  {
    name: "Exercism – Pratique Coding",
    category: "Desafios/Prática",
    icon: Code,
    description:
      "Plataforma para praticar programação através de desafios e feedback da comunidade.",
    link: "https://exercism.io",
  },
  {
    name: "HackerEarth – Exercícios de Programação",
    category: "Desafios/Prática",
    icon: Code,
    description:
      "Exercícios e desafios para aprimorar suas habilidades de programação.",
    link: "https://www.hackerearth.com/practice/",
  },
  {
    name: "Project Euler – Desafios Matemáticos",
    category: "Desafios/Prática",
    icon: Code,
    description:
      "Desafios matemáticos e problemas de programação para desenvolver lógica.",
    link: "https://projecteuler.net",
  },
  {
    name: "CodeChef – Desafios de Programação",
    category: "Desafios/Competição",
    icon: Code,
    description: "Plataforma com desafios e competições de programação.",
    link: "https://www.codechef.com",
  },
  {
    name: "SPOJ – Problemas de Programação",
    category: "Desafios/Prática",
    icon: Code,
    description:
      "Plataforma com uma vasta coleção de problemas de programação.",
    link: "https://www.spoj.com",
  },
  {
    name: "Udacity (Homepage)",
    category: "Plataforma de Cursos",
    icon: Code,
    description:
      "Plataforma de cursos online focados em tecnologia e programação.",
    link: "https://www.udacity.com",
  },
  {
    name: "FutureLearn",
    category: "Plataforma de Cursos",
    icon: Code,
    description:
      "Cursos online gratuitos e pagos de diversas áreas, incluindo programação.",
    link: "https://www.futurelearn.com",
  },
  {
    name: "TutorialsPoint",
    category: "Tutoriais",
    icon: Code,
    description:
      "Tutoriais abrangentes sobre diversas linguagens e tecnologias.",
    link: "https://www.tutorialspoint.com",
  },
  {
    name: "Runoob (菜鸟教程)",
    category: "Tutoriais",
    icon: Code,
    description:
      "Tutoriais e referências para aprender desenvolvimento web e programação.",
    link: "https://www.runoob.com",
  },
  {
    name: "GitHub – Awesome Lists",
    category: "Repositório",
    icon: Code,
    description: "Coleção de listas com recursos e ferramentas de programação.",
    link: "https://github.com/sindresorhus/awesome",
  },
  {
    name: "Awesome Java",
    category: "Repositório",
    icon: Code,
    description: "Lista de recursos e ferramentas para programadores Java.",
    link: "https://github.com/akullpp/awesome-java",
  },
  {
    name: "Awesome Python",
    category: "Repositório",
    icon: Code,
    description: "Lista de recursos, bibliotecas e ferramentas para Python.",
    link: "https://github.com/vinta/awesome-python",
  },
  {
    name: "Awesome Go",
    category: "Repositório",
    icon: Code,
    description: "Lista de recursos e ferramentas para a linguagem Go.",
    link: "https://github.com/avelino/awesome-go",
  },
  {
    name: "Awesome Elixir",
    category: "Repositório",
    icon: Code,
    description: "Lista de recursos e bibliotecas para a linguagem Elixir.",
    link: "https://github.com/krzjoa/awesome-elixir",
  },
  {
    name: "Awesome PHP",
    category: "Repositório",
    icon: Code,
    description: "Lista de recursos e ferramentas para programadores PHP.",
    link: "https://github.com/ziadoz/awesome-php",
  },
  {
    name: "Linux.org – Recursos e Tutoriais",
    category: "Comunidade/Tutoriais",
    icon: Code,
    description: "Recursos e tutoriais sobre Linux e software livre.",
    link: "https://www.linux.org",
  },
  {
    name: "Udacity – Intro to Machine Learning",
    category: "Curso",
    icon: Code,
    description:
      "Curso introdutório sobre machine learning com projetos práticos.",
    link: "https://www.udacity.com/course/intro-to-machine-learning--ud120",
  },
  {
    name: "Google – Machine Learning Crash Course",
    category: "Curso",
    icon: Code,
    description:
      "Curso rápido e prático de machine learning oferecido pelo Google.",
    link: "https://developers.google.com/machine-learning/crash-course",
  },
  {
    name: "Fast.ai – Cursos de Deep Learning",
    category: "Curso",
    icon: Code,
    description: "Cursos gratuitos de deep learning e inteligência artificial.",
    link: "https://www.fast.ai",
  },
  {
    name: "TensorFlow Tutorials",
    category: "Tutoriais",
    icon: Code,
    description:
      "Tutoriais oficiais para aprender TensorFlow e machine learning.",
    link: "https://www.tensorflow.org/tutorials",
  },
  {
    name: "Keras – Exemplos",
    category: "Tutoriais",
    icon: Code,
    description: "Exemplos práticos para aprender a usar a biblioteca Keras.",
    link: "https://keras.io/examples/",
  },
  {
    name: "PyTorch Tutorials",
    category: "Tutoriais",
    icon: Code,
    description:
      "Tutoriais oficiais para aprender a usar a biblioteca PyTorch.",
    link: "https://pytorch.org/tutorials/",
  },
  {
    name: "Scikit-Learn – Tutoriais",
    category: "Tutoriais",
    icon: Code,
    description:
      "Tutoriais para aprender a usar a biblioteca Scikit-Learn em Python.",
    link: "https://scikit-learn.org/stable/tutorial/index.html",
  },
  {
    name: "Dataquest – Cursos de Data Science",
    category: "Plataforma de Cursos",
    icon: Code,
    description: "Cursos interativos para aprender data science e programação.",
    link: "https://www.dataquest.io",
  },
  {
    name: "Data School",
    category: "Tutoriais",
    icon: Code,
    description:
      "Tutoriais e vídeos para aprender ciência de dados e machine learning.",
    link: "https://www.dataschool.io",
  },
  {
    name: "Analytics Vidhya",
    category: "Tutoriais/Artigos",
    icon: Code,
    description: "Artigos e tutoriais sobre ciência de dados e análise.",
    link: "https://www.analyticsvidhya.com",
  },
  {
    name: "MIT OpenCourseWare – Ciência da Computação",
    category: "Curso",
    icon: Code,
    description:
      "Cursos e materiais didáticos gratuitos do MIT em ciência da computação.",
    link: "https://ocw.mit.edu/courses/find-by-topic/#cat=engineering&subcat=computerscience",
  },
  {
    name: "Stanford Online Courses",
    category: "Curso",
    icon: Code,
    description:
      "Cursos online gratuitos e pagos de Stanford, abrangendo diversas áreas da tecnologia.",
    link: "https://online.stanford.edu/courses",
  },
  {
    name: "Harvard Online Learning",
    category: "Curso",
    icon: Code,
    description:
      "Plataforma com cursos online gratuitos e pagos da Harvard University.",
    link: "https://online-learning.harvard.edu",
  },
  {
    name: "Microsoft Learn",
    category: "Plataforma de Cursos",
    icon: Code,
    description:
      "Plataforma de aprendizado da Microsoft com cursos e tutoriais interativos.",
    link: "https://docs.microsoft.com/en-us/learn/",
  },
  {
    name: "Replit",
    category: "Ambiente de Desenvolvimento",
    icon: Code,
    description:
      "Plataforma online para codificação colaborativa e execução de projetos.",
    link: "https://replit.com",
  },
  {
    name: "Project Based Learning (GitHub)",
    category: "Repositório",
    icon: Code,
    description: "Coleção de projetos para aprender programação na prática.",
    link: "https://github.com/tuvtran/project-based-learning",
  },
  {
    name: "Learn C The Hard Way",
    category: "Curso/Tutorial",
    icon: Code,
    description: "Curso intensivo e prático para aprender a programar em C.",
    link: "https://learncodethehardway.org",
  },
  {
    name: "SQLZoo",
    category: "Tutoriais Interativos",
    icon: Code,
    description: "Tutoriais interativos para aprender e praticar SQL.",
    link: "https://sqlzoo.net",
  },
  {
    name: "Practice Python",
    category: "Desafios/Prática",
    icon: Code,
    description:
      "Exercícios e desafios para melhorar suas habilidades em Python.",
    link: "https://www.practicepython.org",
  },
  {
    name: "RubyMonk",
    category: "Tutoriais Interativos",
    icon: Code,
    description:
      "Plataforma interativa para aprender Ruby com exercícios práticos.",
    link: "https://rubymonk.com",
  },
  {
    name: "CodeNewbie",
    category: "Comunidade/Educação",
    icon: Code,
    description: "Recursos e comunidade para iniciantes em programação.",
    link: "https://www.codenewbie.org",
  },
  {
    name: "Egghead.io",
    category: "Tutoriais em Vídeo",
    icon: Code,
    description:
      "Vídeos curtos e objetivos para aprender JavaScript e tecnologias web.",
    link: "https://egghead.io",
  },
  {
    name: "CSS-Tricks",
    category: "Tutoriais/Artigos",
    icon: Code,
    description:
      "Tutoriais, dicas e referências sobre CSS e desenvolvimento web.",
    link: "https://css-tricks.com",
  },
  {
    name: "JavaScript30",
    category: "Desafio/Curso",
    icon: Code,
    description:
      "Desafio de 30 dias para aprimorar suas habilidades em JavaScript puro.",
    link: "https://javascript30.com",
  },
  {
    name: "CSSBattle",
    category: "Desafios/Prática",
    icon: Code,
    description:
      "Desafios divertidos para testar e aprimorar seu conhecimento em CSS.",
    link: "https://cssbattle.dev",
  },
  {
    name: "Overreacted",
    category: "Artigos/Blog",
    icon: Code,
    description:
      "Blog com insights e artigos sobre React e desenvolvimento web.",
    link: "https://overreacted.io",
  },
  {
    name: "C++ Reference (CPPReference)",
    category: "Documentação",
    icon: Code,
    description: "Referência completa e detalhada para a linguagem C++.",
    link: "https://en.cppreference.com",
  },
  {
    name: "Rust by Example",
    category: "Tutoriais",
    icon: Code,
    description:
      "Exemplos práticos para aprender a linguagem Rust de forma interativa.",
    link: "https://doc.rust-lang.org/rust-by-example",
  },
  {
    name: "Elm Guide",
    category: "Documentação/Tutorial",
    icon: Code,
    description:
      "Guia oficial para aprender Elm e programação funcional para web.",
    link: "http://elm-lang.org/guide",
  },
  {
    name: "Svelte Tutorial",
    category: "Tutoriais",
    icon: Code,
    description:
      "Tutorial interativo para aprender o framework Svelte para desenvolvimento web.",
    link: "https://svelte.dev/tutorial",
  },
  {
    name: "ReasonML",
    category: "Documentação",
    icon: Code,
    description: "Recursos e documentação para aprender a linguagem ReasonML.",
    link: "https://reasonml.github.io",
  },
  {
    name: "F# for Fun and Profit",
    category: "Tutoriais/Artigos",
    icon: Code,
    description:
      "Recursos e exemplos para aprender F# de forma prática e divertida.",
    link: "https://fsharpforfunandprofit.com",
  },
  {
    name: "Dart Guides",
    category: "Documentação/Tutorial",
    icon: Code,
    description: "Tutoriais e guias oficiais para a linguagem Dart.",
    link: "https://dart.dev/guides",
  },
  {
    name: "Flutter Docs",
    category: "Documentação/Tutorial",
    icon: Code,
    description:
      "Documentação e tutoriais para desenvolvimento de aplicativos com Flutter.",
    link: "https://flutter.dev/docs",
  },
  {
    name: "Ionic Framework Docs",
    category: "Documentação/Tutorial",
    icon: Code,
    description: "Documentação completa para desenvolvimento mobile com Ionic.",
    link: "https://ionicframework.com/docs",
  },
  {
    name: "React Native Tutorial",
    category: "Tutoriais",
    icon: Code,
    description: "Guia oficial para começar a desenvolver com React Native.",
    link: "https://reactnative.dev/docs/tutorial",
  },
  {
    name: "Node.js Docs",
    category: "Documentação",
    icon: Code,
    description: "Documentação oficial para a plataforma Node.js.",
    link: "https://nodejs.org/en/docs",
  },
  {
    name: "Express.js",
    category: "Documentação/Tutorial",
    icon: Code,
    description: "Guia e documentação do framework Express para Node.js.",
    link: "https://expressjs.com",
  },
  {
    name: "Laravel Docs",
    category: "Documentação",
    icon: Code,
    description: "Documentação oficial do framework PHP Laravel.",
    link: "https://laravel.com/docs",
  },
  {
    name: "Spring Guides",
    category: "Tutoriais",
    icon: Code,
    description: "Tutoriais e guias práticos do Spring Framework.",
    link: "https://spring.io/guides",
  },
  {
    name: "Kotlin Docs",
    category: "Documentação",
    icon: Code,
    description: "Documentação oficial para a linguagem Kotlin.",
    link: "https://kotlinlang.org/docs/home.html",
  },
  {
    name: "Swift Docs",
    category: "Documentação",
    icon: Code,
    description: "Recursos e documentação para a linguagem Swift.",
    link: "https://swift.org/documentation",
  },
  {
    name: "R Project",
    category: "Documentação",
    icon: Code,
    description:
      "Site oficial do R, com links para documentação e recursos de aprendizado.",
    link: "https://www.r-project.org",
  },
  {
    name: "Julia Learning",
    category: "Documentação/Tutorial",
    icon: Code,
    description: "Recursos para aprender a linguagem Julia de forma prática.",
    link: "https://julialang.org/learning",
  },
  {
    name: "Elixir Learning",
    category: "Documentação/Tutorial",
    icon: Code,
    description: "Guia oficial e recursos para dominar a linguagem Elixir.",
    link: "https://elixir-lang.org/learning.html",
  },
  {
    name: "Clojure Guides",
    category: "Documentação/Tutorial",
    icon: Code,
    description: "Tutoriais e documentação para a linguagem Clojure.",
    link: "https://clojure.org/guides",
  },
  {
    name: "Google's Python Class",
    category: "Curso/Tutorial",
    icon: Code,
    description:
      "Curso gratuito de Python oferecido pelo Google, com materiais práticos.",
    link: "https://developers.google.com/edu/python",
  },
  {
    name: "Saylor Academy Courses",
    category: "Plataforma de Cursos",
    icon: Code,
    description: "Cursos gratuitos em diversas áreas, incluindo programação.",
    link: "https://www.saylor.org/courses",
  },
  {
    name: "Kaggle Learn",
    category: "Plataforma de Cursos",
    icon: Code,
    description:
      "Cursos interativos focados em ciência de dados e programação.",
    link: "https://www.kaggle.com/learn",
  },
  {
    name: "IBM Cognitive Class",
    category: "Plataforma de Cursos",
    icon: Code,
    description:
      "Plataforma com cursos gratuitos em ciência de dados, IA e programação.",
    link: "https://cognitiveclass.ai",
  },
  {
    name: "DevDocs",
    category: "Documentação",
    icon: Code,
    description:
      "Agregador de documentações para várias linguagens e frameworks.",
    link: "https://devdocs.io",
  },
  {
    name: "Haskell Learning",
    category: "Documentação/Tutorial",
    icon: Code,
    description: "Recursos oficiais para aprender a linguagem Haskell.",
    link: "https://www.haskell.org/learning.html",
  },
  {
    name: "Abdul Bari (YouTube)",
    category: "YouTube",
    icon: Code,
    description:
      "Canal com tutoriais aprofundados sobre algoritmos e estruturas de dados.",
    link: "https://www.youtube.com/channel/UCZCFT11CWBi3MHNlGf019nw",
  },
  {
    name: "GeeksforGeeks Free Courses",
    category: "Plataforma de Cursos",
    icon: Code,
    description:
      "Sessão dedicada a cursos gratuitos na plataforma GeeksforGeeks.",
    link: "https://www.geeksforgeeks.org/free-courses",
  },
  {
    name: "Learn OpenGL",
    category: "Tutoriais",
    icon: Code,
    description: "Guia completo para aprender OpenGL e programação gráfica.",
    link: "https://learnopengl.com",
  },
  {
    name: "GNU Emacs Manual",
    category: "Documentação",
    icon: Code,
    description: "Documentação oficial do editor de texto Emacs.",
    link: "https://www.gnu.org/software/emacs/manual/",
  },
  {
    name: "OpenVim",
    category: "Tutoriais Interativos",
    icon: Code,
    description: "Tutorial interativo para dominar o editor Vim.",
    link: "https://openvim.com",
  },
  {
    name: "Rosetta Code",
    category: "Desafios/Exemplos",
    icon: Code,
    description: "Desafios de programação com soluções em diversas linguagens.",
    link: "https://rosettacode.org",
  },
  {
    name: "CodeProject",
    category: "Artigos/Tutoriais",
    icon: Code,
    description: "Artigos, tutoriais e exemplos práticos para desenvolvedores.",
    link: "https://www.codeproject.com",
  },
  {
    name: "Open Culture – Free Online Courses",
    category: "Plataforma de Cursos",
    icon: Code,
    description:
      "Coletânea de cursos gratuitos, incluindo opções na área de programação.",
    link: "https://www.openculture.com/freeonlinecourses",
  },
  {
    name: "Tutorial Republic",
    category: "Tutoriais",
    icon: Code,
    description:
      "Tutoriais abrangentes sobre várias linguagens e tecnologias web.",
    link: "https://www.tutorialrepublic.com",
  },
  {
    name: "Google Codelabs",
    category: "Tutoriais Interativos",
    icon: Code,
    description:
      "Laboratórios interativos do Google para aprender novas tecnologias.",
    link: "https://codelabs.developers.google.com",
  },
  {
    name: "CodeChef Learn",
    category: "Tutoriais",
    icon: Code,
    description:
      "Recursos e tutoriais gratuitos para aprimorar suas habilidades em programação.",
    link: "https://www.codechef.com/learn",
  },
  {
    name: "Tour of C#",
    category: "Tutoriais",
    icon: Code,
    description:
      "Tutorial interativo para conhecer os fundamentos do C# pela Microsoft.",
    link: "https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp",
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = React.useState("All Tools");
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
      (selectedCategory === "All Tools" ||
        tool.category === selectedCategory) &&
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
                  <Zap className="h-6 w-6 text-primary" />
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
                  className="pl-8"
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
