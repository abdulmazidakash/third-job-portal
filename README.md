# 🌟 Job Portal 🚀

A modern, interactive platform for job seekers and recruiters to connect effortlessly. 

---

## 📖 Description

This project is designed to simplify the job search and hiring process by providing an intuitive user interface and helpful features for both recruiters and job seekers.

---

## 📦 NPM Packages

This project uses the following NPM packages:

| 📦 Package             | 📋 Description                       |
|------------------------|---------------------------------------|
| **Tailwind CSS**       | Modern and responsive CSS framework  |
| **DaisyUI**            | Predefined UI components             |
| **React Router DOM**   | Routing and navigation               |
| **React Hot Toast**    | Interactive toast notifications      |
| **React Icons**        | Sleek and modern icons               |
| **React Helmet**       | Manage dynamic page titles           |

---

## 🖥️  Usage
- Navigate through the site using the Navbar.
- Explore jobs in the All Jobs section.
- Add new jobs via the Add Job feature.
- Apply for jobs and track your applications in My Applications.
---

## 🖥️ Technologies Used

- **React**: Frontend library for building user interfaces.
- **Tailwind CSS**: For creating responsive and attractive designs.
- **DaisyUI**: Predefined components for rapid development.
- **React Router DOM**: For managing routes and navigation.
- **React Icons**: Modern icons for better user interaction.
- **React Hot Toast**: Customizable toast notifications.
- **React Helmet**: Dynamically updates the page title.

---

## 🌐 Live Demo

🔗 **[Live Project Link](https://three-job-portal.netlify.app/)**

---

## ✨ Features

- Local storage integration for data save and removal.
- Favorite button with disable state after selection.
- Sorting by rating and popularity.
- Active tab highlighting for better user navigation.

---

## 📂 File Structure

```plaintext
src/
├── assets/                   # Static assets
├── components/               # Reusable components
│   └── HotJobCard.jsx
├── context/                  # Context API files
│   ├── AuthContext.jsx
│   └── AuthProvider.jsx
├── firebase/                 # Firebase configuration
│   └── firebase.config.js
├── hooks/                    # Custom hooks
│   ├── useAuth.jsx
│   ├── useAxiosSecure.jsx
│   └── useJobs.jsx
├── layouts/                  # Layout components
│   └── MainLayout.jsx
├── pages/                    # Application pages
│   ├── Home/
│   │   ├── Banner.jsx
│   │   ├── Home.jsx
│   │   ├── HotJobs.jsx
│   │   └── JobDetails.jsx
│   ├── AddJob.jsx
│   ├── AllJobs.jsx
│   ├── MyApplication.jsx
│   ├── MyPostedJobs.jsx
│   ├── MyProfile.jsx
│   ├── UpdateProfile.jsx
│   └── ViewApplications.jsx
├── router/                   # Routing files
│   ├── PrivateRoute.jsx
│   └── router.jsx
├── shared/                   # Shared components
│   ├── Footer.jsx
│   ├── Login.jsx
│   ├── Navbar.jsx
│   ├── Register.jsx
│   └── SocialLogin.jsx
└── App.css
└── App.jsx
└── index.css
└── main.jsx
