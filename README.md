# 🍽️ MenuCard – Digital Recipe Explorer

**MenuCard** is a digital menu card web application where users can conveniently explore a wide range of recipes. The app is designed to deliver a seamless and organized experience for users who love cooking or discovering new dishes.

This project was completely built and deployed by me, including development with Angular and deployment on AWS EC2 using a Node.js backend.



## ✨ Features

- 📂 Separate categories for **Vegetarian**, **Non-Vegetarian**, and **Mixed** views
- 🔍 Search functionality to filter recipes by **dish name**
- ⚡ Responsive and fast user experience
- 🌐 Deployed on AWS EC2 using Node.js backend and environment variables for configuration



## 🧱 Tech Stack

- **Frontend:** Angular (v17.0.9)
- **Backend:** Node.js
- **Deployment:** AWS EC2 (Ubuntu)
- **Other Tools:** Git, SSH, Elastic IP, Environment Variables



## ▶️ Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/amchurichaitraja/MenuCard.git
cd MenuCard
```

### 2. Set up environment variables

Create a `.env` file in the root directory with the following content:

```env
DOMAIN="http://localhost:4200"
PORT=4200
STATIC_DIR="./client"
PUBLISHABLE_KEY=""
SECRET_KEY=""
```

### 3. Install dependencies and run the app

```bash
npm install
npm run start
ng serve
```

The application should now be running at `http://localhost:4200`.



## ☁️ Deploying to AWS EC2 (Ubuntu)

### 🔐 1. Create IAM User
- Go to AWS Console → IAM
- Create a new user with **Programmatic access** and **Administrator** permissions

### 💻 2. Create an EC2 Instance
- OS Image: Ubuntu (latest LTS)
- Instance Type: `t2.micro`
- Create and download a new **key pair** (`.pem` file)

### 🔌 3. Connect to the EC2 Instance

```bash
ssh -i instance.pem ubuntu@<EC2_PUBLIC_IP>
```

### ⚙️ 4. Configure Ubuntu (Remote VM)

```bash
# Update packages
sudo apt update

# Install Git
sudo apt install git -y

# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```



### 🚀 5. Deploy the Project on EC2

```bash
# Clone the repository
git clone https://github.com/verma-kunal/AWS-Session.git
cd AWS-Session

# Set up environment variables
nano .env
# Paste the following inside the file:
# DOMAIN=""
# PORT=3000
# STATIC_DIR="./client"
# PUBLISHABLE_KEY=""
# SECRET_KEY=""

# Install dependencies
npm install

# Start the application
npm run start
```



### 🌐 6. Update EC2 Security Group

- Go to EC2 Console → Select your instance → Security → Edit Inbound Rules
- Add a **Custom TCP Rule** for **Port 3000** and source as **0.0.0.0/0** (or your IP range)



### 📡 7. Set Up Elastic IP (Optional)

- Allocate an Elastic IP
- Associate it with your EC2 instance
- Use this IP as your `DOMAIN` in the `.env` file



## 🎉 Deployment Complete!

Your Node.js + Angular application is now running live on an AWS EC2 instance!

This full-stack project was **developed, configured, and deployed entirely by me** — from coding the Angular frontend and Node.js backend, to launching it on AWS infrastructure.

