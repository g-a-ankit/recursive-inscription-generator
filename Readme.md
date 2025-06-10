# Recursive Inscription Generator

A TypeScript utility for generating unique NFT trait combinations and rendering them as HTML files, with support for both cartesian and random generation methods. Includes tools for capturing HTML as images using Puppeteer.

---

## ✨ Features

- **Trait-Based NFT Generation**: Define traits and their distributions for NFT collections.
- **Generation Methods**: Supports both **cartesian product** and **random distribution** of traits.
- **HTML Output**: Generates HTML files for each unique NFT combination.
- **Image Capture**: Uses Puppeteer to capture screenshots of generated HTML files.
- **Configurable**: Easily customize trait definitions and generation parameters.

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js (v16+ recommended)
- Yarn package manager

### 📦 Installation

```bash
yarn install
```

## 🛠️ Usage

### 1. Configure Traits

Edit the trait definitions file to customize the layers and values for your NFT collection:

---

### 2. Set Generation Parameters

Modify the configuration settings in the entry point file:

Adjust the following:

- **Collection name**
- **Number of items**
- **Output folder**
- **Generation method**: `CARTESIAN` or `RANDOM`

---

### 3. Run the Generator

Run the script to generate HTML files for each unique NFT trait combination:

```bash
yarn execute
```
