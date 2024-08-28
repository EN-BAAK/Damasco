import React, { useState } from 'react'
import HeadingTitle from './HeadingTitle'
import { Form, Button, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Contact = (): React.JSX.Element => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    subject: '',
    message: ''
  });

  const { t: translating, i18n } = useTranslation("global");
  const arStyle = i18n.language === "ar" ? "ar" : "en"
  const isArabic = i18n.language === "ar"

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      mobile: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id='contact' className={arStyle}>
      <HeadingTitle
        title={translating("global.contact")}
      />

      <Form onSubmit={handleSubmit} className={`row g-3 ${arStyle}`}>
        <Col md={6} sm={12} xs={12} data-ani={isArabic ? "left" : "right"}>
          <Form.Group controlId="formName">
            <Form.Control
              type="text"
              name="name"
              placeholder={translating("contact.form.name")}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>

        <Col md={6} sm={12} xs={12} data-ani={isArabic ? "right" : "left"}>
          <Form.Group controlId="formMobile">
            <Form.Control
              type="text"
              name="mobile"
              pattern="\+[0-9]+"
              placeholder={translating("contact.form.mobile")}
              value={formData.mobile}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Col md={6} sm={12} xs={12} data-ani={isArabic ? "left" : "right"}>
          <Form.Group controlId="formEmail">
            <Form.Control
              type="email"
              name="email"
              placeholder={translating("contact.form.email")}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>

        <Col md={6} sm={12} xs={12} data-ani={isArabic ? "right" : "left"}>
          <Form.Group controlId="formSubject">
            <Form.Control
              type="text"
              name="subject"
              placeholder={translating("contact.form.subject")}
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>

        <Col sm={12} xs={12} data-ani="up">
          <Form.Group controlId="formMessage">
            <Form.Control
              as="textarea"
              name="message"
              placeholder={translating("contact.form.message")}
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
            />
          </Form.Group>
        </Col>

        <Button type="submit" className='submit' data-ani="up">
          {translating("contact.form.confirm")}
        </Button>
      </Form>

    </section>
  )
}

export default Contact
