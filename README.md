# Civa API – Monorepo (Frontend + Backend)

Este proyecto es un **monorepo** que contiene tanto el **backend** en Spring Boot como el **frontend** en React + Vite.  
El sistema permite gestionar buses, visualizar la lista y ver los detalles, con autenticación básica.

---

## 📂 Estructura del Monorepo

civaApi/
│── backend/ # Proyecto Spring Boot (Java)
│── civa-frontend/ # Proyecto React + Vite (JavaScript)

---

## ⚙️ Requisitos previos

### General
- **Java 17+**
- **Maven 3.8+**
- **React 19.1.1**
- **PostgreSQL** (o base de datos configurada en `application.properties`)
- **Node.js 18+**
- **npm 8+**

---

## 🔧 Backend (Spring Boot)

El backend está desarrollado con **Spring Boot** y expone la API REST para la gestión de buses.  

### 🚀 Levantar el backend
1. Moverse a la carpeta del backend:
   ```bash
   cd backend
   
2. Compilar y ejecutar:

mvn spring-boot:run

## 📑 Endpoints principales

1. Lista de buses
GET /bus

2. Detalle de bus por ID
GET /bus/{id}

## 🔐 Seguridad (Spring Security)

El backend está protegido con autenticación básica (HTTP Basic Auth).
Credenciales por defecto:

## 🎨 Frontend (React + Vite)

El frontend consume la API del backend y está construido con React + Bootstrap + React Router.

1. Moverse a la carpeta:
cd civa-frontend


2. Instalar dependencias:
npm install


3. Ejecutar en modo desarrollo:
npm run dev


4. El servidor quedará activo en:
http://localhost:5173


### 🔐 Flujo de Autenticación

Ingresa a:
http://localhost:5173/login


Autentícate con las credenciales:
admin / secret


Una vez autenticado podrás acceder a:
http://localhost:5173/

-Ver lista de buses.
-Consultar detalles en:
http://localhost:5173/bus/{id}





