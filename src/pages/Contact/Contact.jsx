import React, { useState } from 'react';
import './Contact.css';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const messageText = `Ism: ${name}\nEmail: ${email}\nMavzu: ${subject}\nXabar: ${message}`;
    const telegramLink = `https://t.me/qowinov7?text=${encodeURIComponent(messageText)}`;
    window.open(telegramLink, '_blank');
  };

  return (
    <div className="r">
      <div className="contact-page">
        <div className="contact-container">
          <h2>Bog‘lanish</h2>
          <p className="description">
            Biz bilan bog‘laning! Agar sizda savollar bo‘lsa yoki biror narsa haqida so‘ramoqchi bo‘lsangiz, quyidagi formani to‘ldiring.
          </p>
          <div className="content-wrapper">
            <div className="contact-info">
              <h3>Bizga murojaat qiling!</h3>
              <p>
                Biz har doim sizning savollaringizga javob berishga tayyormiz. Quyidagi forma orqali xabar yuboring yoki ijtimoiy tarmoqlarda bizni kuzating.
              </p>
              <div className="social-icons">
                <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="Facebook" /></a>
                <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png" alt="Twitter" /></a>
                <a href="https://www.instagram.com/qowinov7"><img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" /></a>
                <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" /></a>
              </div>
            </div>
            <div className="form-wrapper">
              <form onSubmit={handleSubmit} className="form">
                <input
                  type="text"
                  placeholder="Ismingiz"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="input"
                />
                <input
                  type="email"
                  placeholder="Email manzilingiz"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input"
                />
                <input
                  type="text"
                  placeholder="Mavzu"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="input"
                />
                <textarea
                  placeholder="Xabaringizni yozing..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="textarea"
                />
                <button type="submit" className="submit-button">Xabar yuborish</button>
              </form>
            </div>
          </div>
          {/* Pastda qo'shimcha ma'lumotlar bo'limi */}
          <div className="additional-contact-info">
            <h3>Bizning aloqa ma'lumotlarimiz</h3>
            <div className="contact-details">
              <div className="contact-item">
                <span className="icon"><MdOutlineAlternateEmail/></span> <strong>Email:</strong>temurqowinov@gmail.com
              </div>
              <div className="contact-item">
                <span className="icon"><FaPhoneVolume />
</span> <strong>Telefon:</strong> +998 77 506 63 43
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;