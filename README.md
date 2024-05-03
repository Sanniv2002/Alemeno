# Alemeno Assignment

Here is a demonstration video to the project:
- [Google Drive](https://drive.google.com/file/d/1Ky9Ll8nzApiGu4tBUrUi7cyFt6lrp_cs/view?usp=sharing)

### Prerequisites

Before setting up the project locally, ensure that you have the following software installed:

- [Node.js](https://nodejs.org/) (v14 or higher)

  ## Technologies Used

- **Frontend:**
  - React: JavaScript library for building user interfaces.
  - Recoil: State management for the frontend.
  - Tailwind CSS: A utility-first CSS framework for styling.
  - Axios: A library for data fetching
  - React-router-dom: Libray for routing

## Steps to run the project locally

Follow these steps to set up the Course Listing project locally:

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/Sanniv2002/Alemeno.git
   ```

2. Navigate to the project directory:
   ```
   cd Alemeno
   ```
3. Install Dependencies:
   ```
   npm i
   ```
4. Run the project locally in dev mode
   ```
   npm run dev
   ```

### API Reference

I have deployed a REST API at [https://course.up.railway.app/courses](-https://course.up.railway.app/courses) this also has endpoints such as [https://course.up.railway.app/courses/1](-https://course.up.railway.app/courses/1) on which on a GET Request, the API responds back with all the courses and the particular course respectively. Moreover a put request on [https://course.up.railway.app/courses/like?id=102](-https://course.up.railway.app/courses/like?id=102) will increase the number of likes on that particular course.
