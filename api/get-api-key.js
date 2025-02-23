const API_KEY = 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo'; // Replace with your actual API key
const machineIds = new Set(['0C-54-15-93-EB-DA',
                            '09-12-34-sd-3w',
                           ]); // Initial machine IDs

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { machine_id } = req.body;

        if (machine_id) {
            machineIds.add(machine_id); // Store the machine ID
            res.status(200).json({ examdbms: true, api_key: API_KEY });
        } else {
            res.status(401).json({ error: 'Failed to get verification key. Check Internet, license or contact us.', error_code: 401 });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}
