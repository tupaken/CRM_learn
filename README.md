# 📘 CRM System – Projekt-Dokumentation

## 🧭 Überblick

Dieses CRM-System ist eine webbasierte Anwendung zur Verwaltung von Kundenbeziehungen. Es besteht aus einem Vue.js-Frontend, einer Node.js-basierten Backend-API sowie diversen Hintergrunddiensten. Das Deployment erfolgt containerisiert auf AWS.

---

## 🖥️ Tech Stack

### 🔹 Frontend

#### Portal
- **Framework**: Vue.js 2  
- **URL**: [`https://my.domain.net`](https://my.domain.net)  
- **Deployment**: AWS S3 + CloudFront  

#### Homepage
- **Frameworks**: Vue.js 2 + Nuxt.js  
- **URL**: [`https://domain.net`](https://domain.net)  
- **Deployment**: AWS Amplify  

---

### 🔹 Backend API

- **Framework**: AdonisJS 4.1  
- **Node-Version**: Node.js 22  
- **Endpunkt**: [`https://service.domain.de`](https://service.domain.de)  
- **IP**: `##.##.##.###`  
- **Deployment**: Docker-Container auf AWS ECS (2 Instanzen)  
- **Datenbank**: MySQL (AWS RDS)  

---

### 🔹 Zusätzliche Services

#### Socket Server
- **Protokoll**: WebSocket (WSS)  
- **URL**: `wss://service.domain.de:4000/`  
- **Funktion**: Dauerverbindung zu Clients und Server  

#### MailListener
- Lauscht auf neue E-Mails in einem Postfach  
- Persistiert empfangene Mails in der Datenbank  

#### Periodische Tasks
- **Intervalle**: alle 5, 15 oder 60 Minuten  
- **Aufgaben**:
  - Benutzer-Rankings berechnen  
  - Benachrichtigungen versenden  
  - Abgelaufene Zertifikate markieren  

---

## ☁️ Infrastruktur

### 🔹 AWS Dienste

#### Load Balancer (NLB)
- **IP**: `##.##.##.###`  
- **Weiterleitungen**:
  - `TLS:443` → Backend API  
  - `TCP:80` → Backend API  
  - `TLS:4000` → Socket Server  

#### Route 53
- **DNS-Zone**: `domain.net`  

#### Certificate Manager
- Zertifikate für:
  - `service.domain.net`  
  - `service.domain.de`  

#### S3
- **Verwendung**:
  - Hosting der Frontend `dist`-Dateien  
  - Speicherung von Benutzer-Uploads  

#### CloudFront
- Hosting & Caching des Frontends  
- Weiterleitung von `api/*`-Anfragen an NLB  

#### EC2
- Redis-Server (für Sessions, Caching, Queues)  

#### RDS
- MySQL-Datenbank für das Backend  

#### Amplify
- Hosting der Homepage-App  

### 🔹 DigitalOcean

- **Testumgebung**  
- **Server**: Ubuntu mit Docker  
- **URL**: [`https://test.domain.de`](https://test.domain.de)  

---

## ⚙️ CI/CD Pipeline (GitLab)

### Workflow

1. **Trigger**: Push auf den `master`-Branch  
2. **Pipelines**:
   - `deployS3`
     - `yarn build`
     - Upload der `dist/`-Dateien nach S3  
   - `buildApi`
     - Build & Push Docker-Image in AWS ECR  
     - Aktualisierung der ECS-Services  
     - Datenbankmigration: `adonis migration:run`  
     - Wenn stabil für 5 Minuten → alte Services beenden  

---

## 📝 ToDo / Weiterführende Ideen

- [ ] API-Dokumentation (z. B. OpenAPI / Swagger)  
- [ ] ER-Diagramm der Datenbank  
- [ ] Benutzer- und Rollenbeschreibung  
- [ ] Monitoring (z. B. CloudWatch, Grafana) ergänzen  
- [ ] Sicherheitsrichtlinien dokumentieren (IAM, CORS etc.)

---

## 🧑‍💻 Projektstatus

> 🛠️ In Entwicklung – Dieses Projekt dient als Lern- und Übungsumgebung für moderne Webentwicklung mit einem vollständigen Fullstack-Setup.
