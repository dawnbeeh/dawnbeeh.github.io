# 🐝 Dawnbee's Portfolio

A modern, responsive portfolio website showcasing my projects and experience as a Computer Science and Math student at Northeastern University.

## Live Demo

**[View Portfolio](https://dawnbeeh.github.io)**

## About

Hi there! I'm Dawnbee, a Computer Science and Math student at Northeastern University. I love creating things through code and enjoy learning new technologies along the way. Outside of class, I'm always curious, collaborative, and excited to take on new challenges.

This portfolio showcases my journey in software development, featuring projects ranging from web applications to AI-powered solutions.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Project Showcase**: Detailed project views with multiple images
- **Skills Visualization**: Organized display of technical skills
- **Experience Timeline**: Professional experience and achievements
- **Custom Bee Icon**: Personalized favicon reflecting the brand

## Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: CSS Modules
- **Icons**: Bootstrap Icons
- **Animations**: AOS (Animate On Scroll)
- **Deployment**: GitHub Pages
- **Build Tool**: Vite

## Project Structure

```
src/
├── components/
│   ├── common/           # Shared components (Navbar, Footer)
│   └── sections/         # Page sections
│       ├── Home/         # Landing page
│       ├── About/        # About me section
│       ├── Skills/       # Technical skills
│       ├── Experience/   # Work experience
│       └── Projects/     # Project showcase with detailed views
├── data/                 # Static data (projects, skills, experience)
├── assets/               # Images and media files
└── styles/              # Global styles
```

## Featured Projects

### 🌐 Boston Neighborhood Social Web
- **Tech Stack**: MongoDB, React, Node.js, TypeScript
- **Live Demo**: [boston-neighborhood.netlify.app](https://boston-neighborhood.netlify.app)
- Social networking web application for local community interaction

### 📚 Canvas Clone Web App
- **Tech Stack**: React, TypeScript
- **Live Demo**: [dawnbeeh-kambaz.netlify.app](http://dawnbeeh-kambaz.netlify.app)
- Learning management system clone with full functionality

### 🧠 Brain CT Image Hemorrhage Segmentation
- **Tech Stack**: Deep Learning, Medical Image Analysis
- AI-powered medical image analysis for detecting hemorrhages in brain CT scans

### 🍽️ Restaurant UI/UX Design
- **Tool**: Figma
- **Live Demo**: [Figma Prototype](https://www.figma.com/proto/SjSMznbgZyYBpKo8aaDXHj/Hwang_final?node-id=4007-509&t=Rv98GDHB6CfUdBQG-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=4007%3A509)
- Modern restaurant website design

### 📅 Calendar App (Java, MVC)
- **Tech Stack**: Java, MVC Architecture
- Object-oriented calendar application with comprehensive testing

### 🎯 EchoBoard Ad Overlay
- **Tech Stack**: AI, Background Recognition
- AI-powered meeting platform with contextual ad injection

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dawnbeeh/ProfilePage.git
   cd ProfilePage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## Customization

### Adding New Projects

1. Add project images to `src/assets/images/`
2. Update `src/data/projects.js` with project details
3. Create detailed view component in `src/components/sections/Projects/details/`
4. Add component mapping in `Projects.jsx`

### Modifying Content

- **About Section**: Edit `src/components/sections/About/About.jsx`
- **Skills**: Update `src/data/skills.js`
- **Experience**: Modify `src/data/experiences.js`
- **Styling**: CSS Modules in respective component folders

## Contributing

While this is a personal portfolio, suggestions and improvements are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [@dawnbeeh](https://github.com/dawnbeeh)
- **Portfolio**: [dawnbeeh.github.io](https://dawnbeeh.github.io)

## Acknowledgments

- React and Vite teams for the excellent development tools
- Bootstrap Icons for the icon library
- AOS library for smooth scroll animations
- GitHub Pages for hosting

---



🐝 *Built with ❤️ by Dawnbee*