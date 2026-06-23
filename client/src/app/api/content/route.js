export async function GET() {
  return Response.json({
    about: {
      title: "About Us",
      description: "We build modern web applications"
    },
    services: [
      { title: "Web Development" },
      { title: "UI/UX Design" },
      { title: "Backend APIs" }
    ],
    projects: [
      { name: "Project A" },
      { name: "Project B" }
    ],
    contact: {
      email: "demo@site.com"
    }
  });
}