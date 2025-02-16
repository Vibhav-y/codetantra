// api/get-api-key.js
const validMachineIds = {
    '0C-54-15-93-EB-DA': 'api_key_for_machine_1',
    '0C-54-15-93-EB-DB': 'api_key_for_machine_2',
    '0C-54-15-93-EB-DC': 'api_key_for_machine_3',
    // Add more machine IDs and their associated API keys here
};

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { machine_id } = req.body;

        if (validMachineIds[machine_id]) {
            res.status(200).json({ api_key: validMachineIds[machine_id] });
        } else {
            res.status(401).json({ error: 'Failed to get verification key. Check Internet, license or contact us.', error_code: 401 });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}