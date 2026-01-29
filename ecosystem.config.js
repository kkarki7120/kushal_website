module.exports = {
  apps: [
    {
      name: "kushal-portfolio",
      cwd: "/home/ubuntu/kushal_website",
      script: "npm",
      args: "start",
      interpreter: "none",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      },
      post_update: "npm install && npx prisma generate && npm run build"
    }
  ]
};
