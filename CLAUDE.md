# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (runs on port 8080)
- **Build for production**: `npm run build`
- **Build for development**: `npm run build:dev`
- **Lint code**: `npm run lint`
- **Preview production build**: `npm run preview`

## Project Architecture

This is a React website for Project Chittoor, a sustainability initiative focused on transforming rural communities through five core pillars. The project uses:

- **React 18** with TypeScript and Vite
- **shadcn/ui** component library with Radix UI primitives
- **TailwindCSS** for styling with custom Chittoor brand colors
- **React Router** for navigation between pages
- **TanStack Query** for state management
- **Framer Motion** for animations

### Key Application Structure

**Main Pages:**
- `/` - Homepage (Index.tsx) with Hero, About Projects, and Contact sections
- `/pillars` - Detailed view of the five sustainability pillars
- `/*` - 404 Not Found page

**Core Components:**
- `Navbar` - Main navigation with mobile responsiveness
- `Hero` - Landing section with call-to-action
- `AboutProjectsSection` - Overview of project components
- `PillarCard` and `PillarDialog` - Interactive pillar presentation
- `ContactSection` and `Footer` - Contact information and social links

**Data Structure:**
The five pillars data is centralized in `src/data/pillarData.tsx` with detailed content including:
- Renewable Energy (agrivoltaics, solar infrastructure)
- Agro-Wellness Tourism (farm tours, Ayurveda retreats)
- Transformative Education (digital learning hubs)
- Test Bed for Innovation (IoT, data analytics)
- Sustainable Agriculture (forest farms, water management)

### Styling System

**Custom Brand Colors (Tailwind):**
- `chittoor-green` - Primary sustainability theme
- `chittoor-blue` - Education and innovation theme
- `chittoor-earth` - Agriculture and wellness theme
- `xcelerator-purple/indigo/pink/teal` - Accent colors

**Component Patterns:**
- All UI components follow shadcn/ui conventions in `src/components/ui/`
- Path alias `@/` maps to `src/` directory
- Components use TypeScript interfaces for props
- Responsive design with mobile-first approach

### Key Development Notes

- The project uses Lovable platform integration with component tagging in development mode
- Custom animations defined in Tailwind config (float, bounce-subtle, pulse-soft)
- Image assets primarily use Unsplash URLs for stock photography
- No testing framework is currently configured
- ESLint is configured for code quality