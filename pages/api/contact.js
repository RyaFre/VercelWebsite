// pages/api/contact.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;
      // Here you can integrate with an email service or database
      console.log('Contact form submission:', { name, email, message });
      return res.status(200).json({ message: 'Thank you for reaching out! We will be in touch soon.' });
    }
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  