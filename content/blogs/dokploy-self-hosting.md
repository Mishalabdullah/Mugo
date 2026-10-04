---
title: "Dokploy - Self-Hosted Platform for Web Apps"
subtitle: "Dockerised Web Apps and Self-Hosted Services"
description: "Dokploy is a powerful, self-hosted platform that offers nearly all the features of Vercel, and in some cases, even more."
date: 2025-04-30
image: /images/blogs/dokploy/dokploy.png
author: "Mishal Abdullah"
tags: ["Dokploy", "Self-Hosted", "Docker", "Web Apps", "vercel"]
---

## Goodbye Vercel | Hello Dokploy

Like many React developers, I’ve always leaned toward **Next.js** as my go-to React-based framework. Thanks to its tight integration with **Vercel**, deploying a Next.js app was as simple as pushing to Git.

But lately, Vercel has introduced several **limitations** on their free tier:

- Private Git repositories now require a **paid plan**
- There’s a **time limit on serverless API routes**
- Additional restrictions that make the platform less appealing for indie devs and hobbyists

To be clear, I don’t blame Vercel — businesses need to make money. But it’s simply **not the path I want to follow**.

So I began exploring **open-source alternatives**, and that’s when I found **Dokploy** — a powerful, self-hosted platform that offers nearly all the features of Vercel, and in some cases, even more.

In this post, I’ll walk you through:

- How I use Dokploy to deploy my web apps
- How I host my databases (MongoDB, SQL, PostgreSQL)
- How I self-host services like search engines and RSS readers

![dockploy home](/images/blogs/dokploy/dokploy-home.png)

---

## 🛠️ Prerequisites

To get started with Dokploy, you’ll need access to a **Virtual Private Server (VPS)**. Here are a few providers to choose from:

- [Contabo](https://contabo.com) _(my personal pick — affordable and reliable)_
- [Vultr](https://www.vultr.com)
- [Hetzner](https://www.hetzner.com) _(I had issues creating an account, but it’s very cost-effective)_
- [DigitalOcean](https://www.digitalocean.com)

**Minimum recommended VPS specs:**

- 2GB RAM
- 30GB disk space

---

## ⚙️ Installation

The installation process is surprisingly simple.

### ✅ Before you begin:

Ensure the following **ports are open** on your server:

- `80` – HTTP
- `443` – HTTPS
- `3000` – Dokploy Dashboard

Then, install Dokploy using the one-liner script:

```bash
curl -sSL https://dokploy.com/install.sh | sh
```

You’ll be prompted to **create an admin account**. Be sure to save your credentials securely — this will be your access to the Dokploy dashboard.

![dokploy-signup](/images/blogs/dokploy/dokploy-signup.png)

## 🚀 Why I Chose Dokploy

Dokploy offers a wide range of features, but I primarily use it for:

- **Deploying Next.js apps** easily with Docker containers
- **Hosting MongoDB, MySQL, and PostgreSQL** for personal projects
- Running **self-hosted services** like:
  - My own search engine
  - Custom RSS reader dashboard

There are tons of other features Dokploy provides — like integrated CI/CD, Git deployments, SSL by default — but honestly, I don’t even use all of them yet.

---

## 📚 Official Setup Documentation

Dokploy supports multiple Linux distributions and popular VPS providers:

### Supported Distros:

- Ubuntu 24.04 / 22.04 / 20.04 / 18.04
- Debian 12 / 11 / 10
- Fedora 40
- CentOS 8 / 9

---

## 🌐 Alternative: Dokploy Cloud

Don’t want to manage your own server? Try [**Dokploy Cloud**](https://dokploy.com) — the hosted version of Dokploy, where you don’t need to worry about installation, updates, or security patches.

---

## 🏁 Final Thoughts

Dokploy has been a game-changer for me. It gave me full control of my deployments, helped me avoid vendor lock-in, and aligned perfectly with my preference for open-source tooling.

If you’re looking to break free from platform limitations and embrace self-hosted devops, **Dokploy is worth a shot**.
