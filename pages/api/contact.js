export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { fullname, email, phone, subject, message } = req.body;
        const apiKey = process.env.YOUR_ACCESS_KEY;
        
        const response = await fetch('https://api.we3forms.com/api/v1/form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                fullname,
                email,
                phone,
                subject,
                message
            })
        });

        if (response.ok) {
            res.status(200).json({ message: 'Mensagem enviada!' });
        } else {
            res.status(response.status).json({ message: 'Falha ao enviar.' });
        }
    } else {
        res.status(405).json({ message: 'Método não permitido. (Não é o POST)' });
    }
}