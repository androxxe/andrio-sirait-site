# Andrio Sirait Site

This simple landing page & portfolio made with Next.js 13 with App Router

_by Andrio Sirait_

[Facebook](https://www.facebook.com/yangngambiltaik/) -
[Linked-In](https://www.linkedin.com/in/andriosirait/)

### **Demo: [https://www.andriosirait.com/](https://www.andriosirait.com/)** ###

![Andrio Sirait](/thumbnail.png)

## Features

- Profile Page
- Resume Page
- Portfolio system with filter by **Technology** used and **Platform**, you can also add image and caption, tech stack used, role and demo access
- Customizeable

## Stack

- [Next.js 13](https://nextjs.org) - The React Framework for the Web
- [Tailwindcss](https://tailwindcss.com) - A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup
- [Type Writter JS](https://github.com/tameemsafi/typewriterjs) - A simple JS plugin for cool typewritter effect
- [Framer Motion](https://www.framer.com/motion/) - An animation library for React

## Project structure

```
│   # Page files
├─ src
|   ├─ app
│   │  └── page.tsx # React pages
│   ├─ components
│   │  └── # React component files
│   └─ data
│      └── # data in JSON
└── public
```

## How To Customize

- **Change Color**

  Open **tailwind.config.js** change all colors primary & background section

- **Change Data**

  We have 6 json file (profile, experiences, skills, portfolios, technologies, educations) you can change the object value by yourself, but remember **not to change the object key**

## Getting Started

First, install dependencies:

```bash
yarn install
# or
npm install
```

Then, run the development server:

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/andrio-sirait-site)

1. Push your code to a GitHub repository
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Add environment variables (if using Umami analytics):
   - `UMAMI_URL` - Your Umami tracking script URL
   - `UMAMI_WEBSITE_ID` - Your Umami website ID
5. Deploy!

### Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Node.js:

- **Netlify**: Use the Next.js build plugin
- **Railway**: Connect your GitHub repo and deploy
- **AWS Amplify**: Import from GitHub and configure build settings
- **Docker**: Build using the provided Dockerfile (if available)

**Build Command:** `npm run build` or `yarn build`

**Start Command:** `npm run start` or `yarn start`

**Node Version:** 18.x or higher