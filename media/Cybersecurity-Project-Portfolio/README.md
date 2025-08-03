# 🔐 Cybersecurity Lab Projects – Moatasem Sorour

This repository contains a collection of cybersecurity lab activities and projects completed as part of my practical learning in web application security. It includes vulnerable web applications, offensive security exercises, and defensive hardening measures implemented on both Windows and Ubuntu systems.

---

## 🧪 Project Overview

These labs were conducted using tools like **WebGoat**, **OWASP ZAP**, and **MySQL**, focusing on vulnerabilities and exploit techniques. The lessons and tasks follow OWASP best practices and simulate real-world attack vectors.

---

## 🚧 Tools Used

- **[OWASP WebGoat](https://owasp.org/www-project-webgoat/)** – Deliberately insecure web application for learning web security.
- **[OWASP ZAP (Zed Attack Proxy)](https://owasp.org/www-project-zap/)** – Open-source penetration testing tool.
- **VirtualBox / VMware** – Hosting Ubuntu servers and sandbox environments.
- **MySQL** – Used for access control experiments and row-level security.
- **Linux & Windows OS** – Testing across platforms.

---

## 🧷 Lab Tasks & Features

### ✅ WebGoat & ZAP Setup
- Confirmed and installed Java for WebGoat compatibility
- Ran WebGoat locally on Windows and Ubuntu
- Installed and configured ZAP Proxy for traffic interception and analysis

### ✅ Completed Lessons in WebGoat
#### 1. **HTTP Basics**
#### 2. **Access Control Flaws**
   - Access Matrix Model
   - Path-based Access Control Bypass
#### 3. **Authentication Flaws**
   - Password Strength Weakness
   - Forgot Password Exploitation
   - Multilevel Login Bypass
#### 4. **Parameter Tampering**
   - Exploited hidden fields
   - Exploited unchecked email parameters
#### 5. **Concurrency**
   - Thread Safety Issues
   - Shopping Cart Exploits
#### 6. **XSS Attacks**
   - Reflected and Stored Cross-Site Scripting (XSS)
#### 7. **Digital Signatures**
   - Learned and implemented digital signature verification
#### 8. **Web Server Hardening**
   - Secured Apache/NGINX using Ubuntu VM

---

## 🔐 Access Control Implementation in MySQL

```sql
-- Create users
CREATE USER 'Alex'@'localhost' IDENTIFIED BY 'alex';
CREATE USER 'John'@'localhost' IDENTIFIED BY 'john';

-- Grant permissions
GRANT ALL PRIVILEGES ON DBCST8265.* TO 'Alex'@'localhost';
GRANT ALL PRIVILEGES ON DBCST8265.* TO 'John'@'localhost';

-- Row-Level Security Example
CREATE USER 'userA'@'localhost' IDENTIFIED BY 'usera';
CREATE USER 'userB'@'localhost' IDENTIFIED BY 'userb';

USE DBCST8265;
CREATE TABLE RLSECURE (
  Id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  super_secret VARCHAR(30) NOT NULL,
  owner VARCHAR(30) NOT NULL
);

CREATE VIEW DBCST8265.ROWLVLSEC AS 
  SELECT * FROM DBCST8265.RLSECURE WHERE owner = USER();

GRANT SELECT, INSERT ON DBCST8265.ROWLVLSEC TO 'userA'@'localhost', 'userB'@'localhost';
