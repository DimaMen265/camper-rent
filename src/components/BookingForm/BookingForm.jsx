import React, { useState } from "react";

import styles from "./BookingForm.module.css";

export const BookingForm = ({ closing }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        comment: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!isValidEmail(formData.email.trim())) {
            newErrors.email = "Invalid email address";
        }
        if (!formData.date) {
            newErrors.date = "Date is required";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log(formData);
            closing();
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div className={styles.formContainer}>
            <div className={styles.titleContainer}>
                <h3 className={styles.formTitle}>Book your campervan now</h3>
                <p className={styles.formText}>Stay connected! We are always ready to help you.</p>
            </div>
            <form onSubmit={handleSubmit} className={styles.bookingForm}>
                <div className={styles.subContainer}>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className={styles.input}
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={styles.input}
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
                    </div>
                    <div>
                        <input
                            type="date"
                            name="date"
                            placeholder="Booking date"
                            className={styles.input}
                            value={formData.date}
                            onChange={handleChange}
                        />
                        {errors.date && <p className={styles.errorMessage}>{errors.date}</p>}
                    </div>
                    <div>
                        <textarea
                            name="comment"
                            placeholder="Comment"
                            className={styles.comment}
                            value={formData.comment}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button type="submit" className={styles.buttonForm}>Send</button>
            </form>
        </div>
    );
};
