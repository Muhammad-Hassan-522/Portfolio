import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  projects: Project[] = [
    {
      title: 'VyntraCare',
      slug: 'vyntracare',
      description:
        'A healthcare supply chain platform unifying procurement, inventory management, and compliance with secure, role-based workflows.',
      fullDescription: `
VyntraCare is a production-grade healthcare procurement and inventory platform designed to streamline ordering, approvals, and compliance for healthcare facilities.

I led the end-to-end development of the platform, owning system architecture, frontend, backend, and data integrity. The system enforces facility-scoped data access using robust role-based access control implemented via middleware and server-side authorization checks.

Atomic and rollback-safe workflows were implemented using Postgres RPCs to handle checkout, approvals, and facility provisioning reliably. The platform also includes AI-ready modules such as a clinical support chatbot and automated PDF extraction pipelines for compliance documents.

The system is built with scalability, security, and transactional correctness as first-class concerns.
      `,
      features: [
        'End-to-end healthcare procurement and inventory workflows',
        'Facility-scoped RBAC with server-side enforcement',
        'Atomic checkout, approval, and provisioning workflows',
        'Postgres RPC-based transactional logic',
        'AI-ready clinical chatbot and document extraction pipelines',
        'Secure authentication, storage, and payments integration',
      ],
      techStack: [
        'Next.js',
        'TypeScript',
        'Supabase (PostgreSQL, Auth, Storage)',
        'Stripe',
        'RBAC',
        'Transactional Workflows',
      ],
      githubUrl: '',
      liveUrl: '',
    },
    {
      title: 'EduVerse AI',
      slug: 'eduverse-ai',
      description:
        'An AI-powered, multi-tenant e-learning platform with secure role-based portals and advanced analytics.',
      fullDescription: `
EduVerse AI is a Final Year Project focused on building a scalable, multi-tenant Learning Management System that serves multiple institutions on a shared platform with strict data isolation.

I led a 5-member team and owned core system modules including the quiz engine, course management, and tenant administration. The quiz system was implemented end-to-end, covering quiz authoring, student attempts, automatic grading, and analytics.

Role-based portals were designed for super-admins, institution admins, instructors, and students. MongoDB aggregation pipelines were used to power analytics dashboards for performance tracking and reporting. AI capabilities were integrated using LangChain for intelligent learning assistance.
      `,
      features: [
        'Multi-tenant LMS architecture with secure tenant isolation',
        'Role-based portals for admins, instructors, and students',
        'End-to-end quiz system with auto-grading and analytics',
        'Course management and super-admin tenant controls',
        'Analytics dashboards powered by aggregation pipelines',
        'AI-powered learning assistance using LLMs',
      ],
      techStack: [
        'Angular 19',
        'FastAPI',
        'MongoDB',
        'LangChain',
        'Python',
        'RBAC',
      ],
      githubUrl:
        'https://github.com/Muhammad-Hassan-522/EduVerse-AI-backend.git',
      liveUrl: '',
    },
    {
      title: 'ScrapUncle',
      slug: 'scrapuncle',
      description:
        'A role-based scrap pickup management platform with real-time communication and secure authorization.',
      fullDescription: `
ScrapUncle is a full-stack scrap pickup management system designed to coordinate users, dealers, and administrators through clearly defined workflows.

The platform implements role-based access control using JWT and claims-based authorization. Real-time chat functionality was built using SignalR to enable live communication between users and dealers.

I designed the relational database schema, implemented migrations using Entity Framework Core, and ensured secure and scalable API design using ASP.NET Core.
      `,
      features: [
        'Role-based system for Users, Dealers, and Admins',
        'JWT-based authentication and claims-based authorization',
        'Real-time chat using SignalR',
        'Relational database design and EF Core migrations',
        'Secure and scalable REST API design',
      ],
      techStack: [
        'ASP.NET Core',
        'C#',
        'SQL Server',
        'JWT',
        'SignalR',
        'Entity Framework Core',
      ],
      githubUrl: '',
      liveUrl: '',
    },
  ];

  getProjects() {
    return this.projects;
  }
}
