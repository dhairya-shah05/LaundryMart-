# 🧺 LaundryMart

LaundryMart is a responsive laundry service booking website built using **HTML, CSS, and JavaScript**. The platform allows users to browse available laundry services, add them to a cart, view the total cost, and book services online. Upon successful booking, a confirmation email containing the booking details is sent automatically using **EmailJS**.


## 🚀 Features

- Modern and responsive user interface
- Browse available laundry services
- Add and remove services from cart
- Dynamic cart updates
- Automatic total price calculation
- Customer booking form
- Email confirmation using EmailJS
- Cart reset after successful booking
- About Us section
- Newsletter subscription section
- Smooth navigation between sections


## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- EmailJS
- Remix Icons


## 📂 Project Structure

```text
LaundryMart/
│
├── index.html
├── styles.css
├── script.js
├── email.js
│
├── img/
│   ├── Washing machine.png
│   ├── washing-machine-logo.png
│   ├── support.png
│   ├── delivered.png
│   └── affordable.png
│
└── README.md
```


## 📋 How It Works

### 1. Browse Services

Users can browse the list of laundry services available on the website, including:

- Dry Cleaning
- Wash & Fold
- Ironing
- Stain Removal
- Leather & Suede Cleaning
- Wedding Dress Cleaning

### 2. Add Services to Cart

Clicking the **Add Item** button:

- Adds the service to the cart
- Updates the total amount
- Changes the button to **Remove Item**

Users can remove services at any time before booking.

### 3. Book a Service

The user enters:

- Full Name
- Email Address
- Phone Number

and clicks **Book Now**.

### 4. Receive Booking Confirmation

After successful submission:

- Booking details are sent via EmailJS
- User receives a confirmation email
- Cart is cleared
- Service buttons reset to their default state
- Success message is displayed on the page


## 📧 EmailJS Integration

This project uses EmailJS to send booking confirmation emails directly from the frontend without requiring a backend server.

### Email Template Variables

The following variables are sent to EmailJS:

| Variable | Description |
|-----------|-------------|
| `{{name}}` | Customer Name |
| `{{email}}` | Customer Email |
| `{{phone}}` | Customer Phone Number |
| `{{items}}` | Selected Services |
| `{{total}}` | Total Booking Amount |

### Example Email Template

```html
<p>Hi {{name}},</p>

<p>Thank you for booking our services.</p>

<p><strong>Booking Details</strong></p>

<p>
Email: {{email}}<br>
Phone: {{phone}}<br>
Selected Services:<br>
{{items}}<br><br>

Total Amount: {{total}}
</p>

<p>
Best regards,<br>
LaundryMart
</p>
```

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/laundrymart.git
```

### 2. Open the Project

Simply open:

```text
index.html
```

in your browser.

### 3. Configure EmailJS

Create an account at:

https://www.emailjs.com

Create:

- Email Service
- Email Template
- Public Key

Update the credentials inside `email.js`:

```javascript
emailjs.init("YOUR_PUBLIC_KEY");

emailjs.sendForm(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    document.getElementById("customer-detail")
);
```

## 🎯 Key Functionalities

### Dynamic Cart Management

- Add services
- Remove services
- Update serial numbers
- Update total price
- Display empty cart message

### Booking System

- Collect customer details
- Send booking confirmation email
- Display success message
- Reset cart and form after booking

### User Interface

- Responsive layout
- Interactive buttons
- Service cards
- Shopping cart section
- Footer navigation

## 🔮 Future Improvements

Possible enhancements for future versions:

- Mobile-first responsive design
- User authentication
- Payment gateway integration
- Booking history
- Admin dashboard
- Database integration
- Real-time order tracking
- Service quantity selection
- Coupon and discount system


## 📚 Learning Outcomes

This project helped in understanding:

- DOM Manipulation
- Event Handling
- Form Handling
- Dynamic Content Rendering
- JavaScript Data Attributes
- EmailJS Integration
- State Management in Frontend Applications
- Responsive Web Design


## 📸 Screenshots

Add screenshots of the following sections:

- Home Page
- Services Section
- Shopping Cart
- Booking Form
- Confirmation Email

Example:

```text
screenshots/
├── homepage.png
├── services.png
├── cart.png
├── booking-form.png
└── email-confirmation.png
```


## 👨‍💻 Author

**Dhairya Shah**

B.Tech Information Technology  
Vishwakarma Institute of Information Technology (VIIT), Pune


## 📄 License

This project is developed for educational and learning purposes. Feel free to use, modify, and enhance it for personal or academic projects.
