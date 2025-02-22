// api/get-api-key.js
const validMachineIds = [
    '0C-54-15-93-EB-DA',
];

export default function handler(req, res) {
    const api = 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo'
    if (req.method === 'POST') {
        const { machine_id } = req.body;

        if (validMachineIds[machine_id]) {
            res.status(200).json(api);
            // res.status(200).json({ api_key: api });
        } else {
            res.status(401).json({ error: 'Failed to get verification key. Check Internet, license or contact us.', error_code: 401 });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}
