# 🪪 ID-Card-Generator 🪪

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

![ID Card Generator](./image.png)

## 📺 Demo Video

[![Generate Visitor ID Cards web application](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=Generate_Visitor_ID_Cards_web_application)

Click the badge above to watch a complete demonstration of the ID Card Generator application. The video walks through all features including setup, card creation, and downloading.

## 📋 Project Description

The ID Card Generator is a web application that allows users to create and download personalized ID cards. The application provides a user-friendly interface to input personal details and generate a professional-looking ID card.

## 🎯 Purpose

The purpose of this project is to provide a simple and efficient way to generate ID cards for various purposes such as visitor badges, employee IDs, and event passes.

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 📸 **Profile Picture** | Upload a personal photo to be displayed on the ID card |
| 📝 **Personal Details** | Input name, mobile number, date of birth, address, and validity date |
| 👁️ **Preview** | See how the ID card will look before downloading |
| 💾 **Download** | Save the generated ID card as an image file |
| 🌐 **No Database Required** | Works completely client-side with option for backend storage |
| 📱 **Responsive Design** | Works on desktop and mobile devices |
| 🐳 **Docker Support** | Easily deploy with containerization |

## 🔍 Problem Statement

Creating ID cards manually can be time-consuming and prone to errors. This project aims to automate the process of generating ID cards, making it quick and error-free.

## 💡 Benefits

> 🕒 **Time-Saving**: Significantly reduces the time needed to create professional ID cards

> 🎯 **Consistency**: Ensures all ID cards follow the same format and quality standards

> 🏆 **Professional Appearance**: Delivers polished, well-designed ID cards every time

> 🔄 **Flexibility**: Can be used for various types of ID cards with minimal modifications

> 💰 **Cost-Effective**: Eliminates the need for specialized ID card printing equipment

## 🛠️ Technical Architecture

```mermaid
graph TD
    A[User Interface] --> B[Input Form]
    B --> C[Image Upload]
    B --> D[Personal Details]
    C & D --> E[ID Card Preview]
    E --> F[Download Engine]
    F --> G[Generated ID Card]
    
    subgraph "Optional Backend"
        H[Express Server] --> I[Data Storage]
        H --> J[Authentication]
    end
    
    E -.-> H
```

## 💻 Technology Stack

| Technology | Purpose | Component |
|------------|---------|-----------| 
| 🖥️ **HTML** | Structure | Frontend |
| 🎨 **CSS** | Styling | Frontend |
| ⚙️ **JavaScript** | Interactivity | Frontend |
| 🎭 **Bootstrap** | UI Framework | Frontend |
| 🚀 **Node.js** | Runtime Environment | Backend |
| 🔄 **Express** | Web Framework | Backend |
| 📁 **Multer** | File Handling | Backend |
| 🖼️ **html2canvas** | Image Generation | Frontend |
| 🗄️ **MongoDB** | Data Storage (Optional) | Backend |
| 🐳 **Docker** | Containerization | Deployment |

## 📥 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Yash-Kavaiya/ID-Card-Generator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ID-Card-Generator
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### 🐳 Docker Installation

Alternatively, you can use Docker to run the application:

```bash
# Build the Docker image
docker build -t id-card-generator .

# Run the container
docker run -p 5000:5000 id-card-generator
```

## 🚀 Usage

1. Start the server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:5000`
3. Fill in the required details and upload a profile picture
4. Click on "Generate ID Card" to preview the ID card
5. Click on "Download ID Card" to save the ID card as an image

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| body-parser | ^1.20.3 | Parse HTTP request bodies |
| express | ^4.21.1 | Web application framework |
| html2canvas | ^1.4.1 | Convert HTML to canvas for download |
| mongoose | ^8.7.3 | MongoDB object modeling |
| multer | ^1.4.5-lts.1 | Handle multipart/form-data for uploads |

## 📂 File Structure

```
ID-Card-Generator/
├── client/
│   ├── index.html    # Main HTML file
│   └── style.css     # CSS styling
├── server/
│   └── app.js        # Express server logic
├── Dockerfile        # Docker configuration
├── package.json      # Project metadata
├── server.js         # Server entry point
└── README.md         # Documentation
```

## 📊 Process Flow

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant Backend
    participant Database
    
    User->>Frontend: Enter Details & Upload Photo
    Frontend->>Backend: Send Form Data
    Backend->>Backend: Process Image
    Backend->>Database: Store Data (Optional)
    Backend->>Frontend: Return Processed Data
    Frontend->>Frontend: Generate ID Card Preview
    User->>Frontend: Request Download
    Frontend->>User: Provide ID Card Image
```

## 🔍 Use Cases

- 🏢 **Corporate Visitor Management**
- 🎓 **Educational Institutions**
- 🎭 **Event Management**
- 🏥 **Healthcare Facilities**
- 🏢 **Government Offices**
- 🏫 **Conference Centers**

## 📷 Screenshot

![ID Card Generator](./screenshot.png)

## 🔜 Future Enhancements

- 💫 QR Code generation for digital verification
- 🎨 Multiple ID card templates
- 🔐 Authentication and user management
- 📊 Analytics dashboard
- 📱 Native mobile application
- 🖨️ Direct printing support

## 👨‍💻 Author & Contact

- **Yash Kavaiya**
- [GitHub](https://github.com/Yash-Kavaiya)
- [LinkedIn](https://www.linkedin.com/in/yash-kavaiya/)
- [Medium](https://medium.com/@yash.kavaiya3)
- [Kaggle](https://www.kaggle.com/yashkavaiya)
- [Aspecta](https://aspecta.id/u/Yash-Kavaiya)

---

<div align="center">
  <p>🪪 <b>ID Card Generator</b> - Create professional ID cards in seconds! 🚀</p>
  <p>If you find this project useful, please consider giving it a ⭐️</p>
</div>
