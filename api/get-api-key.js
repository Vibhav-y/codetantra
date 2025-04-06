const API_KEY = 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo'; // Replace with your actual API key
const validMachineIds = new Set(['0C-54-15-EB-DA', '00-41-0E-2B-A2-79']); // Initial machine IDs

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { machine_id } = req.body;

        if (machine_id) {
            if (validMachineIds.has(machine_id)) {
                res.status(200).json({ examdbms: true, api_key: API_KEY });
            } else {
                res.status(401).json({ error: 'Machine ID not recognized. Please contact support.', error_code: 401 });
            }
        } else {
            res.status(400).json({ error: 'Machine ID is required.', error_code: 400 });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}
