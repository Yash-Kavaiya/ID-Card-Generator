# ID-Card-Generator

![ID](./image.png)

## Project Description

The ID Card Generator is a web application that allows users to create and download personalized ID cards. The application provides a user-friendly interface to input personal details and generate a professional-looking ID card.

## Purpose

The purpose of this project is to provide a simple and efficient way to generate ID cards for various purposes such as visitor badges, employee IDs, and event passes.

## Functionality

- Upload a profile picture
- Input personal details such as name, mobile number, date of birth, address, and validity date
- Preview the generated ID card
- Download the ID card as an image

## Problem Statement

Creating ID cards manually can be time-consuming and prone to errors. This project aims to automate the process of generating ID cards, making it quick and error-free.

## Benefits

- Saves time and effort in creating ID cards
- Ensures consistency and accuracy in the generated ID cards
- Provides a professional and polished look to the ID cards

## Techstack

- HTML, CSS, JavaScript for the frontend
- Node.js and Express for the backend
- Multer for handling file uploads
- html2canvas for generating the ID card image
- MongoDB (optional) for storing visitor data

## Installation

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

## Usage

1. Start the server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:5000`
3. Fill in the required details and upload a profile picture
4. Click on "Generate ID Card" to preview the ID card
5. Click on "Download ID Card" to save the ID card as an image

## Dependencies

- body-parser: ^1.20.3
- express: ^4.21.1
- html2canvas: ^1.4.1
- mongoose: ^8.7.3
- multer: ^1.4.5-lts.1

## File Structure

- `client/index.html`: The main HTML file for the frontend
- `client/style.css`: The CSS file for styling the frontend
- `server/app.js`: The main server file for handling backend logic
- `package.json`: The file containing project metadata and dependencies

## Screenshot

![ID Card Generator](./screenshot.png)
