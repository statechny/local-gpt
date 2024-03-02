# Use the official Node.js 20 image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy the package.json and pnpm-lock.yaml files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of your application's code
COPY . .

# Build your Next.js app
RUN pnpm build

# Expose the port your app runs on
EXPOSE 3000

# Command to run your app
CMD ["pnpm", "run", "docker:start"]
