# NumeroWise Technical Documentation v1.0

Project Overview

Project Name
NumeroWise

Version
Version 1.1 (Stable)

Project Type
AI-Powered Numerology Web Application

Development Status
Production Stable

Introduction

NumeroWise is an AI-powered numerology platform designed to provide accurate, personalized, and easy-to-understand numerology reports using modern Artificial Intelligence.

The platform combines traditional numerology principles with Google's Gemini AI to generate highly detailed personalized reports in PDF format.

Primary Objective

The primary objective of NumeroWise is to make professional-quality numerology guidance available through an automated, secure, and user-friendly online platform.

Users can:

• Calculate their numerology profile
• Generate complete Numerology Blueprints
• Generate specialized premium numerology reports
• Ask personalized numerology questions
• Receive professionally formatted PDF reports
• Receive reports directly via email

Current Products

At Version 1.1, NumeroWise includes the following products:

| Product | Product Code | Status |
|---------|--------------|--------|
| Premium Numerology Blueprint | BLUE501 | Production Ready |
| Ask Numerology AI (2 Questions) | AI051 | Production Ready |
| Ask Numerology AI (5 Questions) | AI101 | Production Ready |
| Name Numerology Report | NAME101 | Production Ready |
| Relationship Compatibility Report | REL151 | Production Ready |
| Business Success Report | BUS201 | Production Ready |
---

# Core Technologies

* HTML5
* CSS3
* JavaScript
* Google Apps Script
* Google Gemini API
* Google Sheets
* Gmail Service
* ReportLab-style PDF generation through Apps Script
* GitHub Pages

---

# Key Features

* AI-powered report generation
* Personalized numerology analysis
* Automated PDF generation
* Automated email delivery
* Google Sheets order management
* Razorpay payment integration
* Multi-language support (English and Hindi)
* Modular Apps Script architecture
* Reusable codebase for future AI products

---

# Design Philosophy

NumeroWise follows a modular architecture where every product operates independently while sharing a common routing and configuration system.

Each product contains its own:

* Configuration
* Business Logic
* Email Service
* PDF Service
* Sheet Service

This architecture allows new products to be added without affecting existing modules.

---

# Current Stability

Version 1.0 has successfully completed end-to-end production testing for:

* Form Submission
* Google Apps Script Routing
* Gemini AI Integration
* PDF Generation
* Email Delivery
* Google Sheets Logging
* Razorpay Payment Flow

The project is considered stable and ready for future expansion.

# Part 2 — Project Folder Structure

## Overview

NumeroWise follows a clean and modular folder structure designed for easy maintenance, scalability, and future expansion.

The website is hosted on GitHub Pages, while all AI processing, PDF generation, email delivery, and data storage are handled through Google Apps Script.

---

# GitHub Project Structure

```text
NumeroWise/
│
├── index.html
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   ├── script.js
│   ├── calculator.js
│   └── ...
│
├── images/
│   ├── logo.png
│   ├── favicon.ico
│   └── ...
│
├── components/
│   ├── header.html
│   ├── footer.html
│   └── navigation.html
│
├── calculators/
│   ├── life-path-calculator.html
│   ├── destiny-number-calculator.html
│   ├── soul-urge-calculator.html
│   ├── personality-number-calculator.html
│   └── birthday-number-calculator.html
│
├── reports/
│   ├── life-path-number-1.html
│   ├── life-path-number-2.html
│   ├── ...
│   ├── destiny-number-1.html
│   ├── destiny-number-2.html
│   ├── ...
│   ├── soul-urge-number-1.html
│   ├── personality-number-1.html
│   └── ...
│
├── ask-numerology-ai.html
├── ask-numerology-ai-form.html
├── thank-you.html
│
├── docs/
│   └── NUMEROWISE_TECHNICAL_DOCUMENTATION_v1.0.md
│
└── assets/
    └── (Future Assets)
```

---

# Folder Description

## Root Folder

Contains the main website pages including the Home Page, AI pages, Thank You page, and other primary navigation files.

---

## css/

Contains all global stylesheet files.

Purpose:

* Global design
* Responsive layout
* Typography
* Colors
* UI components

---

## js/

Contains JavaScript files responsible for:

* Calculator logic
* User interactions
* Form validation
* Dynamic page behavior

---

## images/

Stores all static image assets.

Examples:

* Logo
* Icons
* Favicons
* Future illustrations

---

## components/

Contains reusable HTML components.

Examples:

* Header
* Footer
* Navigation

These components are dynamically loaded using JavaScript to avoid duplicate code.

---

## calculators/

Contains all calculator pages.

Each calculator has its own dedicated page.

Examples:

* Life Path Calculator
* Destiny Calculator
* Soul Urge Calculator
* Personality Calculator
* Birthday Number Calculator

---

## reports/

Contains all educational and interpretation pages.

Examples:

* Life Path Reports
* Destiny Reports
* Soul Urge Reports
* Personality Reports

These pages are SEO-focused and designed for long-term organic traffic.

├── premium/
│   ├── blueprint-form.html
│   ├── namenumerology-form.html
│   ├── relationship-form.html
│   └── business-success-form.html
│

---

## AI Pages

├── ask-numerology-ai.html
├── ask-numerology-ai-form.html
│
├── thank-you.html
│

Current AI and Premium Product pages include:

* Ask Numerology AI
* AI Question Forms
* Premium Blueprint Form
* Name Numerology Form
* Relationship Compatibility Form
* Business Success Form
* Thank You Page

All premium products follow a common modular workflow consisting of dedicated forms, centralized request routing, AI report generation, PDF creation, email delivery and payment confirmation pages.

---

## docs/

Contains technical documentation.

Purpose:

* Developer documentation
* Deployment instructions
* Project architecture
* Maintenance notes
* Future roadmap
* Product-specific technical documentation
* 
---

## assets/

Reserved for future downloadable resources such as:

* Free PDFs
* Audio Books
* Worksheets
* Marketing material

---

# Design Principles

The folder structure follows these principles:

* Modular
* Scalable
* Reusable
* Easy to maintain
* SEO friendly
* Future expansion ready

No folder should contain unrelated resources.

Every new feature should be added using the existing modular architecture without modifying existing stable components whenever possible.

# Part 3 — Google Apps Script Architecture

## Google Apps Script Project Structure

```text
NumeroWise Apps Script
│
├── Router.gs
├── CommonConfig.gs
├── Config.gs
│
├──Blueprint (BLUE501)
│   ├── WebApp.gs
│   ├── Code.gs
│   ├── GeminiService.gs
│   ├── PDFService.gs
│   ├── EmailService.gs
│   ├── SheetService.gs
│   └── pdf-template.html
│
├── AI051 (Ask Numerology AI – 2 Questions)
│   ├── ConfigAI051.gs
│   ├── WebAppAI051.gs
│   ├── CodeAI051.gs
│   ├── PDFServiceAI051.gs
│   ├── EmailServiceAI051.gs
│   ├── SheetServiceAI051.gs
│   └── PromptServiceAI051.gs
│
├── AI101 (Ask Numerology AI – 5 Questions)
│   ├── ConfigAI101.gs
│   ├── WebAppAI101.gs
│   ├── CodeAI101.gs
│   ├── PDFServiceAI101.gs
│   ├── EmailServiceAI101.gs
│   ├── SheetServiceAI101.gs
│   └── PromptServiceAI101.gs
│
├── NAME101 (Name Numerology Report)
│   ├── WebAppName101.gs
│   ├── CodeName101.gs
│   ├── GeminiServiceName101.gs
│   ├── PdfServiceName101.gs
│   ├── EmailServiceName101.gs
│   ├── SheetServiceName101.gs
│   └── pdf-template-name101.html
│
├── REL151 (Relationship Compatibility Report)
│   ├── WebAppREL151.gs
│   ├── CodeREL151.gs
│   ├── GeminiServiceREL151.gs
│   ├── PdfServiceREL151.gs
│   ├── EmailServiceREL151.gs
│   ├── SheetServiceREL151.gs
│   └── pdf-template-rel151.html
│
├── BUS201 (Business Success Report)
│   ├── WebAppBUS201.gs
│   ├── CodeBUS201.gs
│   ├── GeminiServiceBUS201.gs
│   ├── PdfServiceBUS201.gs
│   ├── EmailServiceBUS201.gs
│   ├── SheetServiceBUS201.gs
│   └── pdf-template-bus201.html
│
├── Shared Utilities
│   ├── CommonConfig.gs
│   ├── Router.gs
│   ├── DateUtils.gs
│   ├── Validation.gs
│   ├── Helpers.gs
│   └── Common Functions
│
└── Future Products
    ├── Career Numerology Report
    ├── Wealth Prediction Report
    ├── Baby Name Numerology
    ├── Business Name Numerology
    └── Additional AI Products

# Part 4 — Product Codes

## Current Product Catalogue

| Product Name                             | Product Code | Category                | Status           |
| ---------------------------------------- | ------------ | ----------------------- | ---------------- |
| Premium Numerology Blueprint             | BLUE501      | Core Report             | Production Ready |
| Ask Numerology AI (2 Questions)          | AI051        | AI Consultation         | Production Ready |
| Ask Numerology AI (5 Questions)          | AI101        | AI Consultation         | Production Ready |
| Name Numerology Report                   | NAME101      | Premium Report          | Production Ready |
| Relationship Compatibility Report        | REL151       | Premium Report          | Production Ready |
| Business Success Report                  | BUS201       | Premium Report          | Production Ready |
---

## Product Code Naming Convention

| Prefix | Meaning                              |
| -------| ------------------------------------ |
| BLUE   | Complete Numerology Blueprint        |
| AI     | Ask Numerology AI Reports            |
| NAME   | Name Numerology Reports              |
| REL    | Relationship Compatibility Reports   |
| BUS    | Business Success Reports             |

---

## Current Active Products

### BLUE501

* Product Name: Premium Numerology Blueprint
* Category: Premium Personalized Report
* Delivery Method: PDF + Email
* AI Powered: Yes

---

### AI051

* Product Name: Ask Numerology AI (2 Questions)
* Category: Personalized AI Consultation
* Questions Allowed: 2
* Delivery Method: PDF + Email
* AI Powered: Yes

---

### AI101

* Product Name: Ask Numerology AI (5 Questions)
* Category: Personalized AI Consultation
* Questions Allowed: 5
* Delivery Method: PDF + Email
* AI Powered: Yes

---

### NAME101

* Product Name: Name Numerology Report
* Category: Premium Personalized Report
* Primary Analysis: Name Vibration & Expression Number
* Delivery Method: PDF + Email
* AI Powered: Yes

---

### REL151

* Product Name: Relationship Compatibility Report
* Category: Premium Compatibility Report
* Primary Analysis: Two-Person Numerology Compatibility
* Delivery Method: PDF + Email
* AI Powered: Yes

---

### BUS201

* Product Name: Business Success Report
* Category: Premium Business Report
* Primary Analysis: Personal & Business Numerology
* Delivery Method: PDF + Email
* AI Powered: Yes

---

## Reserved Product Codes

| Product Code | Reserved For                    | Status   |
| ------------ | ------------------------------- | -------- |
| NAME201      | Advanced Name Report            | Reserved |
| REL301       | Advanced Compatibility Report   | Reserved |
| BUS301       | Advanced Business Report        | Reserved |
| AI201        | Future AI Consultation          | Reserved |
| AI501        | Advanced AI Product             | Reserved |
| AI1001       | Enterprise AI Product           | Reserved |

---

## Naming Rules

* Every product must have a unique Product Code.
* Product Codes are never reused.
* Configuration files, WebApp handlers, Core Engine, Gemini Services, Sheet Services, Email Services, PDF Services and HTML Templates must use the corresponding    Product Code.
* Google Sheets must maintain separate tabs for each product whenever required.
* Future products must follow the same modular naming convention.

# Part 5 — System Processing Flow

## Overall Processing Flow

```text
User

↓

GitHub Pages Website

↓

HTML Form

↓

JavaScript Validation

↓

FormData Creation

↓

Google Apps Script Web App

↓

Router.gs

↓

Product Identification

↓

Corresponding WebApp Handler

↓

Request Validation

↓

Numerology Calculations

↓

Gemini AI Report Generation

↓

Google Sheets Entry

↓

PDF Generation

↓

Email Service

↓

Gmail Delivery

↓

Success JSON Response

↓

Thank You Page
```

---

## BLUE501 Processing Flow

```text
Blueprint Form

↓

Router.gs

↓

WebApp.gs

↓

Code.gs

↓

GeminiService.gs

↓

SheetService.gs

↓

PdfService.gs

↓

EmailService.gs

↓

User Email

```

## AI051 Processing Flow

```text
Ask Numerology AI (2 Questions)

↓

Router.gs

↓

WebAppAI051.gs

↓

CodeAI051.gs

↓

PromptServiceAI051.gs

↓

Gemini API

↓

SheetServiceAI051.gs

↓

PDFServiceAI051.gs

↓

EmailServiceAI051.gs

↓

User Email
```

---

## AI101 Processing Flow

```text
Ask Numerology AI (5 Questions)

↓

Router.gs

↓

WebAppAI101.gs

↓

CodeAI101.gs

↓

PromptServiceAI101.gs

↓

Gemini API

↓

SheetServiceAI101.gs

↓

PDFServiceAI101.gs

↓

EmailServiceAI101.gs

↓

User Email

```

## NAME101 Processing Flow

Name Numerology Form

↓

Router.gs

↓

WebAppName101.gs

↓

CodeName101.gs

↓

GeminiServiceName101.gs

↓

SheetServiceName101.gs

↓

PdfServiceName101.gs

↓

EmailServiceName101.gs

↓

User Email

---

## REL151 Processing Flow

Relationship Compatibility Form

↓

Router.gs

↓

WebAppREL151.gs

↓

CodeREL151.gs

↓

GeminiServiceREL151.gs

↓

SheetServiceREL151.gs

↓

PdfServiceREL151.gs

↓

EmailServiceREL151.gs

↓

User Email

---

## BUS201 Processing Flow

Business Success Form

↓

Router.gs

↓

WebAppBUS201.gs

↓

CodeBUS201.gs

↓

GeminiServiceBUS201.gs

↓

SheetServiceBUS201.gs

↓

PdfServiceBUS201.gs

↓

EmailServiceBUS201.gs

↓

User Email

---

## Common Workflow

```text
Receive Request

↓

Validate Input

↓

Identify Product

↓

Prepare Product-specific Prompt

↓

Generate Gemini AI Report

↓

Generate Personalized Report

↓

Save Order

↓

Generate PDF

↓

Send Email

↓

Return Success Response
```

---

## Error Handling Flow

```text
Validation Error

↓

Return JSON Error

──────────────

Gemini Error

↓

Log Error

↓

Return Failure Response

──────────────

PDF Error

↓

Stop Processing

↓

Return Failure Response

──────────────

Email Error

↓

Update Sheet Status

↓

Return Failure Response

──────────────

Google Sheets Error

↓

Log Failure

↓

Return Failure Response

──────────────

# Part 6 — Google Sheets Structure

## Spreadsheet Overview

The NumeroWise Google Spreadsheet is used for storing customer orders, payment details, AI reports, processing status, and email delivery status.

Each AI product maintains its own dedicated worksheet.

---

## Current Worksheets

| Sheet Name      | Product                                  | Status |
| --------------- | ---------------------------------------- | ------ |
| BLUE501_Orders  | Premium Numerology Blueprint             | Active |
| AI051_Orders    | Ask Numerology AI (2 Questions)          | Active |
| AI101_Orders    | Ask Numerology AI (5 Questions)          | Active |
| NAME101_Orders  | Name Numerology Report                   | Active |
| REL151_Orders   | Relationship Compatibility Report        | Active |
| BUS201_Orders   | Business Success Report                  | Active |

---

## Standard Sheet Columns

## Common Sheet Structure

All worksheets begin with the following common fields:

| Column | Field          |
| ------ | -------------- |
| A      | Timestamp      |
| B      | Order ID       |
| C      | Product Code   |
| D      | Payment Amount |
| E      | Payment ID     |

The remaining columns are product-specific depending on the information required for each report.

---

## Report Status Values

| Status    | Meaning                       |
| --------- | ----------------------------- |
| Pending   | Report generation not started |
| Completed | Report generated successfully |
| Failed    | Report generation failed      |

---

## Email Status Values

| Status  | Meaning                      |
| ------- | ---------------------------- |
| Pending | Email not sent               |
| Sent    | Email delivered successfully |
| Failed  | Email delivery failed        |

---

## Gemini Status Values

| Status    | Meaning              |
| ----------| -------------------- |
| Pending   | API not called       |
| Completed | AI response received |
| Failed    | Gemini API error     |

---

## Retry Count

Used for future automatic retry mechanism.

| Status    | Meaning                      |
| ----------| ---------------------------- |
| Pending   | API not called               |
| Completed | AI report generated          |
| Failed    | Gemini API request failed    |

---

## Order ID Format

### Blueprint

```text id="2yz5rc"
BLUE501-000001
```

### AI051

```text id="d5z6v9"
AI051-000001
```

### AI101

```text id="xqtxaj"
AI101-000001
```

### NAME101

NAME101-000001


### REL151

REL151-000001


### BUS201

BUS201-000001

---

## Data Flow

```text id="ycf4ls"
User Submission

↓

Request Validation

↓

Google Sheets Entry

↓

Gemini Report Generation

↓

PDF Generation

↓

Email Delivery

↓

Status Update

↓

Order Completed
```
---

## Future Expansion

Each new product should have:

* Separate worksheet
* Independent Order ID sequence
* Product-specific data columns
* Independent report history
* Independent processing status
* Dedicated Sheet Service


# Part 7 — Gemini AI Integration

## AI Model

| Configuration   | Value            |
| --------------- | ---------------- |
| AI Provider     | Google Gemini    |
| Current Model   | gemini-2.5-flash |
| API Type        | Gemini API       |
| Authentication  | API Key          |
| Response Format | JSON             |

---

## Gemini Workflow

```text
User Request

↓

Request Validation

↓

Numerology Calculations

↓

Generate Product-specific Prompt

↓

Gemini API Request

↓

AI Response

↓

Report Processing

↓

PDF Generation

↓

Email Delivery
```
---

## Gemini Service Files
```
| Product | Gemini Service File        |
| ------- | -------------------------- |
| BLUE501 | GeminiService.gs           |
| NAME101 | GeminiServiceName101.gs    |
| REL151  | GeminiServiceREL151.gs     |
| BUS201  | GeminiServiceBUS201.gs     |
```
---

## Configuration Files

| Product | Configuration File |
| ------- | ------------------ |
| Common  | CommonConfig.gs    |
| BLUE501 | Config.gs          |
| AI051   | ConfigAI051.gs     |
| AI101   | ConfigAI101.gs     |
| NAME101 | ConfigName101.gs   |
| REL151  | ConfigREL151.gs    |
| BUS201  | ConfigBUS201.gs    |

---

## API Configuration

| Parameter     | Value            |
| ------------- | ---------------- |
| Provider      | Google Gemini    |
| Model         | gemini-2.5-flash |
| Method        | generateContent  |
| Request Type  | POST             |
| Response Type | JSON             |

---

## Gemini Processing Sequence

```text
Generate Product Prompt

↓

Create JSON Payload

↓

Call Gemini API

↓

Receive JSON Response

↓

Extract Generated Report

↓

Return Final Report
```
---

## AI Prompt Structure

```text
System Instructions

↓

Product-specific Instructions

↓

User Information

↓

Numerology Calculations

↓

Language Instructions

↓

Formatting Rules

↓

Final AI Prompt
```

---

## Supported Languages

| Language | Status |
| -------- | ------ |
| English  | Active |
| Hindi    | Active |

---

## Error Handling

| Error Type          | Action                                  |
| ------------------- | --------------------------------------- |
| Invalid API Key     | Stop Processing                         |
| Gemini Timeout      | Return Failure                          |
| Service Unavailable | Return Failure                          |
| Empty Response      | Return Failure                          |
| Invalid JSON        | Return Failure                          |

---

## Current Gemini Features

* Personalized Report Generation
* Life Path Number Analysis
* Expression Number Analysis
* Business Name Number Analysis
* Relationship Compatibility Analysis
* AI Question Answering
* English Report Generation
* Hindi Report Generation
* Product-specific Prompt Generation
* PDF-ready Report Formatting

---

## Future Enhancements

* Automatic Retry Mechanism
* Multiple Model Support
* AI Response Caching
* Streaming Responses
* Performance Monitoring
* AI Usage Analytics
* Multi-language Expansion
* Modular Prompt Templates
* AI Quality Monitoring
  

# Part 8 — Deployment & Production Process

## Hosting Platform

| Component     | Platform           |
| ------------- | ------------------ |
| Website       | GitHub Pages       |
| Backend       | Google Apps Script |
| AI Engine     | Google Gemini API  |
| Database      | Google Sheets      |
| Email Service | Gmail Service      |

---

## Website Deployment

```text
Developer

↓

GitHub Repository

↓

Commit Changes

↓

GitHub Actions

↓

GitHub Pages Deployment

↓

Live Website
```

---

## Apps Script Deployment

```text
Developer

↓

Save Project

↓

Deploy

↓

Manage Deployments

↓

Edit Deployment

↓

Create New Version

↓

Deploy

↓

Production Web App Updated
```

---

## Deployment Configuration

| Setting         | Value   |
| --------------- | ------- |
| Execute As      | Me      |
| Who Has Access  | Anyone  |
| Deployment Type | Web App |

---

## Production Update Workflow

```text
Modify Code

↓

Save

↓

Run Test Functions

↓

Deploy New Version

↓

Website Testing

↓

Production Verification
```

---

## Testing Checklist

### Website

* Home Page
* Calculator Pages
* AI Forms
* Navigation
* Thank You Page

---

### Backend

* Form Submission
* Router
* Validation
* Gemini API
* PDF Generation
* Email Delivery
* Google Sheets Entry

---

### Products

| Product | Test Status |
| ------- | ----------- |
| BLUE501 | Verify      |
| AI051   | Verify      |
| AI101   | Verify      |
| NAME101 | Verify      |
| REL151  | Verify      |
| BUS201  | Verify      |

---

## Production Verification

* Form Submitted Successfully
* Input Validation Passed
* Google Sheet Updated
* Gemini Response Received
* AI Report Generated
* PDF Generated
* Email Delivered
* Thank You Page Displayed

---

## GitHub Branch

| Branch | Purpose    |
| ------ | ---------- |
| main   | Production |

---

## Version Management

Every production deployment must include:

* Code Review
* Successful End-to-End Testing
* New Apps Script Version
* New GitHub Commit
* Production Verification
* Backup Before Major Changes
---

## Deployment Rules

* Never deploy untested code.
* Always create a new Apps Script deployment version after backend changes.
* Verify all active products after deployment.
* Confirm Google Sheets, PDF, Email and Gemini API are working correctly.
* Keep GitHub and Apps Script in sync.
* Create project backups before major updates.
* Maintain production stability before starting new feature development.

# Part 9 — Coding Standards & Development Guidelines

## Naming Convention

### HTML Files

```text id="q57rkm"
index.html
thank-you.html
ask-numerology-ai.html
ask-numerology-ai-form.html
life-path-calculator.html
```

---

### CSS Files

```text id="bsl13d"
style.css
responsive.css
```

---

### JavaScript Files

```text id="ppfmmi"
script.js
calculator.js
payment.js
```

---

### Google Apps Script Files

```text id="b5vyo7"
Router.gs

CommonConfig.gs

Config.gs

ConfigAI051.gs

ConfigAI101.gs

ConfigName101.gs

ConfigREL151.gs

ConfigBUS201.gs

WebApp.gs

WebAppAI051.gs

WebAppAI101.gs

WebAppName101.gs

WebAppREL151.gs

WebAppBUS201.gs

Code.gs

CodeAI051.gs

CodeAI101.gs

CodeName101.gs

CodeREL151.gs

CodeBUS201.gs

GeminiService.gs

GeminiServiceName101.gs

GeminiServiceREL151.gs

GeminiServiceBUS201.gs

PDFService.gs

PDFServiceAI051.gs

PDFServiceAI101.gs

PdfServiceName101.gs

PdfServiceREL151.gs

PdfServiceBUS201.gs

EmailService.gs

EmailServiceAI051.gs

EmailServiceAI101.gs

EmailServiceName101.gs

EmailServiceREL151.gs

EmailServiceBUS201.gs

SheetService.gs

SheetServiceAI051.gs

SheetServiceAI101.gs

SheetServiceName101.gs

SheetServiceREL151.gs

SheetServiceBUS201.gs
```

## Product Naming Standard
```
| Product                     | Prefix |
| --------------------------- | ------ |
| Premium Blueprint           | BLUE   |
| Ask Numerology AI           | AI     |
| Name Numerology             | NAME   |
| Relationship Compatibility  | REL    |
| Business Success            | BUS    |
---
```
## Function Naming

Functions must use **camelCase**.

Examples:

```text id="fjp3bj"
processBUS201Request()

processREL151Request()

processName101Request()

generateRelationshipReport()

generateBUS201ReportEngine()

generateName101Report()

sendBUS201Email()

sendREL151Email()

sendName101Email()

calculateLifePathNumber()

calculateExpressionNumber()

getGeminiApiKey()
```

---

## Variable Naming

Variables must use **camelCase**.

Examples:

```text id="opapna"
fullName

paymentId

lifePath

reportStatus

emailStatus

paymentAmount
```

---

## Constants

Constants must use **UPPER_CASE**.

Examples:

```text id="5mn1rh"
GEMINI_MODEL

SCRIPT_URL

BLUE501_SHEET_NAME

NAME101_SHEET_NAME

REL151_SHEET_NAME

BUS201_SHEET_NAME
```

---

## File Structure Rules

Each product must contain its own independent modules.

```text id="jh6kbz"
Config

WebApp

Code

GeminiService

PDFService

EmailService

SheetService
```

---

## Development Rules

* One product must not directly modify another product's logic.
* Shared functionality should remain inside common files.
* Every new feature should be modular.
* Avoid duplicate code whenever possible.
* Maintain backward compatibility for production modules.

---

## Error Handling Rules

Every major function must use:

```text id="nh5h7a"
try {

}

catch(error) {

}
```

Errors should be:

* Logged
* Returned gracefully
* Never expose sensitive information to users

---

## Deployment Rules

* Save before deployment.
* Always create a new Apps Script deployment version.
* Verify production after deployment.
* Never deploy partially tested code.

---

## Documentation Rules

Every major module should have:

* Header Comment
* Version
* Product Name
* Purpose
* Clear Section Separators

---

## Future Development Rules

Every future product must follow the existing architecture.

Example:

```text id="rvj2wf"
ConfigXXX.gs

WebAppXXX.gs

CodeXXX.gs

GeminiServiceXXX.gs

PDFServiceXXX.gs

EmailServiceXXX.gs

SheetServiceXXX.gs
```

No future product should break compatibility with existing production modules.

---

## Version Policy

* Stable production versions must be documented.
* Significant architectural changes require a new documentation version.
* Production-ready modules should remain unchanged unless a verified bug or approved enhancement is required.

# Part 10 — Future Roadmap

## Current Project Status

**Project Name:** NumeroWise

**Current Version:** Version 1.0 (Stable)

**Core Architecture Status:** Completed

---

# Completed Modules

| Module                                 | Status           |
| -------------------------------------- | ---------------- |
| Website Architecture                   | Completed        |
| GitHub Pages Deployment                | Completed        |
| Google Apps Script Backend             | Completed        |
| Google Sheets Integration              | Completed        |
| Gemini AI Integration                  | Completed        |
| PDF Generation System                  | Completed        |
| Email Delivery System                  | Completed        |
| Payment Integration                    | Completed        |
| Premium Numerology Blueprint (BLUE501) | Production Ready |
| Ask Numerology AI (AI051)              | Production Ready |
| Ask Numerology AI (AI101)              | Production Ready |
| Technical Documentation v1.0           | Completed        |

---

# Current Production Version

**Version 1.0 Stable**

This version includes all core components required to operate NumeroWise as a complete AI-powered numerology platform.

---

# Future Product Roadmap

## Phase 2

### AI201

* Advanced Numerology Consultation
* Extended AI Interpretation
* Premium Personalized Guidance

Status:

Reserved

---

### AI501

* Deep Life Analysis
* Multi-topic Consultation
* Advanced AI Report

Status:

Reserved

---

### AI1001

* Complete AI Numerology Consultation
* Comprehensive Life Blueprint
* Professional Grade Report

Status:

Reserved

---

# Future Website Features

* User Dashboard
* Report Download History
* Customer Login System
* Order Tracking
* Saved Reports
* Referral Program
* Coupon System
* Affiliate Dashboard
* Admin Panel

---

# Future AI Features

* Automatic Retry Mechanism
* Multi-model AI Support
* AI Performance Monitoring
* Prompt Optimization
* Intelligent Response Caching
* AI Analytics Dashboard

---

# Future Business Features

* Additional Payment Gateways
* Subscription Plans
* Membership Portal
* Premium Learning Resources
* Audio Reports
* Video Reports
* Personalized Recommendations

---

# Long-Term Vision

NumeroWise aims to become a comprehensive AI-powered numerology platform offering intelligent, personalized, and professional-quality reports through a scalable modular architecture.

The project is designed to support continuous expansion while maintaining backward compatibility and production stability.

---

# Version History

| Version     | Description                        | Status  |
| ----------- | ---------------------------------- | ------- |
| Version 1.0 | Core Platform Release              | Stable  |
| Version 1.1 | Minor Improvements & Optimizations | Planned |
| Version 2.0 | Advanced AI Product Expansion      | Planned |

---

# Maintenance Policy

* Production modules remain unchanged unless a verified bug is identified or an approved enhancement is required.
* New functionality should be added through new modules without affecting existing stable products.
* Every stable release must be documented and backed up before major development begins.

---

# Project Milestone

**NumeroWise Version 1.0 Stable** marks the successful completion of the core AI-powered numerology platform, including:

* Website
* AI Engine
* PDF Generation
* Email Automation
* Payment Flow
* Google Sheets Integration
* Technical Documentation

This version serves as the foundation for all future NumeroWise products and enhancements.

# Part 11 — Maintenance & Backup Policy

## Project Maintenance Policy

NumeroWise follows a stability-first development approach.

Once a module is marked as **Production Ready**, no structural changes should be made unless:

* A verified bug is identified.
* A security issue is discovered.
* An approved enhancement is planned.

---

# Backup Policy

A complete project backup must be created:

* Before major feature development.
* Before architectural changes.
* Before production version upgrades.

Each backup should include:

* GitHub Source Code
* Google Apps Script Project
* Technical Documentation
* Images
* Assets
* Templates

---

# Backup Naming Convention

```text
NumeroWise_v1.0_Stable_Backup

NumeroWise_v1.1_Backup

NumeroWise_v2.0_Backup
```

---

# Documentation Update Policy

Technical documentation must be updated whenever:

* A new product is added.
* The project architecture changes.
* A new deployment process is introduced.
* Major modules are modified.

Every documentation update should include:

* Version Number
* Date
* Summary of Changes

---

# Production Release Checklist

Before every production release, verify:

* Website loads correctly.
* Forms submit successfully.
* Google Sheets receives data.
* Gemini AI responds correctly.
* PDF generation succeeds.
* Email delivery succeeds.
* Thank You page loads correctly.
* No JavaScript console errors.
* No Apps Script execution errors.

---

# Version Freeze Policy

After a stable production release:

* Freeze the current version.
* Create a full backup.
* Begin development only on the next version.

---

# Change Log

| Version | Date      | Description            |
| ------- | --------- | ---------------------- |
| 1.0     | July 2026 | Initial Stable Release |

---

# End of Documentation

**Document Name**

NUMEROWISE_TECHNICAL_DOCUMENTATION_v1.0.md

**Current Status**

Completed

**Version**

1.0 Stable

**Last Updated**

July 2026



