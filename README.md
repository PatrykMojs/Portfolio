# Portfolio Website

Personal portfolio website built with **React**, **TypeScript** and **Vite**.

The project presents my experience, skills, education, certificates and selected software projects in a clean and responsive web interface.

## Overview

This portfolio was created as a personal developer website to showcase my work as a .NET Developer focused on practical business applications, integrations, automation tools and AI-assisted software projects.

The website includes information about my technical background, professional experience, education, certificates, technology stack and selected projects from my GitHub profile.

## Features

- Responsive portfolio layout
- Sections for experience, education, certificates and projects
- Technology stack presentation
- Multilingual support
- Contact form integration
- Clean component-based React structure
- Modern frontend setup with Vite and TypeScript

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- CSS

### Libraries & Tools

- EmailJS
- i18next
- react-i18next
- flag-icons
- ESLint

## Project Structure

```txt
Portfolio/
├── public/              # Static files
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # Reusable UI, layout and section components
│   ├── context/         # Application context, e.g. language handling
│   ├── data/            # Portfolio data: projects, experience, education, certificates
│   ├── App.tsx          # Main application component
│   ├── App.css          # Main styles
│   ├── index.css        # Global styles
│   └── main.tsx         # Application entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Main Sections

- **About Me** — short introduction and developer profile
- **Experience** — professional background and commercial experience
- **Projects** — selected portfolio projects with technologies and links
- **Education** — academic background
- **Certificates** — completed courses and certifications
- **Tech Stack** — technologies and tools used in my projects
- **Contact** — contact form and social links

## Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/PatrykMojs/Portfolio.git
```

Go to the project directory:

```bash
cd Portfolio
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Environment Variables

If you use EmailJS or other external services, configure the required environment variables locally.

Example:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Do not commit real private configuration values to the repository.

## Purpose of the Project

The main goal of this project is to create a professional online portfolio that presents my work, technical skills and selected projects in one place.

It also serves as a frontend project demonstrating:

- React component structure
- TypeScript usage
- responsive UI design
- multilingual interface
- integration with external frontend services
- clean project organization

## Future Improvements

- Add more detailed project case studies
- Add screenshots and live demo links for selected projects
- Improve accessibility
- Add carefully selected animations without affecting performance
- Add automated deployment workflow
- Add tests for selected components

## Author

**Patryk Meus**

- GitHub: [PatrykMojs](https://github.com/PatrykMojs)
- LinkedIn: [Patryk Meus](https://www.linkedin.com/in/patryk-meus-493882280/)

## License

This project is intended for portfolio and personal presentation purposes.
