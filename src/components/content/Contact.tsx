import "./Contact.css";
import { Button, Form, Input, message } from "antd";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { useState } from "react";

const Contact = () => {
  const [phoneContact, setPhoneContact] = useState();
  const [sendContact, setSendContact] = useState(false);

  const onFinish = (values: any) => {
    if (!sendContact) {
      setSendContact(true);
      message.success("Votre demande de contact a été envoyé avec succès");
    } else {
      message.error(
        "Chat chuffit. On a déjà bien reçu votre demande, on va la regarder rapidement."
      );
    }
  };

  return (
    <div id="form-contact" className="form-contact">
      <h2>Chat alors, vous avez besoin de nous contacter ?</h2>
      <p>Dans ces cas là, ce formulaire de contact est à votre disposition</p>
      <Form
        layout="vertical"
        labelAlign="right"
        scrollToFirstError
        onFinish={onFinish}
      >
        <Form.Item
          name="name-lastname"
          label="Prénom & Nom"
          rules={[
            {
              type: "string",
              message:
                "Chat crebleu ! Ce n'est pas le format attendu, on attends votre prénom et nom.",
            },
            {
              required: true,
              message:
                "Chat crebleu ! Veuillez mettre votre prénom et votre nom, on en a besoin !",
            },
          ]}
        >
          <Input
            id="name-lastname"
            className="input-name-lastname"
            placeholder="Prénom & Nom"
          />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message:
                "Chat crebleu ! Ce n'est pas le format attendu, on attends un email.",
            },
            {
              required: true,
              message:
                "Chat crebleu ! Veuillez mettre votre E-mail, on en a besoin !",
            },
          ]}
        >
          <Input id="email" className="input-email" placeholder="E-mail" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Téléphone"
          rules={[
            {
              required: true,
              message:
                "Chat crebleu ! Veuillez mettre votre Téléphone, on en a besoin !",
            },
          ]}
        >
          <PhoneInput
            international={false}
            defaultCountry="FR"
            placeholder="Téléphone"
            onChange={setPhoneContact}
            className="input-phone"
            value={phoneContact}
            error={
              phoneContact
                ? isValidPhoneNumber(phoneContact)
                  ? undefined
                  : "Invalid phone number"
                : "Phone number required"
            }
          />
        </Form.Item>
        <Form.Item
          name="message"
          label="Message"
          rules={[
            {
              required: true,
              message:
                "Chat crebleu ! Veuillez nous indiquer pourquoi vous nous contacter, on en a besoin !",
            },
          ]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Envoyez
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Contact;
