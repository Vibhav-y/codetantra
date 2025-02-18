// api/get-api-key.js
const validMachineIds = {
    '0C-54-15-93-EB-DA': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo',
    '10-6F-D9-32-D8-53': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo',
    '00-41-0E-2B-A2-79': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo',
    '10-68-38-0A-54-05': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo',
    '2C-3B-70-58-89-1D': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo',
    '10-3D-1C-42-90-73': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo',
    '14-D4-24-34-99-91': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo',
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
